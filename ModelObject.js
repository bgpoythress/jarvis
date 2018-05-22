//ModelObject.js
//Written by Brandon Poythress
//30APR2018
//Description: 
//This object contains some basic functionality for all model objects
//in terms of Model-View-Controller organization.

function ModelObject(typeIn, idIn, parentIdIn,
					usesRenderListIn){
	this.type = typeIn;
	this.id = idIn;
	this.parent = parentIdIn;
	this.idGen = new IdGenerator();
	
}

