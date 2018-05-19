//LabScene.js
//Written by Brandon Poythress
//25APR2018
//Description: 
//This class handles the setting

function LabScene(idIn, parentIdIn, parentDirtyListCallbackIn){

	ModelObject.call(this, "Scene", idIn, parentIdIn, true, parentDirtyListCallbackIn);
	
	console.log(this.type);
	console.log(this.usesRenderList);
	



	// this.type = "Scene";
	// this.id = idIn;
	// this.parent = parentIdIn;
	// this.hasRenderList = true;
	// this.idGen = new IdGenerator();

	// this.renderList = [];
	
	//assign the callback function to the scene object
	// this.passDirtyToParent = parentDirtyListCallback;


	//to test the rendering system, the lab scene will contain a single sketch
	//with 4 points that make up a plane.  This plane will serve as the 
	//floor for future development.

	//need to work out how to have "mates" between the plane and the 
	//sketch.  That way, if the plane changes, the sketch knows how
	//and when to update itself.  while working on the graphics stuff,
	//I will just leave the plane static, but I need to work this out
	//down the road.
	this.floorPlane = new Plane(this.idGen.getId(), 
						this.id, this.dirtyListCallback.bind(this), 
						0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, -1.0);

	sketch1 = new Sketch(this.idGen.getId(), this.id,
	 					this.dirtyListCallback.bind(this),
	 					this.floorPlane);

	//define the size of the scene in mm
	this.width = 10000.0;
	this.length = 10000.0;

	//sketch1.addPoint(0.0, 0.0, 0.0, RED);

	//sketch1.addPoint(-6000, 0.0, -this.length/2.0, BLUE);
	// sketch1.addPoint(-this.width/2.0, 0.0, this.length/2.0, BLUE);
	// sketch1.addPoint(this.width/2.0, 0.0, this.length/2.0, BLUE);
	// sketch1.addPoint(this.width/2.0, 0.0, -this.length/2.0, BLUE);

	//sketch1.addPoint(0.0, 0.0, 0.0, BLUE);
	// sketch1.addPoint(0.25, 0.35, 0.25, RED);
	// sketch1.addPoint(-0.25, 0.35, 0.25, GREEN);
	// sketch1.addPoint(0.25, -0.35, 0.25, WHITE);
	// sketch1.addPoint(-0.5, -.5, 0.25, BLUE);
	// sketch1.addPoint(-0.25, -0.35, 0.25, RED);
	

	this.renderList.push(this.floorPlane);



}

// LabScene.prototype.draw = function(gl, renderer){


// }

//Every parent object must have a callback function that allows children
//to communitate to it "up the chain".
// LabScene.prototype.dirtyListCallback = function(dirtyObject){
// 	this.passDirtyToParent(dirtyObject);
// };



LabScene.prototype = Object.create(ModelObject.prototype);

LabScene.prototype.update = function(lastUpdate){

};

LabScene.prototype.constructor = LabScene;

LabScene.prototype.onMouseUp = function(eyeX, eyeY, eyeZ, worldRay){
	

};