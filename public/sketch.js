var canvas;
var ref;
var circPositions;
var l = 0,r = 0,u = 0,d = 0;
var pPos;
var playerKey;
var socket;


function setup() {
  canvas = createCanvas(400, 400);
  
  circPositions = [];
  circPositions.push(createVector(random(100),random(100)));
  pPos = createVector(circPositions[0].x,circPositions[0].y);

  socket = io.connect("https://movers2views.herokuapp.com/");

  
};


function keyPressed() {

  if(key === "a"){
    l = 1;
  } else if(key ==="d"){
    r = 1;
  } else if(key === "w"){
    u = 1;
  } else if(key === "s"){
    d = 1;
  }
}

function keyReleased(){
  if(key === "a"){
    l = 0;
  } else if(key ==="d"){
    r = 0;
  } else if(key === "w"){
    u = 0;
  } else if(key === "s"){
    d = 0;
  }
}


function moveCircle(){
  pPos.x = circPositions[0].x;
  pPos.y = circPositions[0].y;
  var normV = createVector(r-l,u-d);
  normV.normalize();
  normV = p5.Vector.mult(normV,5);

  circPositions[0].x += normV.x;
  circPositions[0].y -= normV.y;

  if((pPos.x != circPositions[0].x) || (pPos.y != circPositions[0].y)){
    var data = {
      name: "player1",
      posX: circPositions[0].x,
      posY: circPositions[0].y
    }


    socket.emit('sendPos',data);
  }
}

function draw() {
	background(0);
  moveCircle();

  fill(255);
  circle(circPositions[0].x,circPositions[0].y,25);


 
 }