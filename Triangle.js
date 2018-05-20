
//basic triangular building block.  takes in 
//vector3 objects as the vertices
function Triangle(point0In, point1In, point2In){
	this.point1 = point0In;
	this.point2 = point1In;
	this.point3 = point2In;

	this.uVector = vector3Subtract(point1, point0);
	this.vVector = vector3Subtract(point2, point0);

	this.normalVector = vector3CrossProduct(this.uVector, this.vVector).normalize();

	/*
		a = (w dot u)(v dot v) - (w dot v)(u dot v) / 
			(u dot u)(v dot v) - (u dot v)^2

		b = (w dot v)(u dot u) - (w dot u)(u dot v) /
			(u dot u)(v dot v) - (u dot v)^2

		simplified to:

		a = (w dot u)(v dot v) - (w dot v)(u dot v) / 
			denominator

		b = (w dot v)(u dot u) - (w dot u)(u dot v) /
			denominator

	*/

	this.vDotV = vector3DotProduct(this.vVector, this.vVector);
	this.uDotV = vector3DotProduct(this.uVector, this.vVector);
	this.uDotU = vector3DotProduct(this.uVector, this.uVector);

	this.denominator = (this.uDotU * this.vDotV) - Math.pow(this.uDotV, 2);


}

//the bad part of the Triangle class is that the user has to remember to call this
//before using the vectors.  But after weighing the options within javascript,
//it seems like the only way to go.
Triangle.prototype.updateVectors = function(){
	
	this.uVector = vector3Subtract(point1, point0);
	this.vVector = vector3Subtract(point2, point0);

	this.normalVector = vector3CrossProduct(this.uVector, this.vVector).normalize();

	this.vDotV = vector3DotProduct(this.vVector, this.vVector);
	this.uDotV = vector3DotProduct(this.uVector, this.vVector);
	this.uDotU = vector3DotProduct(this.uVector, this.uVector);

	this.denominator = (this.uDotU * this.vDotV) - Math.pow(this.uDotV, 2);
};

Triangle.prototype.isHit = function(intersectionPoint){

	var pointW = vector3Subtract(intersectionPoint, this.point0);
	var wDotU = vector3DotProduct(pointW, this.uVector);
	var wDotV = vector3DotProduct(pointW, this.vVector);

	var a = ((wDotU * this.vDotV) - (wDotV * this.uDotV)) / this.denominator;
	var b = ((wDotV * this.uDotU) - (wDotU * this.uDotV)) / this.denominator;



	if(a >= 0.0005 && a <= 0.995 && b >= 0.0005 && b<=0.9995 && (a+b) <= 0.9995){
		return true;
	} else{
		return false;
	}


};

