
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	dustbinimg = loadImage("sprites/Dustbinimgs.png")
	
}

function setup() {
	createCanvas(1600, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	db1 = new Dustbin (1190,550,200,20)
	db2 = new Dustbin (1100,467,20,190)
	db3 = new Dustbin (1280,467,20,190)

	ground = new Ground (800,570,1600,20)

	paper = new Paper (150,550,70)

	dustbin = createSprite(1190,465,20,100)
    dustbin.addImage(dustbinimg)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //db1.display()
  //db2.display()
  //db3.display()
  ground.display()
  paper.display()

  drawSprites();

  keyPressed()
 
}

function keyPressed() {

	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position,{x: 13, y: -35})

	}

}



