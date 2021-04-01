class Paper {
    constructor(x,y,r){
      var option = {
        restitution:0.3,
        density:1.2

      }
      this.x = x
      this.y = y
      this.r = r
    
    this.image = loadImage("paper.png")
    this.body  = Bodies.circle(this.x,this.y,(this.r-20)/2,option)
    World.add(world,this.body)
    }
    display() {
    var pos = this.body.position
    push()
	translate (pos.x,pos.y)
	rectMode(CENTER)
	fill (255)
	imageMode (CENTER)
	image (this.image,0,0,this.r,this.r)
	pop ()
    
  }
}