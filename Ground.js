class Ground{
    constructor(){
        var ground_options={
            isStatic:true,
        }
       this.body=Bodies.rectangle(200,380,400,20,ground_options) ;
       World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,400,20);
    }
}
