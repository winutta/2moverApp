var canvas;
var ref;
var circPositions;
var posX = 200, posY = 200;
var l = 0,r = 0,u = 0,d = 0;


function setup() {
  canvas = createCanvas(400, 400);

  socket = io.connect("https://movers2views.herokuapp.com/");
  socket.on('getPos',setPos);

  
};



function setPos(data){
  posX = data.posX;
  posY = data.posY;
}



function draw() {
	background(0);

  fill(0,0,220);
  circle(posX,posY,25);


 
 }