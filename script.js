var $ = function(e){return document.querySelector(e)}, i = new Image(), s = new Image(), b = $('canvas'), c = b.getContext('2d');
s.src = "s.svg";
function l(e) {
    i.onload = function() {
      var w = Math.min(i.width, i.height);
      b.width = w, b.height = w;
      c.drawImage(s, 0, 0, w, w);
      c.globalCompositeOperation = 'source-atop';
      c.drawImage(i, 0, -(i.height-w)/2);
      $('a').href=b.toDataURL();
    }, i.src = e.target.result;
}
$('input').onchange = function() {
    if (this.files) {
        var r = new FileReader();
        r.onload = l;
        r.readAsDataURL(this.files[0]);
    }
}