#!/usr/bin/env node

const getFoodTrucks = require('./FoodTruckFinder');
console.log("NAME".padEnd(75) + "ADDRESS");
getFoodTrucks.getFoodTrucks(0);