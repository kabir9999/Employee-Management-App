const routes = require('express').Router();
const { createEmployee,
     getEmployeeById, 
     getAllEmployee, 
     deleteEmployeeById,
      updateEmployeeById } = require('../Controllers/EmployeeController');
const { cloudinaryFileUploader } = require('../Middleware/FileUploader');

// routes.get('/',(req,res)=>{
//     res.send('Get all employee');
// });

routes.get('/',getAllEmployee);

routes.get('/:id',getEmployeeById);

routes.delete('/:id', deleteEmployeeById);

routes.put('/:id', cloudinaryFileUploader.single('profileImage'), updateEmployeeById);

routes.post('/' ,cloudinaryFileUploader.single('profileImage'),createEmployee);





module.exports = routes;