/**
 * Created by xushuailong on 2016/10/25.
 */
window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var degree = 36;
    context.save();
    context.translate(200, 200);
    context.fillStyle = "rgba(50, 50, 50, .5)";
    for (var i = 0; i < 360/degree; i++){
        context.fillRect(0, 0, 100, 100);
        context.rotate(degreesToRadians(degree));
    }
    console.restore();
}

function degreesToRadians(degrees) {
    radians = (degrees * Math.PI)/180;
    return radians;
}