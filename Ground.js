class Ground
{
    constructor(){
       
        var options ={
            isStatic:true
        }

        this.x = 400;
        this.y = 500;
        this.width = 800;
        this.height = 10;

        this.body = Bodies.rectangle(400,500,800,10,options);

        World.add(world,this.body);

    }

    display()
    {
        rect(400,500,800,10);
    }

    
}