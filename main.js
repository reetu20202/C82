var canvas=document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color="blue";
var width=20;
var radius=10;
var current_position_of_mouse_x = 0;
var current_position_of_mouse_y = 0;
var mouseEvent = "";

function submit () {
        document.getElementById("heade1").innerHTML="Test sucessful"
}

window.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color  = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}
window.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    color  = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseup";
}

window.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    color  = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseleave";
}




window.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    radius=document.getElementById("radius").value;
    if (mouseEvent == "mousedown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " +current_position_of_mouse_y);
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0 , 2 * Math.PI);
        ctx.stroke();

    }
}