class Paper{

    constructor(x,y){

 var options= {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
 
 }
 this.image = loadImage("paper.png")

 this.body = Bodies.circle(x,y,30,options);
 World.add(world,this.body);

}

  display(){
    imageMode(CENTER) 
  
  
    image(this.image,this.body.position.x,this.body.position.y,30,30)
      }
    
    
    }