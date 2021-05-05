var end = map(sc,0,60,0,360); arc(0,0,300,300,0,end); 


function setup() {
  createCanvas(800,400);
}



function draw() {
  background(255);

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  ScAngle = map(sc,0,60,0,360) 
  translate(400, 200);
  push();
  rotate(ScAngle);
  stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);

pop();

mnAngle = map(mn,0,60,0,360) 

push();
rotate(mnAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);

pop();

hrAngle = map(hr%12,0,12,0,360) 
push();
rotate(hrAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);

pop();

//arc(x, y, w, h, start, stop, [mode], [detail])
noFill();
strokeWeight(7);
arc(0, 0, 300, 300, 0, ScAngle);
arc(0, 0, 250, 250, 0, mnAngle);
arc(0, 0, 200, 200, 0, hrAngle);

//arc(50, 55, 60, 60, HALF_PI, PI);
//arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
//arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
}





