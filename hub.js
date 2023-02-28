"use strict";
// system
let eventPool = require("./eventPool");

const { pickedup, inTransit, delivered } = require("./driver");
const { createPackage, confirmOrder } = require("./vendor");


//------------listen to all events------------//

//As a vendor, I want to alert the system when I have a package to be picked up.
eventPool.on("PICKUP_PACKAGE", pickedup);

//As a driver, I want to be notified when there is a package to be delivered.
eventPool.on("PACKAGE_PICKUPED", inTransit);

//As a driver, I want to alert the system when I have picked up a package and it is in transit.
eventPool.on("IN_TRANSIT", delivered);

//As a driver, I want to alert the system and vendor when a package has been delivered.
eventPool.on("DELIVERED", confirmOrder);

createPackage("Brenda's");

