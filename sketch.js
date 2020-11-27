
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper01,dustbin01,dustbin02,dustbin03,ground01;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper01 = new Paper(100,500,25); 
    dustbin01 = new Dustbin();
	// dustbin02 = new Dustbin(390,610,20,100);
	// dustbin03 = new Dustbin(610,610,20,100);
	ground01 = new Ground(400, 680, 800, 10 );

	Engine.run(engine);
  
}


function draw() {
	
	rectMode(CENTER);
	background("cyan");
	
	
	dustbin01.display();
	paper01.display();
	// dustbin02.display();
	// dustbin03.display();
	ground01.display();

	drawSprites();

}

function keyPressed (){
	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper01.body,paper01.body.position,{x:85,y:-85});
	}


}

