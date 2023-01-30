const crudSchema = require('../model/crud')

async function postData(req, res) {
  try {
    var data = await crudSchema({
      name: req.body.name,
      email: req.body.email,
      phone_no: req.body.phone_no,
      pwd: req.body.pwd,
      con_pwd: req.body.con_pwd,
      gender: req.body.gender,
      state: req.body.state,
      dist: req.body.dist,
      agree: req.body.agree
    })
    await data.save()
    res.json({
      status: true,
      message: "Data Inserted!"
    })
  } catch (e) {
    res.json({
      status: false,
      message: "Duplicate Found!"
    })
  }
}

async function getAllData(req, res) {
  var data = await crudSchema.find()
  res.json(data)
}

async function getData(req, res) {
  var data = await crudSchema.findOne({email: req.params.email})
  res.json(data)
}

async function updateData(req, res) {
  var data = await crudSchema.updateOne({ regid: req.params.regid.toUpperCase() }, {
    name: req.body.name,
    regid: req.body.regid.toUpperCase(),
    dept: req.body.dept,
    email: req.body.email,
    password: req.body.password
  })
  if (data.modifiedCount > 0) {
    res.json({
      status: true,
      message: "Data Updated!"
    })
  } else {
    res.json({
      status: false,
      message: "Data Not Updated!"
    })
  }
}

async function deleteData(req, res) {
  var data = await crudSchema.deleteOne({ regid: req.params.regid.toUpperCase() })
  if (data.deletedCount > 0) {
    res.json({
      status: true,
      message: "Data Deleted!"
    })
  } else {
    res.json({
      status: false,
      message: "Data Not Deleted!"
    })
  }
}

module.exports = {
  postData,
  getAllData,
  getData,
  updateData,
  deleteData
}