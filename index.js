const express = require('express'); //
const app = express();//
require('dotenv').config();
const PORT = process.env.PORT || 8080;
require('./Models/db');
const EmployeeRouter = require("./Routes/EmployeesRoutes");
const bodyParser = require('body-parser');//
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Employee Mgm server is running');
})
app.use('/api/employees', EmployeeRouter);

app.listen(PORT , ()=>{
    console.log(`Server is running on - ${PORT}`);
})

// 44:00;
