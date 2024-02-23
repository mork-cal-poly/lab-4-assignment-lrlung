let punchX = 200
let snorlaxX = 100
let snorlaxY = 175
let snorlaxR = 0
let capybaraX = 275
let capybaraY = 400

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  drawBackground();

  drawPunch(punchX,400);
  drawCapybara(capybaraX,capybaraY,1)
  drawSnorlax(snorlaxX,snorlaxY,snorlaxR,0.35);

  if(punchX < 300 && clicked == true){
    punchX = punchX + 7
  }

  if(punchX >= 230 && snorlaxX < 350){
    snorlaxX = snorlaxX + 5
    snorlaxY = snorlaxY - 5
    snorlaxR = snorlaxR + .5
  }
  
  if(snorlaxX >= 200 && snorlaxX < 350){
    snorlaxY = snorlaxY + 10 
  }
    
  if(snorlaxX == 350 ){
    snorlaxX = 350
    snorlaxY = 275
    snorlaxR = 0
  }
  
 if (clicked == false){
   snorlaxX = 100
   punchX = 200
   snorlaxR = 0
   snorlaxY = 175
 }

  //FOREGROUND WATER
    push();
    noStroke();
    fill('#2389da')
    rect(0,310,width,height)
    pop();
    

}

function mouseClicked(){
  if (mouseX >207 && mouseX<234 && mouseY<137 && mouseY>111)
  clicked = !clicked
}

function drawSnorlax(snorlaxX,snorlaxY,snorlaxR,snorlaxS){  
  //SNORLAX BRO
  push();
  translate(snorlaxX,snorlaxY);  
  rotate(snorlaxR);
  scale(snorlaxS);

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
  
   //SNORLAX HEAD
   //HEAD
   beginShape();
   fill(41,115,142);   //Dark Blue
     curveVertex(55,-165);
     curveVertex(55,-165);
   
     curveVertex(64,-180);
     curveVertex(64,-200);
 
     //RIGHT EAR
     curveVertex(58, -225);
     curveVertex(53,-255);
     curveVertex(25,-245);
     
     //LEFT EAR
     curveVertex(-25,-245);
     curveVertex(-53,-255);
     curveVertex(-57,-225);
   
     curveVertex(-64,-200);
     curveVertex(-64,-180);
     
 
     curveVertex(-55,-165);
     curveVertex(-55,-165);    
   endShape();
   
   
   arc(0,-165,109,16,0,PI);
   
   //FACE
   beginShape();
     fill(241,229,215);   //Snorlax White
     curveVertex(40,-160);
     curveVertex(40,-160);
     curveVertex(53,-173);
     curveVertex(57,-195);
     curveVertex(50,-220);
 
     curveVertex(35,-235);
     curveVertex(0,-240);
     curveVertex(-35,-235);
 
     curveVertex(-50,-220);
     curveVertex(-57,-195);
     curveVertex(-53,-173);
     curveVertex(-40,-160);
 
     curveVertex(-20,-157);
     curveVertex(20,-157);
   
     curveVertex(40,-160);
     curveVertex(40,-160);
   endShape();
   
       //TRIANGLE ON FACE
   push();
   fill(41,115,142);   //Dark Blue
   noStroke();
   triangle(27,-242,-27,-242,0,-225);
   pop();
   
   line(21,-238,0,-225);
   line(-21,-238,0,-225);
   
       //RIGHT EYE
     beginShape();
       curveVertex(41,-219);
       curveVertex(41,-219);
       curveVertex(39,-220);
       curveVertex(36,-221);
       curveVertex(20,-222);
       curveVertex(15,-222);
       curveVertex(15,-222);
     endShape();
   
       //LEFT EYE
     beginShape();
       curveVertex(-41,-219);
       curveVertex(-41,-219);
       curveVertex(-39,-220);
       curveVertex(-36,-221);
       curveVertex(-20,-222);
       curveVertex(-15,-222);
       curveVertex(-15,-222);
   endShape();
   
       //MOUTH
     push();
     fill(255);
     line(-20,-203,20,-203);
     triangle(-20,-203,-16,-211,-12,-203);
     triangle(20,-203,16,-211,12,-203);
     pop();
     
  pop();
}

function drawCapybara(capybaraX,capybaraY,capybaraS){
  push();
   translate(capybaraX, capybaraY);
   scale(capybaraS)
  
 //capybara
   fill(199,87,43);
   noStroke();

 //background foreleg
   push();
     fill('#793921'); //light brown  
     quad(-50,-45,-25,-42,-21,-4,-30,-4);
   pop();
 //foreground foreleg  
   quad(-50,-45,-25,-42,-27,-12,-42,-12); 
   quad(-42,-12,-27,-12,-28,0,-51,0);
 
 //background hindleg 
 push();
   fill('#793921'); //dark brown 
   quad(77,-41,90,-41,122,-15,113,-12);
   triangle(106,-5,111,-17,137,-6); 
 pop();
 //foreground hindleg
   quad(83,-41,128,-45,143,-17,122,-12);
   quad(120,-14,143,-17,135,0,118,0);
     
 //body
   quad(-50,-130,60,-145,125,-41,-50,-42);
   arc(70,-87,180,115,5*PI/4,PI/4);
   arc(38,-43,175,20,0,PI);
 
 //ear on the other side
   push();
     fill('#522412'); //dark brown
     ellipse(-107,-148,16,19);
   pop();
 
 //neck
   quad(-100,-155,-50,-130,-50,-43,-120,-95);
 
 //head
   quad(-173,-128,-99,-155,-119,-95,-168,-92);
   
 //nose
   push(); 
     fill('#763318');  //dark brown
     stroke('#763318');  //dark brown
     quad(-173,-128,-155,-134,-155,-109,-170,-106);
     fill(15);  //black
     arc(-165,-120,8,8,5*PI/4,3*PI/4)
   pop();
  
 //eye
   push();
     fill(0);  //black
     ellipse(-125,-135,22,7);
   pop();
  
 //ear
   push();
     fill('#522412');  //dark brown
     quad(-106,-148,-101,-155,-97,-153,-94,-142);
     arc(-97,-149,16,15,4*PI/3,PI/2.5);
   pop();
 
 //teeth
   fill(255);  //white
   quad(-168,-92,-163,-92,-163,-83,-166,-83);
   stroke(1);
   line(-167,-92,-165,-83);
   
 pop();
}

function drawBackground(backgroundX,backgroundY){
  push();
  background(40);
  strokeWeight(3);
  
  //BUTTON
  fill(100);   //DARK GREY
  rect(195,100,50);
  strokeWeight(1);
  fill(170);
  ellipse(220,125,25); 
  fill(255,0,0);   //RED
  ellipse(220,125,20);
  
  //DIVING BOARD
  push();
  noStroke();
  fill(255);
  rect(0,175,145,10);
  pop();
  
  //BACKGROUND WATER
  push();
  noStroke();
  fill('#2389da')
  rect(0,250,width,height)
  pop();
  pop();
}

function drawPunch(punchX,punchY){
  push();
  translate(punchX,punchY)
  fill(255,0,0);   //RED
  ellipse(-180,-250,20)
  fill(0);   //BLACK
  rect(-300,-252,110,5)
  pop();

}