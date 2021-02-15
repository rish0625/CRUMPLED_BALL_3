class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':0.5
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      // this.image = loadImage("img/paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  