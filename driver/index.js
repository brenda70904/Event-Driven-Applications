"use strict";

const Chance = require("chance");
const chance = new Chance();

const eventPool = require("../eventPool");
const logger = require("../logger");

const pickedup = (payload) => {
  setTimeout(() => {
    eventPool.emit("PACKAGE_PICKUPED", payload);
    console.log(`package picked up:${payload.orderId}`);
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
    eventPool.emit("DELIVERED", payload);
    console.log(`DRIVER: delivered ${payload.orderId}`);
    logger(payload,"delivered");
  },5000);
}


module.exports = {
  pickedup,
  inTransit,
  delivered
}