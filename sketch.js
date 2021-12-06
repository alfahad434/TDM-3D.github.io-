var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;
function preload(){
  bgImage=loadImage("background.jpg")
  gameSound = loadSound("music.mp3")
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  gameSound.loop()
  form= new Form()
}


function draw(){
  background(bgImage);
 form.display()
 
}