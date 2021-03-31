var jerry;
var jerryOneimg,jerryTwoimg,jerryThreeimg,jerryFourpng;
var tom;
var tomOneimg,tomTwoimg,tomThreeimg,tomFourimg;
var graden,gradenImg;





function preload() {
    //load the images here
    gardenImg = loadImage("garden.png") ;
    jerryOneimg= loadImage("jerryOne.png");
    tomOneimg= loadImage("tomOne.png");
    tomTwoimg= loadImage("tomTwo.png");
    
    

        
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
   
    garden=createSprite(300,300,100,100);
    garden.addImage(gardenImg);
    jerryOne=createSprite(157,500,10,10);
    jerryOne.addImage(jerryOneimg);
    jerryOne.scale=0.3;
    tomOne=createSprite(545,400,10,10);
    tomOne.addImage(tomOneimg);
    tomOne.scale=0.2;
   
   

    
    
    
    
   
    
    

}
function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");

    }

  //For moving and changing animation write code here


}