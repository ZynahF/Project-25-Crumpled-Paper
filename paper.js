 class Paper{
     
    constructor(x,y,radius) {

    var options = {

        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2

    }

    this.body = Bodies.circle(x,y,radius/1.2,options);
    this.radius = radius
    this.image = loadImage("sprites/paperimgs.png")
    World.add(world, this.body);

  }

  display(){

    var pos = this.body.position;
    
    imageMode(RADIUS);
    fill(255,192,203)
    image(this.image, pos.x, pos.y, this.radius, this.radius);

  }}