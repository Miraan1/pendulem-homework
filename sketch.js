const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope1
var rope2 
var bob1,bob2,bob3,bob4,bob5


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
	bob1 = Bodies.circle(330,335,20)
	World.add(world,bob1);
	bob2 = Bodies.circle(365,335,20)
	World.add(world,bob2);
	bob3 = Bodies.circle(400,335,20)
	World.add(world,bob3);
	bob4 = Bodies.circle(435,335,20)
	World.add(world,bob4);
	bob5 = Bodies.circle(470,335,20)
	World.add(world,bob5);
    World.add(world,roof);

	var ropeOption1= {
		pointA:{x:330,y:120},
		bodyB:bob1,
		length:200,
		stiffness:0.1
	  }
	
	  rope1 = Constraint.create(ropeOption1)
	  World.add(world,rope1)

	 var ropeOption2 = {
		pointA:{x:365,y:120},
		bodyB:bob2,
		length:200,
		stiffness:0.1
	  }

	  rope2 = Constraint.create(ropeOption2)
	  World.add(world,rope2)

	 var ropeOption3 = {
		pointA:{x:400,y:120},
		bodyB:bob3,
		length:200,
		stiffness:0.1
	  }

	  rope3 = Constraint.create(ropeOption3)
	  World.add(world,rope3)

	  var ropeOption4 = {
		pointA:{x:435,y:120},
		bodyB:bob4,
		length:200,
		stiffness:0.1
	  }

	  rope4 = Constraint.create(ropeOption4)
	  World.add(world,rope4)

	  var ropeOption5 = {
		pointA:{x:470,y:120},
		bodyB:bob5,
		length:200,
		stiffness:0.1
	  }

	  rope5 = Constraint.create(ropeOption5)
	  World.add(world,rope5)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,35);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,35)
  ellipse(bob2.position.x,bob2.position.y,35)
  ellipse(bob3.position.x,bob3.position.y,35)
  ellipse(bob4.position.x,bob4.position.y,35)
  ellipse(bob5.position.x,bob5.position.y,35)

  line(rope1.pointA.x,rope1.pointA.y,bob1.position.x,bob1.position.y)
  line(rope2.pointA.x,rope2.pointA.y,bob2.position.x,bob2.position.y)
  line(rope3.pointA.x,rope3.pointA.y,bob3.position.x,bob3.position.y)
  line(rope4.pointA.x,rope4.pointA.y,bob4.position.x,bob4.position.y)
  line(rope5.pointA.x,rope5.pointA.y,bob5.position.x,bob5.position.y)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
    
    if(keyCode == RIGHT_ARROW ){
    Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0})
    console.log("hello")
  }
  
}