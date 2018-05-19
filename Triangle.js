
//basic triangular building block.  takes in 
//vector3 objects as the vertices
function Triangle(point1In, point2In, point3In){
	this.point1 = point1In;
	this.point2 = point2In;
	this.point3 = point3In;

	this.uVector = vector3Subtract(point2In, point1In);
	this.vVector = vector3Subtract(point3In, point1In);

	this.normalVector = vector3CrossProduct(uVector, vVector).normalize();

}