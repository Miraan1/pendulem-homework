class rope{
	constructor(body1, body2, pointA, pointB)
	{

		this.pointA = pointA
		this.pointB = pointB
		var options= {
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}
		}
	//create rope constraint here
	  rope1 = Constraint.create(options)
	  World.add(world,rope1)


    //create display() here 
	

	}
	display(){
		var pointA = this.bodyA.position
		var pointB = this.bodyB.position

		strokeWeight(2)
		line()
	}
}
