let homeOn = false;

function setup() {
  createCanvas(1820, 900);
  background(1, 130, 129);
  
  homeButtonOb = new homeButton()
}

function draw() {
  // print(mouseX, mouseY);

  rectMode(CORNER);
  fill(150);
  rect(0, 850, 1820, 50);

  fill(0, 0, 200);
  rect(360, 200, 240, 180);

  homeButtonOb.display();
}

function mousePressed(){
  homeButtonOb.clicked(); 
}

class homeButton {
  constructor() {
    this.x1 = 35;
    this.x2 = 60;
    this.y1 = 875;
    this.y2 = 35;
    this.size = 50;
  }

  display() {
    if (homeOn == false){
      rectMode(CENTER);
      fill(130);
      rect(this.x1, this.y1, this.x2, this.y2);  
    }
    else {
      rectMode(CENTER);
      fill(13);
      rect(this.x1, this.y1, this.x2, this.y2);   
    }
  }


  clicked() {
    if (dist(mouseX, mouseY, this.x1, this.y1) < this.size) {
      if(homeOn == true) homeOn = false;
      else homeOn = true;
  }
  print(homeOn);
}}
