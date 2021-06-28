const mongoose = require('mongoose')

const ItemsSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  showcode: {
    type: String,
    required: true
  },
  itemEXPO: {
    type: String,
  },
  itemCONF: {
    type: String,
  },
  itemCONFPREMIUM: {
    type: String,
  },
  itemONEDAYSAT: {
    type: String,
  },
  itemONEDAYSUN: {
    type: String,
  },
  itemBANQ: {
    type: String,
  },
  itemBANQTABLE: {
    type: String,
  },
  itemTOUR1: {
    type: String,
  },
  itemTOUR2: {
    type: String,
  },
  itemTSHIRT: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Items', ItemsSchema)
