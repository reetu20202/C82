canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color="";
var width="";
var radius="";
var current_position_of_mouse_x = 0;
var current_position_of_mouse_y = 0;
var mouseEvent = "";

window.addEventListener("mouseDown",myMousedown)
function myMousedown(e)
{
    color  = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
window.addEventListener("mouseUp",myMouseup)
function myMouseup(e)
{
    color  = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseUp";
}

window.addEventListener("mouseLeave",myMouseleave)
function myMouseleave(e)
{
    color  = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseLeave";
}




window.addEventListener("mousemove", myMousemove)
function myMousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "myMousedown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " +current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius, 0 , 2 * Math.PI);
        ctx.stroke();

    }
}