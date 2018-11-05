const mongoose = require('mongoose');

const Info = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  shippingInfo: {
    line1: {
      type: String,
      required: true,
    },
    line2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipcode: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
  },
  billingInfo: {
    creditCard: {
      type: Number,
      required: true,
    },
    expiryDate: {
      type: String,
      required: true,
    },
    CVV: {
      type: Number,
      required: true,
    },
    billingZipCode: {
      type: Number,
      required: true,
    },
  },
});

module.exports = Info;