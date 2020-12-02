class Point {

    constructor(x, y, radius) {

        var options = {
            
          'isStatic':true
  
        }
  
        this.point = Bodies.circle(x, y, radius, options);
        World.add(world, this.point);
  
      }

      display(){

        var pos =this.point.position;
        var angle = this.point.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(0, 0, 10, 10);
        pop();
                                                                                  
      }

}