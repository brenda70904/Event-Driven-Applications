"use strict";

const eventPool = require("../eventPool");

let Chance = require("chance");
let chance = new Chance();

let createPackage = (newStore) => {
  let payload = {
    orderId: chance.guid(),
    store: newStore,
    customer: chance.name(),
    address: chance.address()
  }
  eventPool.emit("PICKUP_PACKAGE", payload);
};

const confirmOrder = (payload) => {
  setTimeout(() => {
    console.log(`thank you, ${payload.custormer}`);
  }, 8000);
}

module.exports = { createPackage, confirmOrder };
