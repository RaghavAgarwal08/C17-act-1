var box
var box1

function setup() 
{
  createCanvas(400, 400);
  box = new Box(50,50,50,50,2,2);
  box1 = new Box(300,300,50,50,2,-2);
}

function draw() 
{
  background(220);
  box.show();
  box.moveUp();

  box1.show();
  box1.moveUp();
}

