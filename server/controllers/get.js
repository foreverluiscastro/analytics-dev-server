// Import dependencies
const Login = require("../models/entry-models/Login");
const SignUp = require("../models/entry-models/SignUp");
const Events = require("../models/entry-models/Events");
const Services = require("../models/entry-models/Services");
const Rides = require("../models/entry-models/Rides");

module.exports = {
  getAllLoginData: async (req, res) => {
    console.log("getting all logins");
    try {
      const data = await Login.find();
      res.status(200).send(data);
    } catch (err) {}
  },

  getAllSignUpData: async (req, res) => {
    console.log("getting all signups");
    try {
      const data = await SignUp.find();
      res.status(200).send(data);
    } catch (err) {}
  },

  getAllEventsData: async (req, res) => {
    console.log("getting all events");
    try {
      const data = await Events.find();
      res.status(200).send(data);
    } catch (err) {}
  },

  getAllServicesData: async (req, res) => {
    console.log("getting all services");
    try {
      const data = await Services.find();
      res.status(200).send(data);
    } catch (err) {}
  },

  getAllRidesData: async (req, res) => {
    console.log("getting all rides");
    try {
      const data = await Rides.find();
      res.status(200).send(data);
    } catch (err) {}
  },
};