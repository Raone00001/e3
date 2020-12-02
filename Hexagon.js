class Hexagon {
    constructor(x, y, width, height, angle) {

        var options = {

           'isStatic': true

        }

        this.shape = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("hexagon.png");
        World.add(world, this.shape);

      }

      display(){

        var pos =this.shape.position;
        var angle = this.shape.angle;

        this.shape.position.y = mouseY;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

      }

}