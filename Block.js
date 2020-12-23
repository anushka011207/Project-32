class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
  score() {
    if(this.Visiblity<0 && this.Visiblity>-105) {
      score++;
    }
  }
  display() {
    if(this.body.speed<3){
      super.display();
    }
    else {
      World.remove(world,this.body);
      this.Visiblity=this.Visiblity-5;
      push();
      tint(255,this.Visiblity);
      image(this.image,this.body.position.x,this.body.position.y);
      pop();
    }
  }
};