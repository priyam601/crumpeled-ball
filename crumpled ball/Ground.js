class Ground{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 800;
        this.height = 20;
        World.add(world, this.body);

    }

    display(){
       push();
        rectMode(CENTER);
        rect( 400, 600, this.width, this.height);
        fill("brown");
        

          }

}
