class Mango extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
        this.height = height;
        World.add(world, this.body);
      this.image = loadImage("sprites/mango.png");
      this.Visiblity = 255;
    }
  
   display(){
    
    super.display();
    push();
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
    }

}
  
  
  
  