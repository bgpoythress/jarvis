//DrawableObject.js
//Written by Brandon Poythress
//01MAY2018

function DrawableObject(colorIn, parentDirtyListCallbackIn){
	this.graphicsMemoryAddress = null;
	this.killMe = false;
	this.passDirtyToParent = parentDirtyListCallbackIn;

	this.color = new Color(colorIn.r, colorIn.g, colorIn.b, colorIn.a);

	//points, lines and faces define how the object draws itself
	this.pointList = [];
	this.lineList = [];
	this.surfaceList = [];
	
	//the renderlist is the list of children that need to draw themselves
	//after the object is finished drawing itself
	this.renderList = [];
}

//setter to change the color
DrawableObject.prototype.setColorByObject = function(colorIn){
	this.color.r = colorIn.r;
	this.color.g = colorIn.g;
	this.color.b = colorIn.b;
	this.color.a = colorIn.a;	
};

ModelObject.prototype.dirtyListCallback = function(dirtyObject){
	this.passDirtyToParent(dirtyObject);
};