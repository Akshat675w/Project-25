class dustbin  {
	constructor(x,y){

	this.x = x
	this.y = y
    this.dustbinWidth = 200
	this.dustbinHeight = 213
	this.wallThickness = 20
	this.image = loadImage("trashcangreen.png")
	this.bottombody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
	this.leftbody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
	this.rightbody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
     
    World.add(world,this.bottombody)
	World.add(world,this.leftbody)
	World.add(world,this.rightbody)
}

display(){
	var posb = this.bottombody.position
	var posl = this.leftbody.position
	var posr = this.rightbody.position

	push()
	translate (posl.x,posl.y)
	rectMode(CENTER)
	angleMode(RADIANS)
	fill (255)
	rotate (this.angle)
	pop ()

	push()
	translate (posr.x,posr.y)
	rectMode(CENTER)
	angleMode(RADIANS)
	fill (255)
	rotate (-1*this.angle)
	pop ()
	
	push()
	translate (posb.x,posb.y+10)
	rectMode(CENTER)
	angleMode(RADIANS)
	fill (255)
	imageMode (CENTER)
	image (this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight)
	pop ()
}
	
}