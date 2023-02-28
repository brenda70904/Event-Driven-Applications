"use strict";

const eventPool = require("../eventPool");

let Chance = require("chance");
let chance = new Chance();

let createPackage = (store = chance.word({ syllables: 1 })) => {
  let payload = {
    orderId: chance.guid(),
    store:`${store}'s store`,
    customer: chance.name(),
    address: chance.address()
  }
  eventPool.emit("PICKUP_PACKAGE", payload);
};

const confirmOrder = (payload) => {
  setTimeout(() => {
    console.log(`thank you for shopping with us, ${payload.customer}`);
  }, 5000);
}

module.exports = { createPackage, confirmOrder };
