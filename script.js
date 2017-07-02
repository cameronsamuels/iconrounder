var $ = function(e){return document.querySelector(e)}, i = new Image(), s = new Image(), b = $('canvas'), c = b.getContext('2d');
s.src = "s.svg";
function l(e) {
    i.onload = function() {
      var w = Math.min(this.width, this.height);
      b.width = w, b.height = w, s.width = w, s.height = w;
      // s.onload = function() {
        c.drawImage(s, 0, 0);
		    c.globalCompositeOperation = 'source-atop';
		    c.drawImage(i, 0, -(i.height-b.height)/2);
        b.style.visibility = 'visible', $('a').href=b.toDataURL();
      // }
      // s.src = "s.svg";
    }, i.src = e.target.result;
}
$('input').onchange = function() {
    if (this.files && this.files[0]) {
        var r = new FileReader();
        r.onload = l;
        r.readAsDataURL(this.files[0]);
    }
}