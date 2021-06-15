const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
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
  acceptedTerms: {
      type: Boolean,
      default: false
  },
  jobType: {
      type: String,
      required: false
  },
    createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', UserSchema)
