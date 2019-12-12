let bg;
let gb;
let bg2;
let audio;
var timerValue = 10;
var startButton;
let timerstarted = false;
function preload(){
audio = loadSound('media/tense.mp3');
}

function setup() {
    var canvas = createCanvas(750, 500);
    canvas.parent('sketch-holder');
    bg2 = loadImage('media/Turnstile2.png');
    gb = loadImage('media/MetroCardHand.png');
    bg = loadImage('media/Turnstyle.png');
    textAlign(CENTER);
    textSize(30)
    
   
}



function draw() {
    background(255);
//    background(bg); 
    image(bg,0,0,width,height);
    noStroke();
    fill(0); 
    
    image(gb,mouseX-gb.width/2,mouseY-gb.height/2); 
    
    image(bg2,0,0,width,height);
     
    if (timerValue >= 10) {
    text("0:" + timerValue, 50,30);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, 50,30);
  }
  if (timerValue == 0) {
    text('The train left', 50,30 + 15);
  }
    if (timerValue>=10){
//        audio.play();
    }
//    if (mousePressed){
        
}

function mousePressed() {
  if (!timerstarted){
    setInterval(timeIt, 1000);
      timerstarted = true;
      audio.play();
  }
    }





  



function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }

}