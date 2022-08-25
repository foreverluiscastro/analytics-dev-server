// Import environment parameters
require("dotenv").config();

/* COMMON CONFIGURATION */
common = {
  server: {
    host: "localhost",
    port: 3001,
  },
};

/* DEVELOPMENT CONFIGURATION */
development = {
  db: process.env.DATABASE_URL
};

module.exports = {
  ...common,
  ...development,
};