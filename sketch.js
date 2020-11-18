
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1;
var tree;
var boy,boyimg;
var stone1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var chain1;
function preload()
{
//treeimg=loadImage("tree.png");
boyimg=loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(600,500,500,400);
	//tree.addImage(treeimg);
	//tree.scale=0.3;
	boy=createSprite(180,623,10,10);
	boy.addImage(boyimg);
	boy.scale=0.1;
ground1=new Ground(400,680,800,16);
stone1=new Stone(120,560,40,40);
mango1=new Mango(670,400,50,50);
mango2=new Mango(640,470,50,50);
mango3=new Mango(580,390,50,50);
mango4=new Mango(520,370,50,50);
mango5=new Mango(550,390,50,50);
mango6=new Mango(750,465,50,50);
mango7=new Mango(430,409,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  tree.display();
  boy.display();
stone1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();

  drawSprites();
 
}



