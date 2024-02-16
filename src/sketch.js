function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
}

function drawSnorlaxBody(snorlaxX,snorlaxY){  
  //SNORLAX BRO
  push();
  translate(snorlaxX,snorlaxY);  

  //ARMS
  beginShape();
  fill(41,115,142);   //Dark Blue
    curveVertex(70,-100);
    curveVertex(70,-100);
    curveVertex(100,-90);
    curveVertex(130,-80);
    curveVertex(150,-90);
    curveVertex(145,-110);

    curveVertex(100,-150);
    curveVertex(60,-170);
    curveVertex(0,-180);
    curveVertex(-60,-170);
    curveVertex(-100,-150);

    curveVertex(-145,-110);
    curveVertex(-150,-90);
    curveVertex(-130,-80);
    curveVertex(-100,-90);
    curveVertex(-70,-100);
  endShape();
  
      //ARM CLAWS
        //LEFT CLAW
      beginShape();
      fill(255);   //White
        curveVertex(-128,-85);
        curveVertex(-128,-85);
        curveVertex(-137,-75);
        curveVertex(-134,-88);
        curveVertex(-128,-85);
        curveVertex(-128,-85);  
      endShape();
    
      beginShape();
        curveVertex(-138,-90);
        curveVertex(-138,-90);
        curveVertex(-145,-80);
        curveVertex(-145,-90);
        curveVertex(-138,-90);
        curveVertex(-138,-90);
      endShape();
  
      beginShape();
        curveVertex(-147,-90);
        curveVertex(-147,-90);
        curveVertex(-155,-80);
        curveVertex(-152,-95);
        curveVertex(-147,-90);
        curveVertex(-147,-90);
      endShape();
        
        //RIGHT CLAW
            beginShape();
      fill(255);   //White
        curveVertex(128,-85);
        curveVertex(128,-85);
        curveVertex(137,-75);
        curveVertex(134,-88);
        curveVertex(128,-85);
        curveVertex(128,-85);  
      endShape();
    
      beginShape();
        curveVertex(138,-90);
        curveVertex(138,-90);
        curveVertex(145,-80);
        curveVertex(145,-90);
        curveVertex(138,-90);
        curveVertex(138,-90);
      endShape();
  
      beginShape();
        curveVertex(147,-90);
        curveVertex(147,-90);
        curveVertex(155,-80);
        curveVertex(152,-95);
        curveVertex(147,-90);
        curveVertex(147,-90);
      endShape();


  //FEET
  fill(206,193,184);   //Greyish White
  arc(-70,0,70,40,PI,0);
  arc(70,0,70,40,PI,0);
  
    //TOES
  fill(225);
  triangle(-105,-7,-100,0,-115,0);
  arc(-80,0,10,10,PI,0);
  arc(-95,0,10,10,PI,0);
  
  triangle(105,-7,100,0,115,0);
  arc(80,0,10,10,PI,0);
  arc(95,0,10,10,PI,0);
  
  
  
  //BODY
  beginShape();
    fill(41,115,142);   //Dark Blue
    curveVertex(75,-150);
    curveVertex(75,-150);
    curveVertex(105,-110);
    curveVertex(115,-60);
    curveVertex(105,-20);

    curveVertex(75,-9);
    curveVertex(40,-6);
    curveVertex(-40,-6);
    curveVertex(-75,-9);
    
    curveVertex(-105,-20);
    curveVertex(-115,-60);
    curveVertex(-105,-110);
    curveVertex(-75,-150);
    curveVertex(-75,-150);
  endShape();
  

  //BODY BELLY
  beginShape();
  fill(241,229,215);   //Snorlax White
    curveVertex(33,-175);
    curveVertex(33,-175);
    curveVertex(70,-140);
    curveVertex(85,-110);
    curveVertex(85,-65);
    curveVertex(65,-35);

    curveVertex(25,-20);
    curveVertex(-25,-20);

    curveVertex(-65,-35);
    curveVertex(-85,-65);
    curveVertex(-85,-110);
    curveVertex(-70,-140);
    curveVertex(-33,-175);
    curveVertex(-33,-175);
  endShape();
  
  pop();
