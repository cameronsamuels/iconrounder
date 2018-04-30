document.addEventListener("DOMContentLoaded", function() {
  var template = new Image();
  template.src = "template.svg";
  var icon = new Image();
  var canvas = document.querySelector("canvas");
  var context = canvas.getContext("2d");

  document.querySelector("input").addEventListener("change", function() {
    if (!this.files) return;
    var fileReader = new FileReader();
    fileReader.addEventListener("load", function(result) {
      icon.addEventListener("load", function() {
        canvas.width = Math.min(icon.width, icon.height);
        canvas.height = Math.min(icon.width, icon.height);
        context.drawImage(template, 0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = "source-atop";
        context.drawImage(icon, (canvas.width - icon.width) / 2, (canvas.heigh - icon.height) / 2);
        document.querySelector("a").href = canvas.toDataURL();
      });
      icon.src = result.target.result; 
    });
    fileReader.readAsDataURL(this.files[0]);
  });
});
