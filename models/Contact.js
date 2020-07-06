// this will be a collection in the database
const mongoose = require('mongoose');

// Create schema
const ContactSchema = new mongoose.Schema({
  name: {
    first: {
      type: String,
      required: true,
      trim: true
    },
    last: {
      type: String,
      required: true,
      trim: true
    }
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  }
});

// Create and instantiate model with schema
const Contact = mongoose.model("Contacts", ContactSchema);

// export schema
module.exports = Contact;