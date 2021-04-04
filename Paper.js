class Paper {
    constructor(x, y,radius) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':0.3
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
  
      this.image = loadImage("sprites/paper.png");

      World.add(world, this.body);
    }
    display(){
     
        ellipseMode(RADIUS);
  
        fill("yellow");
  
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y, this.width, this.radius);

        circle(this.body.position.x,this.body.position.y,this.radius)
    }
  }