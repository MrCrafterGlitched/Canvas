canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=3;
ctx.arc(100,100,50,0,2*Math.PI);
ctx.stroke();
colour="black"
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(event){
    mouse_x=event.clientX-canvas.offsetLeft;
mouse_y=event.clientY-canvas.offsetTop;
colour=document.getElementById("Colour").value;
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=3;
ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
ctx.stroke();
}
function Clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}