//find the intersection of a vector and a plane
//linePointVector is the line point (Vector3 object)
//u is a constant
//dVector is the vector for the line (Vector3 object)
//planePointVector is a point on the triangluar plane (Vector3 object)
//nVector is the plane normal vecor (Vector3 object)
function getIntersection(linePointVector, dVector, planePointVector, nVector){
	
	//calculate the cross product vector of the line vector and the 
	//plane normal.  
	var crossProduct = vector3CrossProduct(dVector, nVector);

	//calculate the magnitude of that vector
	var magnitude = vector3Magnitude(crossProduct);

	//If the two are close to parallel, then it is a miss.
	//if the are not parallel, it will be a hit and the intersection point
	//will be calculated.
	var e = 0.01;

	if (mag < e){
		return null;
	} else{
		var pMinusL = vector3Subtract(planePointVector, linePointVector);
		var u = vector3DotProduct(pMinusL, nVector) / vector3DotProduct(dVector, nVector);

		var intersect = vector3Add(linePointVector, vector3MultiplyByConst(u, dVector));

		return intersect;
	}

}






function vector3MultiplyByConst(constant, vector){
	var i = vector.elements[0] * constant;
	var j = vector.elements[1] * constant;
	var k = vector.elements[2] * constant;

	var result = new vector3();
	result.elements[0] = i;
	result.elements[1] = j;
	result.elements[2] = k;

	return result;
}

function vector3Add(startVector, addVector){
	var i = startVector.elements[0] + addVector.elements[0];
	var j = startVector.elements[1] + addVector.elements[1];
	var k = startVector.elements[2] + addVector.elements[2];

	var result = new Vector3();
	result.elements[0] = i;
	result.elements[1] = j;
	result.elements[2] = k;

	return result;
}


function vector3Subtract(startVector, minusVector){
	var i = startVector.elements[0] - minusVector.elements[0];
	var j = startVector.elements[1] - minusVector.elements[1];
	var k = startVector.elements[2] - minusVector.elements[2];

	var result = new Vector3();
	result.elements[0] = i;
	result.elements[1] = j;
	result.elements[2] = k;

	return result;
}

function vector3DotProduct(startVector, dotVector){
	var iTerm = startVector.elements[0] * dotVector.element[0];
	var jTerm = startVector.elements[1] * dotVector.element[1];
	var kTerm = startVector.elements[2] * dotVector.element[2];

	var result = iTerm + jTerm + kTerm;
	return result;
}

function vector3CrossProduct(startVector, crossVector){
	var a = startVector.elements;
	var b = crossVector.elements;

	var aX = a[0];
	var aY = a[1];
	var aZ = a[2];

	var bX = b[0];
	var bY = b[1];
	var bZ = b[2];

	var product = new Vector3();
	var result = product.elements;

	var cI = (aY*bZ) - (aZ*bY);
	var cJ = (aZ*bX) - (aX*bZ);
	var cK = (aX*bY) - (aY*bX);

	result.push(cI);
	result.push(cJ);
	result.push(cK);

	return product;
}

function vector3Magnitude(vector){
	//the vector components
	var a1 = vector.elements[0];
	var a2 = vector.elements[1];
	var a3 = vector.elements[2];

	//the squares of each component
	var b1 = Math.pow(a1, 2);
	var b2 = Math.pow(a2, 2);
	var b3 = Math.pow(a3, 2);

	//the magnitude
	var mag = Math.sqrt(b1 + b2 + b3);

	return mag;
}

