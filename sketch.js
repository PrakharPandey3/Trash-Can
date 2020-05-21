const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
function setup(){
  createCanvas(800,600);
  engine = Engine.create();
	world = engine.world;
  
  ball =new Ball(400,300,30);
  //constraint= new Chain({x:400,y:10},ball.body)
  holder= new Holder();
  launcher = new Launcher(ball.body,{x: 200, y: 100});
}
function draw(){
  background("white");
  strokeWeight(4);
  Engine.update(engine);
  //constraint.display();
  ball.display();
  holder.display();
  launcher.display();
  if(launcher.sling.bodyA){
  pointA = launcher.sling.bodyA.position
  pointB = launcher.sling.pointB
  line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  text("Prakhar",200,200);
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  launcher.fly();
  
}


