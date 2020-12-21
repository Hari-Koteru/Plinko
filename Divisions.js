class Divisions{
  constructor(x,y){
    var options = {
       isStatic: true
    }
    this.body = Bodies.rectangle(x,y,20,20,options);
    this.width = 20;
    this.height = 20;
    World.add(world,this.body);
  }
   display() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y);
    pop();
  }

}; 