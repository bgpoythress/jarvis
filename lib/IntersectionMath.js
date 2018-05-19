//find the intersection of a vector and a plane
//pLX, pLY, pLZ are the components of the home point of the vector.
//this will normally be the eye point but not necessarily.
//u is a constant
//dX, dY, dZ are the unit vector components of the line
//pPX, pPY, pPZ are the components of the home point of the trianglular plane
//nX, nY, nZ are the unit vector components of the triangle
function getIntersection(pLX, pLY, pLZ, dX, dY, dZ, pPX, pPY, pPZ, nX, nY, nZ){
	var crossProduct = crossProduct(dX, dY, dZ, nX, nY, nZ);

	var point = [];
	return point;
}