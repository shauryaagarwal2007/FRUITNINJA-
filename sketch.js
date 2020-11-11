var sword;
var knife;

var fruit1;
var fruit2;
var fruit3;
var fruit4; 
var fruit5;
var fruit6;
var fruit7;
var fruit8;

var enemy1;
var enemy2;
var enemy3;
var enemy4;

var Play = 1;
var End = 0;
var Gamestate = Play;

var score = 0;

var over;

function preload(){
  
  knife=loadImage("sword.png");
  
  enemy1= loadImage("alien1.png");
  enemy2= loadImage("alien2.png");
  
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  
  over=loadImage("gameover.png");

  gs=loadSound("gameover.mp3");
  ks=loadSound("knifeSwooshSound.mp3");
  
}

function setup() {
  createCanvas(800, 500);
  
  sword=createSprite(200,200,40,40);
  sword.addImage(knife);
  
  restart=createSprite(400,400);
  restart.addImage(over);
  
  fg1=createGroup();
  fg2=createGroup();
  fg3=createGroup();
  fg4=createGroup();
  
  eg1=createGroup();
  eg2=createGroup();
  
}

function draw() {
  background("skyblue");
  
  if(Gamestate === Play){
     
     randomfruits();
     randomenemy();
      
     restart.visible=false;
     
     sword.y=mouseY;
     sword.x=mouseX; 
       
     if(sword.isTouching(fg1)){
     fg1.destroyEach();
     score = score + 1; 
     ks.play();   
     }
    
     if(sword.isTouching(fg2)){
     fg2.destroyEach();
     score = score + 2; 
     ks.play();   
     }
    
     if(sword.isTouching(fg3)){
     fg3.destroyEach();
     score = score + 3; 
     ks.play();   
     }
    
     if(sword.isTouching(fg4)){
     fg4.destroyEach(); 
     score = score + 4;
     ks.play();   
     }
    
     if(eg1.isTouching(sword)){
     eg1.destroyEach();
     Gamestate = End;
     gs.play();  
     } 

     if(eg2.isTouching(sword)){
     eg2.destroyEach();
     Gamestate = End;
     gs.play();  
     } 

  }
  
  else if(Gamestate === End){
          restart.visible=true;
          
          sword.visible=false;
    
          fg1.destroyEach();
          fg2.destroyEach();
          fg3.destroyEach();
          fg4.destroyEach();

          eg1.destroyEach();
          eg2.destroyEach();
     } 
  
  drawSprites();
  
  text ("score : " + score , 380 , 20 );
}

function e1(){
  if(frameCount%25===0){
  enemy3=createSprite(700,050);
  enemy3.addImage(enemy1);
  enemy3.velocityX=-15;
  enemy3.velocityX=-(15+score/10)
  enemy3.y=random(100,700);
  enemy3.lifetime=54;   
  eg1.add(enemy3);    
}    
}

function e2(){
  if(frameCount%25===0){
  enemy4=createSprite(700,050);
  enemy4.addImage(enemy2);
  enemy4.velocityX=-15;
  enemy4.velocityX=-(15+score/10)
  enemy4.y=random(100,700);      
  enemy4.lifetime=54; 
  eg2.add(enemy4);    
}
}

function randomenemy(){
  var r = Math.round(random(1,2))
  switch(r){
      case 1: e1();
      break;
      case 2: e2();
      break;
      default:
      break;
}
}

function randomfruits(){
  var r = Math.round(random(1,4))
  switch(r){
      case 1: f111();
      break;
      case 2: f222();
      break;
      case 3: f333();
      break;
      case 4: f444();
      break;
      default:     
      break;
}
}

function f1(){
  if(frameCount%25===0){
  fruit5=createSprite(700,100);
  fruit5.addImage(fruit1);
  fruit5.scale=0.30;
  fruit5.velocityX=-12;
  fruit5.velocityX=-(12+score/4)
  fruit5.y=random(100,700);
  fruit5.lifetime=67;
  fg1.add(fruit5);  
}
}

function f11(){
  if(frameCount%25===0){
  fruit5=createSprite(0,100);
  fruit5.addImage(fruit1);
  fruit5.scale=0.30;
  fruit5.velocityX=12;
  fruit5.velocityX=(12+score/4)
  fruit5.y=random(100,700);
  fruit5.lifetime=67;
  fg1.add(fruit5);  
}
}

function f111(){
  var r = Math.round(random(1,2))
  switch(r){
      case 1: f1();
      break;
      case 2: f11();
      break;
      default:     
      break;
}
}

function f2(){
  if(frameCount%25===0){
  fruit6=createSprite(700,200);
  fruit6.addImage(fruit2);
  fruit6.scale=0.30;
  fruit6.velocityX=-12;
  fruit6.velocityX=-(12+score/4)
  fruit6.y=random(100,700);    
  fruit6.lifetime=67;  
  fg2.add(fruit6);  
}
}  

function f22(){
  if(frameCount%25===0){
  fruit6=createSprite(0,200);
  fruit6.addImage(fruit2);
  fruit6.scale=0.30;
  fruit6.velocityX=12;
  fruit6.velocityX=(12+score/4)
  fruit6.y=random(100,700);    
  fruit6.lifetime=67;  
  fg2.add(fruit6);  
}
}  

function f222(){
  var r = Math.round(random(1,2))
  switch(r){
      case 1: f2();
      break;
      case 2: f22();
      break;
      default:     
      break;
}
}

function f3(){
  if(frameCount%25===0){
  fruit7=createSprite(700,300);
  fruit7.addImage(fruit3);
  fruit7.scale=0.30;
  fruit7.velocityX=-12;
  fruit7.velocityX=-(12+score/4)
  fruit7.y=random(100,700); 
  fruit7.lifetime=67;  
  fg3.add(fruit7);  
}
}

function f33(){
  if(frameCount%25===0){
  fruit7=createSprite(0,300);
  fruit7.addImage(fruit3);
  fruit7.scale=0.30;
  fruit7.velocityX=12;
  fruit7.velocityX=(12+score/4)
  fruit7.y=random(100,700); 
  fruit7.lifetime=67;  
  fg3.add(fruit7);  
}
}

function f333(){
  var r = Math.round(random(1,2))
  switch(r){
      case 1: f3();
      break;
      case 2: f33();
      break;
      default:     
      break;
}
}

function f4(){
  if(frameCount%25===0){
  fruit8=createSprite(700,400);
  fruit8.addImage(fruit4);
  fruit8.scale=0.30;
  fruit8.velocityX=-12;
  fruit8.velocityX=-(12+score/4)
  fruit8.y=random(100,700);    
  fruit8.lifetime=67;  
  fg4.add(fruit8);    
}
}

function f44(){
  if(frameCount%25===0){
  fruit8=createSprite(0,400);
  fruit8.addImage(fruit4);
  fruit8.scale=0.30;
  fruit8.velocityX=12;
  fruit8.velocityX=(12+score/4)
  fruit8.y=random(100,700);    
  fruit8.lifetime=67;  
  fg4.add(fruit8);    
}
}

function f444(){
  var r = Math.round(random(1,2))
  switch(r){
      case 1: f4();
      break;
      case 2: f44();
      break;
      default:     
      break;
}
}