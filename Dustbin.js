class Dustbin
{
    constructor(x,y)
    {
        var options ={
            isStatic:true
        }

        this.x = x;
        
        this.y = y;
    
        this.bottomBody = Bodies.rectangle(x,y,200,20,options);
        World.add(world,this.bottomBody);

        this.rightBody = Bodies.rectangle(x+90,y-100,20,200,options);
        World.add(world,this.rightBody);

        this.leftBody = Bodies.rectangle(x-90,y-100,20,200,options);
        World.add(world,this.leftBody);
    }



    display()
    {
        var pos1 = this.bottomBody.position;
        var angle1 = this.bottomBody.angle;
        
        push ();
        translate(pos1.x,pos1.y);
        rotate (angle1);
        rectMode(CENTER);
        fill ("white");
        rect(0,0, 200,20);
        pop();  

        var pos2 = this.rightBody.position;
        var angle2 = this.rightBody.angle;
        
        push ();
        translate(pos2.x,pos2.y);
        rotate (angle2);
        rectMode(CENTER);
        fill ("white");
        rect(0,0, 20,200);
        pop();

        var pos3 = this.leftBody.position;
        var angle3 = this.leftBody.angle;
        
        push ();
        translate(pos3.x,pos3.y);
        rotate (angle3);
        rectMode(CENTER);
        fill ("white");
        rect(0,0, 20,200);
        pop();

        

    }
        
    
}