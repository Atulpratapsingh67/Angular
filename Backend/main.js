const express = require('express');
const cors = require('cors');
const app = express();
require('./database/connection');
const studentRoutes = require('./routes/student');
const teacherRoutes =require('./routes/teacher');

app.use(express.json());
app.use(cors());
app.use(studentRoutes);
app.use(teacherRoutes);

const port = process.env.PORT || 5000;
app.listen(port);