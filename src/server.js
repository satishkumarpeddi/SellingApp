const express = require('express');
const path = require('path');
const {userRouter} = require('./routes/users.route.js')
const {courseRouter} = require('./routes/course.route.js')
const {adminRouter}  = require('./routes/admin.route.js')
require('dotenv').config({
    path:path.resolve(__dirname,'../.env')
})
const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use('/api/v1/user',userRouter);
app.use('/api/v1/course',courseRouter);
app.use('/api/v1/admin',adminRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on the port : ${PORT}`);
})