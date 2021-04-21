const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
//TODO: Make a regular incremented event ID for each event, so we are not relying on eventcode staying permanent. 
//   eventid: {
//     type: String,
//     required: true,
//   },
  eventcode: {
    type: String,
    required: true,
  },
  eventname: {
    type: String,
    required: true,
  },
  eventstartdate: {
      //TODO: make this default to a date in the future
    type: Date,
    default: Date.now
  },
    eventenddate: {
      //TODO: make this default to a date in the future plus one week
    type: Date,
    default: Date.now
  },
  eventtype: {
      type: String,
      default: 'onsite',
      enum: ['onsite','virtual','hybrid']
  },
  eventvenue: {
    type: String,
  },
  eventcity: {
    type: String,
  },
  eventstate: {
    type: String,
  },
  eventcountry: {
    type: String,
  },
  availablepostlive: {
    type: Boolean,
  }
})

module.exports = mongoose.model('Event', EventSchema)
