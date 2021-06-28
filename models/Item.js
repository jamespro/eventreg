const mongoose = require('mongoose')
//TODO: Do I set the itemStatus here? or just at insert?
const ItemSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  showcode: {
    type: String,
    required: true
  },
  itemcode: {
    type: String,
    required: true,
  },
  itempricekey: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Item', ItemSchema)
