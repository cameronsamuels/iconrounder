var w = 0, h = 0, $ = function(e){return document.querySelector(e)}, i;
function l(e) {
    i = new Image();
    i.onload = function() {
      w = this.width, h = this.height;
      $('canvas').width = w, $('canvas').height = h,
      s = new Image();
      s.width = w, s.height = h;
  	 	var b = $('canvas'), c = b.getContext('2d');
      s.onload = function() {
        c.drawImage(s, 0, 0, w, h);
		    c.globalCompositeOperation = 'source-atop';
		    c.drawImage(i, 0, 0);
        $('img').setAttribute('src', b.toDataURL("image/png"));
        $('img').style.visibility = 'visible';
        $('a').style.display = "block";
    	  $('a').href=b.toDataURL("image/png");
      }
      s.src = "mask.svg";
    }, i.src = e.target.result;
}
$('input').onchange = function() {
    if (this.files && this.files[0]) {
        var r = new FileReader();
        r.onload = l;
        r.readAsDataURL(this.files[0]);
    }
}