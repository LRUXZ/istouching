var fixedrect, movingrect,box1, box2
function setup() {
  createCanvas(600,600);
 
  fixedrect=createSprite(300,200,70,100)
  fixedrect.shapeColor="red"
  movingrect=createSprite(200,50,50,100)
  movingrect.shapeColor="yellow"
  box1=createSprite(200,200,80,100)
  box2=createSprite(200,400,80,100)
  box1.shapeColor="white"
  box2.shapeColor="black"
  box1.velocityY=1
  box2.velocityY=-1
}

function draw() {
  background('cyan');  
movingrect.x=mouseX
movingrect.y=mouseY
console.log(movingrect.x-fixedrect.x)

if (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 
  ) {
  fixedrect.shapeColor="pink"
  movingrect.shapeColor="pink"

  
} else {
  fixedrect.shapeColor="red" 
  movingrect.shapeColor="yellow"

}
if(
  box1.y-box2.y<box1.height/2+box2.height/2
  && box2.y-box1.y<box2.height/2+box1.height/2
) {
  box1.velocityY=box1.velocityY*(-1)
  box2.velocityY=box2.velocityY*(-1)
}
  drawSprites();
}