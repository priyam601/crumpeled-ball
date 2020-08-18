class Crumpeled{
    constructor(x,y,width,height){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':1.0,
            'density':1.2
            
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);

        

    }

      display(){
        push();
        rectMode(CENTER);
        rect(200 , 550 , this.width, this.height);
        
      }
    }