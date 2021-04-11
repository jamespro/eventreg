const mongoose = require('mongoose')
//TODO: Need to update these fields to match event instead of data
/*
    < span class='id' ><%= events[i]._id %></span >
                    <span class='eventid'><%= events[i].eventid %></span>
                    <span class='eventcode'><%= events[i].eventcode %></span>
                    <span class='eventname'><%= events[i].eventname %></span>
                    <span class='eventstartdate'><%= events[i].eventstartdate %></span>
                    <span class='eventenddate'><%= events[i].eventenddate %></span>
                    <span class='eventtype'><%= events[i].eventtype %></span>
                    <span class='eventvenue'><%= events[i].eventvenue %></span>
                    <span class='eventcity'><%= events[i].eventcity %></span>
                    <span class='eventstate'><%= events[i].eventstate %></span>
                    <span class='eventcountry'><%= events[i].eventcountry %></span>
                    <span class='availablepostevent'><%= events[i].availablepostevent 
*/
const EventSchema = new mongoose.Schema({
  eventid: {
    type: String,
    required: true,
  },
  eventcode: {
    type: String,
    required: true,
  },
  eventname: {
    type: String,
    required: true,
  },
  eventstartdate: {
      //TODO: make this default to the future
    type: Date,
    default: Date.now
  },
    eventenddate: {
      //TODO: make this default to the future
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
