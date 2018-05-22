//Plane.js
//Written by Brandon Poythress
//25APR2018
//Description: 
//This class represents a plane.

function Plane(idIn, parentIdIn, parentDirtyListCallbackIn, xIn, yIn, zIn, normalXIn, normalYIn, normalZIn, upXIn, upYIn, upZIn){
	
	ModelObject.call(this, "Plane", idIn, parentIdIn);

	DrawableObject.call(this, GREEN, parentDirtyCallbackIn);

	//location of the plane's center point
	this.planePointVector = new Vector3();
	this.planePointVector.elements[0] = xIn;
	this.planePointVector.elements[1] = yIn;
	this.planePointVector.elements[2] = zIn;

	//normal vector components
	this.nVector = new Vector3();
	this.nVector.elements[0] = normalXIn;
	this.nVector.elements[1] = normalYIn;
	this.nVector.elements[2]= normalZIn;

	//Local Y axis vector components
	this.upVector = new Vector3();
	this.upVector.elements[0] = upXIn;
	this.upVector.elements[1] = upYIn;
	this.upVector.elements[2]= upZIn;
	
	//size of the plane in mm.  May be better
	//to pass this into the constructor
	//but for now I will hard code it
	this.size = 5000;

	//create the points that make up the
	//four corners of the plane.  We
	//need them to draw the lines but we
	//will not add them to the render
	//list of the plane
	point1 = new Point(this.idGen.getId(),
					this.id, this.dirtyListCallback.bind(this),
					-this.size/2.0, 0.0, -this.size/2.0,
					 this.color);

	point2 = new Point(this.idGen.getId(),
					this.id, this.dirtyListCallback.bind(this),
					-this.size/2.0, 0.0, this.size/2.0, this.color);

	point3 = new Point(this.idGen.getId(),
					this.id, this.dirtyListCallback.bind(this),
					this.size/2.0, 0.0, this.size/2.0, this.color);

	point4 = new Point(this.idGen.getId(),
					this.id, this.dirtyListCallback.bind(this),
					this.size/2.0, 0.0, -this.size/2.0, this.color);
	midPoint1 = new Point(this.idGen.getId(),
					this.id, this.dirtyListCallback.bind(this),
					0.0, 0.0, -this.size/2.0, RED);
	midPoint2 = new Point(this.idGen.getId(),
					this.id, this.dirtyListCallback.bind(this),
					0.0, 0.0, this.size/2.0, RED);

	point1.color.a = 1.0;
	point2.color.a = 1.0;
	point3.color.a = 1.0;
	point4.color.a = 1.0;

	//add the four lines to dirty and render lists
	this.line1 = new Line(this.idGen.getId(),
						this.id, this.dirtyListCallback.bind(this),
						point1, point2, BLUE);

	
	
	this.line2 = new Line(this.idGen.getId(),
						this.id, this.dirtyListCallback.bind(this),
						point2, point3, BLUE);
	
	
	this.line3 = new Line(this.idGen.getId(),
						this.id, this.dirtyListCallback.bind(this),
						point3, point4, BLUE);
	
	this.line4 = new Line(this.idGen.getId(),
						this.id, this.dirtyListCallback.bind(this),
						point4, point1, BLUE);

	this.midPointLine = new Line(this.idGen.getId(),
						this.id, this.dirtyListCallback.bind(this),
						midPoint1, midPoint2, BLACK);

	this.passDirtyToParent(this.line1);
	this.passDirtyToParent(this.line2);
	this.passDirtyToParent(this.line3);
	this.passDirtyToParent(this.line4);
	this.passDirtyToParent(this.midPointLine);
	this.renderList.push(this.line1);
	this.renderList.push(this.line2);
	this.renderList.push(this.line3);
	this.renderList.push(this.line4);


	//create a surface object
	this.surface = new Surface(this.idGen.getId(),
								this.id, this.dirtyListCallback.bind(this),
								this.color);

	//I am going to render planes partially transparent
	//this.surface.color.a = 0.2;
	
	this.surface.triangles.push(point1, point2, point3,
								point1, point3, point4);

	this.passDirtyToParent(this.surface);
	this.renderList.push(this.surface);
	this.renderList.push(this.midPointLine);

}

Plane.prototype = Object.create(DrawableObject.prototype);

Plane.prototype.constructor = Plane;

Plane.prototype.update = function(){

};