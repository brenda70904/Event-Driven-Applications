"use strict";

const Chance = require("chance");
const chance = new Chance();

const eventPool = require("../eventPool");

const pickedup = (payload) => {
  setTimeout(() => {
    eventPool.emit("PACKAGE_PICKUPED", payload);
    console.log("package picked up: package ID");
    logger(payload,"PickedUp")
  }, 2000);
};

const inTransit = (payload) => {
  setTimeout(() => {
    eventPool.emit("IN_TRANSIT", payload);
    console.log(`DRIVER: in-transit: ${payload.orderId}`);
    logger(payload,"in transit");
  }, 4000);
};

const delivered = (payload) => {
  setTimeout(() => {
    eventPool.emit("DELIEVERED", payload);
    console.log(`DRIVER: delivered ${payload.orderId}`);
    logger(payload,"delivered");
  },5000);
}

const logger = (payload, str) => {
  let date = Date.now();
  let timeStemp = new Date(date).toUTCString();
  console.log(
    `EVENT: {\n
      event: "${str}",\n
      time: "${timeStemp}",\n
      payload: {\n
          store: "${payload.store}", \n
          orderId: "${payload.orderId}", \n
          customer: "${payload.customer}", \n
          address: "${payload.address}", \n
      },
  }`);
};


module.exports = {
  pickedup,
  inTransit,
  delivered
}