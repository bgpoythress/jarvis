//Line.js
//Written by Brandon Poythress
//14MAY2018
//Description: 
//Line object

//Line class
function Line(idIn, parentIdIn, parentDirtyListCallbackIn, vertex1In, vertex2In, colorIn){
	
	//Line inherits properties from ModelObject but not methods
	ModelObject.call(this, "Line", idIn, parentIdIn);

	//Line is a drawable object
	DrawableObject.call(this, colorIn, parentDirtyListCallbackIn);

	this.vertex1 = vertex1In;
	this.vertex2 = vertex2In;
	

}

Line.prototype = Object.create(DrawableObject.prototype);
Line.prototype.constructor = Line;
