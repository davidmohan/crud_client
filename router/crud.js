const express = require('express')
const router = express.Router()
const crudController = require('../controller/crud')

router.post('/', crudController.postData)
router.get('/', crudController.getAllData)
router.get('/:email', crudController.getData)
router.put('/:regid', crudController.updateData)
router.delete('/:regid', crudController.deleteData)

module.exports = router