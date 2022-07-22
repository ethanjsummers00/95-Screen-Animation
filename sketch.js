let homeOn = false;

function setup() {
  createCanvas(1920, 1080);
  background(1, 130, 129);
  
  homeButtonOb = new homeButton()
  menuOb = new menu();
}

function draw() {
  background(1, 130, 129);

  rectMode(CORNER);
  fill(150);
  rect(0, 1031, 1920, 50);

  fill(0, 0, 200);
  rect(360, 200, 240, 180);

  homeButtonOb.display();
  menuOb.display();
}

function mousePressed(){
  homeButtonOb.clicked(); 
}

class homeButton {
  constructor() {
    this.x = 35;
    this.y = 1056;
    this.w = 75;
    this.h = 50;
    this.size = 45;
  }

  display() {

    if (homeOn == false){
      rectMode(CENTER);
      fill(96, 140, 0);
      rect(this.x, this.y, this.w, this.h);

    }
    else if (homeOn == true) {
      rectMode(CENTER);
      fill(127, 186, 0);
      rect(this.x, this.y, this.w, this.h);

      rectMode(CORNER);
      fill(150);
      rect(0, 431, 400, 600)

    }
  }


  clicked() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.size) {
      if(homeOn == true) homeOn = false;
      else homeOn = true;
  }

  if (mouseX > 400) {
    homeOn = false;
  }
  print(homeOn);
  print(mouseX, mouseY);
  }
}

class menu {

  display() {
    if (homeOn == true){

    }
  }


}
