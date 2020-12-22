class Stone{
    constructor(x,y,diametre){
          var options ={
              isStatic:false,
              restituion:0,
              friction:1,
              density:1.2
          }
          this.body =Bodies.circle(x,y,diametre,options);
          this.diametre=diametre;
          this.image=loadImage("stone.png");
          //stones=createSprite(200,200,20,20);
          //stones.addImage(stoneImage);
          //stones.scale=0.5;
          World.add(world,this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.diametre);
        pop()
     }
}