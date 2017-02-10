var canvas;
var context;
var length = 0;
var width = 0;

function drawPlain(form) {
    length = form.length.value;
    width = form.width.value;

    if(length <= 25 && length >= 1 && width <= 25 && width >= 1){
        length = length * 15;
        width = width * 15;
        draw(length, width);
    }else{
        length = 0;
        width = 0;
    }
}

function draw(length, width) {
    context.rect(50,50,width,length);
    context.strokeStyle = "black";
    context.stroke();
}

window.onload = function() {
    canvas = document.getElementById("house");
    context = canvas.getContext("2d");
};

function limpiar() {
    context.clearRect(0,0,canvas.width,canvas.length);
}