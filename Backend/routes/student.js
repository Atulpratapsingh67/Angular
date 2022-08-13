const { Router } = require("express");
const connection = require('../database/mysqlconnection');
const route = Router();

route.post('/student/result',async (req,res) =>{
    const rollnumber = req.body.rollnumber;
    connection.query(
        `SELECT * FROM result where rollnumber = ${rollnumber}`,
        function(err, results, fields) {
          res.send(results);
        }
      );

    
});

module.exports = route;