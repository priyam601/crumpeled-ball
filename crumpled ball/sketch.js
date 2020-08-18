const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground , dustbin1; 

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(200,200,20,20);

	dustbin1 = new Dustbin(500,555,15,110);
	dustbin2 = new Dustbin(600,555,15,110);
	paper = new Crumpeled(10,10);
  dustbin3 = new Dustbin(550,585,115,15);
	
	
	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground.display();
  dustbin1.display();
  dustbin2.display();
  paper.display();
  dustbin3.display();

 

  //keyPressed();

  if (keyCode === UP_ARROW) { 

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

   }

   /*if(keyCode === UP_ARROW){

    keyPressed();

   }*/
  
   //keyPressed();
  
 
}

/*function keyPressed(){

if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

}


}*/



