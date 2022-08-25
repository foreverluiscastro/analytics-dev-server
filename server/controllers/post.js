// Import dependencies
const { post } = require("../models/");

module.exports = {
  trackLogin: async (req, res) => {
    try {
      // console.log(req, 'This is the request obj')
      const response = await post.createLoginEntry(req.body, res);

      console.log(`POST made to ${req.path}`);
      res.status(201).send(response);
    } catch (error) {}
  },

  trackSignUp: async (req, res) => {
    try {
      // console.log(req, 'This is the request obj')
      const response = await post.createSignUpEntry(req.body, res);

      console.log(`POST made to ${req.path}`);
      res.status(201).send(response);
    } catch (error) {}
  },

  trackEvents: async (req, res) => {
    try {
      // console.log(req, 'This is the request obj')
      const response = await post.createEventsEntry(req.body, res);

      console.log(`POST made to ${req.path}`);
      res.status(201).send(response);
    } catch (error) {}
  },

  trackServices: async (req, res) => {
    try {
      // console.log(req, 'This is the request obj')
      const response = await post.createServicesEntry(req.body, res);

      console.log(`POST made to ${req.path}`);
      res.status(201).send(response);
    } catch (error) {}
  },

  trackRides: async (req, res) => {
    try {
      // console.log(req, 'This is the request obj')
      const response = await post.createRidesEntry(req.body, res);

      console.log(`POST made to ${req.path}`);
      res.status(201).send(response);
    } catch (error) {}
  },
};
