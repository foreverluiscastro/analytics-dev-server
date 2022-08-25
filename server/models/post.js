// Import database entry models
const { Login, SignUp, Events, Services, Rides } = require('../models/entry-models');

module.exports = {
  createLoginEntry: async (req, res) => {
    // console.log('Inside the create entry method')
    // console.log(req.user_id, "this is the user id")
    // console.log(req.created_on, "this is the creation date")

    // create the data body to post using the model
    const data = new Login({
      user_id: req.user_id,
      created_on: req.created_on,
    });

    // In the try block, we are saving the data using data.save()
    try {
      // console.log(data, 'this is the entry')
      const dataToSave = await data.save();
      res.status(200).send(dataToSave);
      // console.log(dataToSave, 'the data has been saved')
    } catch (err) {
      console.log(`DATABASE ERROR - POST ${err}`);
    }
  },

  createSignUpEntry: async (req, res) => {
    // create the data body to post using the model
    const data = new SignUp({
      user_id: req.user_id,
      created_on: req.created_on,
    });

    // In the try block, we are saving the data using data.save()
    try {
      // console.log(data, 'this is the entry')
      const dataToSave = await data.save();
      res.status(200).send(dataToSave);
    } catch (err) {
      console.log(`DATABASE ERROR - POST ${err}`);
    }
  },

  createEventsEntry: async (req, res) => {
    // create the data body to post using the model
    const data = new Events({
      user_id: req.user_id,
      created_on: req.created_on,
    });

    // In the try block, we are saving the data using data.save()
    try {
      // console.log(data, 'this is the entry')
      const dataToSave = await data.save();
      res.status(200).send(dataToSave);
    } catch (err) {
      console.log(`DATABASE ERROR - POST ${err}`);
    }
  },

  createServicesEntry: async (req, res) => {
    // create the data body to post using the model
    const data = new Services({
      user_id: req.user_id,
      created_on: req.created_on,
    });

    // In the try block, we are saving the data using data.save()
    try {
      // console.log(data, 'this is the entry')
      const dataToSave = await data.save();
      res.status(200).send(dataToSave);
    } catch (err) {
      console.log(`DATABASE ERROR - POST ${err}`);
    }
  },

  createRidesEntry: async (req, res) => {
    // create the data body to post using the model
    const data = new Rides({
      user_id: req.user_id,
      created_on: req.created_on,
    });

    // In the try block, we are saving the data using data.save()
    try {
      // console.log(data, 'this is the entry')
      const dataToSave = await data.save();
      res.status(200).send(dataToSave);
    } catch (err) {
      console.log(`DATABASE ERROR - POST ${err}`);
    }
  },
};