var tom, tomImage; tomImage2, tomImage3
var jerry, jerryImage, jerryImage2, jerryImage3;
var gardenImage;

function preload() {

    tomImage = loadImage("tomOne.png");
    tomImage2 = loadAnimation("tomTwo.png","tomThree.png");
    tomImage3 = loadAnimation("tomFour.png");
    jerryImage = loadImage("jerryOne.png");
    jerryImage2 = loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImage3 = loadAnimation("jerryFour.png");
    gardenImage = loadImage("garden.png");
    
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(700,500,10,10);
    tom.addImage(tomImage);
    tom.scale = 0.1;

    jerry = createSprite(50,500,5,5);
    jerry.addImage(jerryImage);
    jerry.scale = 0.1;

    garden = createSprite(400,250);
    garden.addImage(gardenImage);
  





}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
       
      tom.addAnimation("tomSit", tomImage3);
      tom.changeAnimation("tomSit");
      tom.velocityX = 0;
      jerry.addAnimation("jerryFind", jerryImage3);
      jerry.changeAnimation("jerryFind");

    }

tom.depth = garden.depth;
tom.depth = tom.depth + 1;


jerry.depth = garden.depth;
jerry.depth = jerry.depth + 1;

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
   tom.velocityX = -5;
    tom.addAnimation("tomWalking", tomImage2);
    tom.changeAnimation("tomWalking");

    jerry.addAnimation("jerryTease", jerryImage2);
    jerry.changeAnimation("jerryTease");
  }


}
