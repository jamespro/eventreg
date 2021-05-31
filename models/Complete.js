const mongoose = require('mongoose')

const CompleteSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: false,
  },
  zipcode: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  useAddressForPaymentDetails: {
      type: Boolean,
      default: false
    },
    nameOnCard: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: String,
        required: true,
    },
    //TODO: expirationDate needs to be formatted as 4 digits, not a full datetime. Need to do this in the form
    expirationDate: {
        type: String,
        required: true,
    },
    cvv: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Complete', CompleteSchema)
