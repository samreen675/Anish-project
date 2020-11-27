class Paper {

  constructor(x,y,radius){

    var options = {
        density:1.2,
        restitution:0.3,
        friction:0.5,
        isStatic:false
    }

    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("paper.png");
    World.add(world,this.body);
  }


  display(){

    
    var pos = this.body.position
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius, this.radius);
    pop();
    


  }

}

        