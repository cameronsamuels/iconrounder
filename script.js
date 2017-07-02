var w = 0, h = 0, $ = function(e){return document.querySelector(e)}, i;
function l(e) {
    i = new Image();
    i.onload = function() {
      w = this.width, h = this.height;
      //Set canvas and svg mask to the correct dimensions
      $('canvas').width = w, $('canvas').height = h,
      s = new Image();
      s.width = w, s.height = h;
      //Put the image data in the image views
     //  $('#icon').setAttribute('src', e.target.result);
	    // $('#icon').style.visibility = 'visible';
     //  $('a').style.display = "block";
	    //Draw image and mask in canvas
  	 	var b = $('canvas'), c = b.getContext('2d');
      s.onload = function() {
        c.drawImage(s, 0, 0, w, h);
		    c.globalCompositeOperation = 'source-atop';
		    c.drawImage(new Image(e.target.result), 0, 0);
        $('#icon').setAttribute('src', b.toDataURL("image/png"));
        $('#icon').style.visibility = 'visible';
        $('a').style.display = "block";
    	  $('a').href=b.toDataURL("image/png");
      }
      s.src = "mask.svg";
    }, i.src = e.target.result;
};
$("a").onclick = function(e) {
      if (!$('#icon').getAttribute('src')) {
  		alert('Please upload a supported image file');
   		e.preventDefault();
   		return;
   	}
}
$('input').onchange = function() {
    if (this.files && this.files[0]) {
        var r = new FileReader();
        r.onload = l;
        r.readAsDataURL(this.files[0]);
    }
}