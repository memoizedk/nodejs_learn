const express=require("express");
const router=express.Router();
const employeesController = require('../../controllers/employessController')

router.route('/')
    .get(employeesController.getAllExployees)
    .post(employeesController.createNewEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee)

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports=router;