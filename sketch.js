var cat, mouse;
//start positions
var catResting, mouseCheese;
//moving positions
var catMoving, mouseMoving
//end positions
var catSit, mouseLook;

var garden;
function preload() {
    //load the images here
    catResting= loadImage("cat1.png");
    mouseCheese = loadImage("mouse1.png");
    catMoving = loadAnimation("cat2.png","cat3.png");
    mouseMoving = loadAnimation("mouse2.png","mouse3.png");
    catSit = loadImage("cat4.png");
    mouseLook = loadImage("mouse4.png");
    garden = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,400,60,80);
    cat.addImage(catResting);

    mouse = createSprite(200,400,25,55);
    mouse.addImage(mouseCheese);
}

function draw() {

    background("garden");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
     cat.addImage("kitty", catSit);
     cat.changeImage("kitty");  
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing", catMoving);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

    cat.addAnimation("catTempted", catMoving);
    cat.changeAnimation("catTempted");
    cat.velocityX = -3;
  }
}
