var $ = function(e){return document.querySelector(e)}, i = new Image(), s = new Image(), b = $('canvas'), c = b.getContext('2d');
function l(e) {
    i.onload = function() {
      var w = this.width, h = this.height;
      b.width = w, b.height = h, s.width = w, s.height = h;
      s.onload = function() {
        c.drawImage(s, 0, 0, w, h);
		    c.globalCompositeOperation = 'source-atop';
		    c.drawImage(i, 0, 0);
        b.style.visibility = 'visible', $('a').href=b.toDataURL("image/png");
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