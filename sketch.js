function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  button = createButton("Click to Blow")
  button.position(width/2,height - 100);
  button.class("classButton")
  button.mousePressed(blow);
}
function draw() {
  background(255,255,255);  
  drawSprites();
}
function blow () {
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}
