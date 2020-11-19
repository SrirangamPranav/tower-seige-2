const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,stand1,stand2,stand3;
var hexagonimg,hexagon;
var slingshot1;

function preload(){
  polygonImg=loadImage("hexagon img.png");
}
function setup() {
  engine = Engine.create();
  world = engine.world
  
  createCanvas(1300,500);
  //First layer from left to right
  box1 = new Box(940,440,40,40);
  box2 = new Box(960,440,40,40);
  box3 = new Box(980,440,40,40);
  box4 = new Box(1000,440,40,40);
  box5 = new Box(1020,440,40,40);
  //Second Layer from left to right
  box6 = new Box(950,420,40,40);
  box7 = new Box(970,420,40,40);
  box8 = new Box(990,420,40,40);
  box9 = new Box(1010,420,40,40);
  //Third layer from left to right
  box10 = new Box(960,400,40,40);
  box11 = new Box(980,400,40,40);
  box12 = new Box(1000,400,40,40);
  //Fourth layer from left to right
  box13 = new Box(970,380,40,40);
  box14 = new Box(990,380,40,40);
  //Fifth layer from left to right
  box15 = new Box(980,360,40,40);
  
  //Stand2
  //First layer form left to right
  box16 = new Box(760,140,40,40);
  box17 = new Box(780,140,40,40);
  box18 = new Box(800,140,40,40);
  //Second layer from left to right
  box19 = new Box(770,120,40,40);
  box20 = new Box(790,120,40,40);
  //Third layer from left to right
  box21 = new Box(780,100,40,40);

  //Stand3
  //First layer form left to right
  box22 = new Box(1160,140,40,40);
  box23 = new Box(1180,140,40,40);
  box24 = new Box(1200,140,40,40);
  //Second layer from left to right
  box25 = new Box(1170,120,40,40);
  box26 = new Box(1190,120,40,40);
  //Third layer from left to right
  box27 = new Box(1180,100,40,40);
   
  //creating stand 
  stand1 = new Ground(980,450,280,15);
  stand2 = new Ground(780,150,200,15);
  stand3 = new Ground(1180,150,200,15);

  
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
    stiffness:0.04
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);

  slingshot1 = new sling(this.polygon,{x:350,y:110})

}

function draw() {
  background(74,66,66);  

  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
 
  
  stand1.display();
  stand2.display();
  stand3.display();

  
  slingshot1.display();

  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,150,150);

 

}

function keyPressed()
{
  if (keyCode === 32)
  {
    Matter.Body.setPosition(this.polygon, {x:350, y:110}) 
	  slingshot1.attach(this.polygon);
  }
 }

function mouseDragged()
{
  Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY}) 
}


function mouseReleased()
{
	slingshot1.fly();
    
}