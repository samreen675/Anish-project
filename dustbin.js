class Dustbin{
   constructor(){

      var options = {
         isStatic: true
     }
    this.body = Bodies.rectangle(390,610,20,100,options);
    this.image = loadImage("dustbingreen.png");
    World.add(world, this.body);
    this.body1 = Bodies.rectangle(500,570,200,20,options);
    this.body2= Bodies.rectangle(610,610,20,200,options);
    World.add(world, this.body1);
    World.add(world, this.body2);
   }

   display(){
     
   //  var pos = this.body.position
   //  push()
   //  translate(pos.x,pos.y);
   //  rectMode(CENTER);
   //  fill("red")
   //  rect(0,0,20,100);
   // pop()
   var pos1 = this.body1.position
    push()
    translate(pos1.x,pos1.y);
    imageMode(CENTER);
    image(this.image, 0,0, 200,200);
   // rectMode(CENTER)
   // rect(0,0,200,20)
   pop()
   // var pos2 = this.body2.position
   //  push()
   //  translate(pos2.x,pos2.y);
   //  rectMode(CENTER);
   //  fill("red")
   // rect(0,0,20,100);
   // pop()
   }

}


// class Dustbin{  
//   constructor(){
//       var options = {
//           isStatic:true,
          
//       }
//       this.body = Bodies.rectangle(1000,450,200,20, options);
//        this.body1 = Bodies.rectangle(900,450,20,200, options);
//         this.body2 = Bodies.rectangle(1100,450,20,200, options);
//       this.width = 200;
//       this.height = 200;
//       this.x =1000;
//       this.y =540;
//       this.image = loadImage("dustbingreen.png")



      
//       World.add(world, this.body);
            
//       World.add(world, this.body1);
      
//       World.add(world, this.body2);

//     }
//     display(){

//       push();
//             imageMode(CENTER);
//             fill("yellow");
//             image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
//       pop();



//     }
//   }
