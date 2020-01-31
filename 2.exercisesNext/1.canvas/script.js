canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("imgtest")
    console.log(img);
    ctx.drawImage(img, 10, 10);
};