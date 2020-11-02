var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,plank1,plank2,plank3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	 
    packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2






	plank12=createSprite(400,650,100,20)
	plank12.shapeColor="red";
	
	
	plank22=createSprite(450,620,20,100); 
	plank22.shapeColor="red";
	

	plank32=createSprite(350,620,20,100); 
	plank32.shapeColor="red";
	

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	
	plank1 = Bodies.rectangle(400,650,100,20,{restitution:0, isStatic:true});
	World.add(world, plank1)

	plank2 = Bodies.rectangle(450,620,20,100,{restitution:0, isStatic:true});
	World.add(world, plank2)

	plank3 = Bodies.rectangle(350,620,20,100,{restitution:0, isStatic:true});
	World.add(world, plank3)
    
    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
 
 

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false)   
    
}

}

