const mongoose = require('mongoose')

const crudSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone_no: {
    type: String,
    required: true
  },
  pwd: {
    type: String,
    required: true
  },
  con_pwd: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  dist: {
    type: String,
    required: true
  },
  agree: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("crud", crudSchema)