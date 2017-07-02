var $ = function(e){return document.querySelector(e)}, i = new Image(), s = new Image(), b = $('canvas'), c = b.getContext('2d');
function l(e) {
    i.onload = function() {
      var w = Math.min(this.width, this.height), h = Math.min(this.width, this.height);
      b.width = w, b.height = h, s.width = w, s.height = h;
      s.onload = function() {
        c.drawImage(s, 0, 0);
		    c.globalCompositeOperation = 'source-atop';
		    c.drawImage(i, 0, 0);
        b.style.visibility = 'visible', $('a').href=b.toDataURL();
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