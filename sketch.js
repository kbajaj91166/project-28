
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var boy;
var ground1;
var tree1;
var stone1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var launcher1;
function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	ground1=new ground(width/2,600,width,20);
    tree1=new tree(1050,580);
	stone1=new stone(235,420,30);

	mango1=new mango(1100,100,30);
	mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

  launcher1=new launcher(stone1.body,{x:235,y:420})
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image(boy,200,340,200,300);
  ground1.display();
  tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  drawSprites();

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  detectollision(stone1,mango9);
  detectollision(stone1,mango10);
  detectollision(stone1,mango11);
  detectollision(stone1,mango12);
 
}

function mouseDragged()
{
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
  launcher1.fly();
}

function detectollision(lstone,lmango)
{
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

    if(distance<=lmango.r+lstone.r){
       Matter.Body.setStatic(lmango.body,false);
    }
}