let a;

let xLeft = 160;
let xRight = 240;
let y = 180;

let diam1;
let diam2;

function setup() {
  // put setup code here
  createCanvas(1600,785);
  a = 10
}

function draw() {
  // put drawing code here
  background("#FFD89B");
  fill("#FFFFFF")
  textSize(90);
  textFont("Georgia")
  textStyle(ITALIC)
  //the text scrolls and wraps around the screen
  text('Happy Thanksgiving!',a,300)
  a = a + 2;
  if (a > 1700) 
    a = -800;

  //feathers
  fill("#F17C39");
  arc(800, 800, 1080, 1060, PI, TWO_PI);
  fill("#8E6C4D");
  arc(800, 800, 940, 850, PI, TWO_PI);
  fill("#63472E");
  arc(800, 800, 830, 650, PI, TWO_PI);

  //head
  fill("#9A571B");
  noStroke();
  ellipse(width/2,275,350,340);

  //neck
  rect(698,350,200,400);

  //body
  ellipse(width/2,900,800,600);

  //beak
  fill("#E13C0C")
  ellipse(845,365,45,150);
  fill("#FFD519");
  triangle(800,400,855,290,745,290);

  //eyes
  fill("#FFFFFF");
  ellipse(710,250,80,80);
  ellipse(890,250,80,80);

  //pupils
  fill("#000000")
  //this ellipse grows if the page is clicked
  ellipse(xLeft, y, diam1);
  diam1 = 55;
  if (mouseIsPressed) {
    diam1 = diam1 + 10;
  }
  //this ellipse shrinks if the page is clicked
  ellipse(xRight, y, diam2);
  diam2 = 55;
  if (mouseIsPressed) {
    diam2 = diam2 - 10;
  }
  //this allows the pupils to follow the mouse
  y = map(mouseY, 0, height, 250, 258, true);
  xLeft = map(mouseX, 0, width, 710, 700, true);
  xRight = map(mouseX, 0, width, 890, 900, true);
}