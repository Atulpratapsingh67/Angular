const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/results')
        .then(()=>console.log('Connected to database'))
        .catch(error=>console.log(error));