const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canvas;

var hexagon, ground;
var obstacles;

var score = 0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var backgroundIMG;

function preload(){

  backgroundIMG = loadImage("1.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(displayWidth/2,displayHeight/1-50,width,20);

    hexagon = new Hexagon(displayWidth/2-580, displayHeight/2+250, 55,55);
    //hexagon.scale = 0.1;

    for (var i = displayHeight; i <= displayHeight; i+20){

        obstacles = new Obstacles(displayWidth/2, i);

    }

  Engine.run(engine);
}

function draw(){
  background(backgroundIMG);
  Engine.update(engine);


    camera.position.x = displayWidth/2;


    ground.display();

    fill("white");
    textSize(20);
    textFont("Gabriel");
    text("Move Your Mouse Up or Down To Make The Shape Move!", displayWidth/4-10, displayHeight/19);
    text("Reach 100 Points To Win!", displayWidth/2+155, displayHeight/19);
    text("Score: " + score, displayWidth/2-630, displayHeight/19);

    fill("black");
    textSize(20);
    textFont("Gabriel");
    text("Try Not To Touch The Red Orbs!", displayWidth/2-145, displayHeight/2+316);

    if (gameState === PLAY){

        hexagon.display();
        obstacles.display();
      
    } else if (gameState === END){





    }

  drawSprites();

}
