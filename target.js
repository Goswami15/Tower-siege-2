class target{
    constructor(x,y,width,height){
this.image=loadImage("wood1.png");

        this.Visibility=255;
        var options={
            restitution:0,
            friction:0.5,
        }
        
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
        
        
            }
            display(){
                push();
                imageMode(CENTER);
                
                image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
                pop();
         
if(this.body.speed>5){
                     
                     push();
                     
                     this.Visiblity = this.Visiblity - 5;
                     tint(255,this.Visiblity);
                     image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
                     
                     pop();
}
                   
            }
    }
