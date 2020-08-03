class Bird extends BaseClass {
  constructor(x,y){
    
    var options ={
      'restitution':0.8,
            'friction':1.0,
            'density':1.9
    }
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    this.trajectory = []
  }

  display() {
    
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
   
    if(this.body.velocity.x>10&&this.body.position.x>200){ 
      var pos = [this.body.position.x,this.body.position.y]
      this.trajectory.push(pos)
    }
    for(var i = 0;i<this.trajectory.length;i++)
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
    
  }
}
