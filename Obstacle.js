class Obstacles {

    constructor(x, y, radius) {

        var options = {
            
          'isStatic':true
  
        }
  
        this.obstacle = Bodies.circle(x, y, radius, options);
        World.add(world, this.obstacle);
  
      }

      display(){

        var pos =this.obstacle.position;
        var angle = this.obstacle.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0, 0, 10, 10);
        pop();
                                                                                  
      }

}