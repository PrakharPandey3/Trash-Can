class Holder{
    constructor(){
        this.body=Bodies.rectangle(400,10,400,20,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("green");
        rect(this.body.position.x,this.body.position.y,400,20);
    }
}