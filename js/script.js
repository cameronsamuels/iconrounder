var template = new Image();
template.src = "images/template.svg";

document.querySelector("input").onchange = function() {
  if (!this.files) return;
  var fileReader = new FileReader();
  fileReader.onload = function(e) {
    var icon = new Image();
    icon.onload = function() {
      var size = Math.min(icon.width, icon.height);
      var canvas = document.querySelector("canvas");
      var context = canvas.getContext("2d");
      canvas.width = size;
      canvas.height = size;
      context.clearRect(0, 0, size, size);
      context.drawImage(template, 0, 0, size, size);
      context.globalCompositeOperation = "source-atop";
      context.drawImage(icon, (size - icon.width) / 2, (size - icon.height) / 2);
      document.querySelector("a").href = canvas.toDataURL();
    };
    icon.src = e.target.result;
  };
  fileReader.readAsDataURL(this.files[0]);
};
