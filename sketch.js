var mondo;
var renna;
var corna;
var gamba;
var sacco;
var angolo=0;

function preload() {
  mondo = loadImage('assets/mondo.png');
  renna = loadImage('assets/renna2.png');
  corna = loadImage('assets/corna.png');
  gamba = loadImage('assets/gamba.png');
  sacco = loadImage('assets/sacco.png');
}



function setup() {
  createCanvas(360,640);
 
    fill(230,155,0);
    textFont('Molle');
    textSize(height/16);
    textAlign(CENTER);
    
    angleMode(DEGREES);
  
  //Deal with microphone
 mic = new p5.AudioIn();
 mic.start();
}

function draw() {
  var volume = mic.getLevel();
  
  //If the volume is not enought, re-map it (set a higher newMax).
  var newMax = 5;
  volume = map(volume,0,1,0,newMax);

  angolo+=volume;
  
 background(199,239,242);
    
    //mondo
    
    push();
    imageMode(CENTER);
    translate(180,800);
    rotate(angolo);
    image(mondo,0,0,800,800);
    pop();
    
    //renna
    
  push();
  translate(width/2,260);
  rotate(volume*3);
  translate(volume*5,-volume*10);
    
    //corna
    
    push();
    imageMode(CENTER);
    translate(-65,-130);
    
    image(corna,0,0,160,87);
    pop();
    
    //gambe
    
    push();
    imageMode(CORNER);
    translate(-35,70);
    rotate(50);
    rotate(-angolo*10);
    image(gamba,0,0,112,55);
    pop();
    
    push();
    imageMode(CORNER);
    translate(-20,80);
    rotate(100);
    rotate(-angolo*15);
    image(gamba,0,0,112,55);
    pop();
    
    push();
    imageMode(CORNER);
    translate(80,70);
    rotate(20);
    rotate(-angolo*10);
    image(gamba,0,0,112,55);
    pop();
    
    push();
    imageMode(CORNER);
    translate(70,80);
    rotate(-angolo*15);
    image(gamba,0,0,112,55);
    pop();
    
    //corpo
    
    push();
    imageMode(CENTER);
    translate(0,0);
    image(renna,0,0,255,230);
    pop();
    
    //faccia
    
    push();
    translate(-70,-80);
    var size = map(volume,0,1,10,40);
    fill(177,51,29);
    noStroke();
    ellipse(-30,35,size/3,size/2);
    fill(255);
    ellipse(0,0,size);
    fill(0);
    ellipse(0,0,size/5);
    pop();
    
    //sacco
    push();
    translate(0,-50);
    image(sacco,0,-volume*20,76,90);
    pop();
    
  pop();

    

    text('Run or die!',width/2,600);

  
}