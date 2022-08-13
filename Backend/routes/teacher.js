const { Router } = require("express");
const Results = require('../database/schema');

const route = Router();


const addResult = async (result)=>{
    const results = new Results(result);
    await results.save();
};

route.get('/teacher',async (req,res)=>{
    const records = await Results.find().sort({rollnumber:1}); 
    res.status(200).send(records);
});

route.post('/teacher/addrecord',(req,res)=>{
    const record = req.body;
    addResult(record);
    res.send(record);
});

route.delete('/teacher',async (req,res)=>{
    const rollnumber = req.body.rollnumber;
    await Results.deleteOne({rollnumber:rollnumber});
    res.send("Removed");
});

route.put('/teacher', async (req,res)=>{
    const record = req.body;
    const response = await Results.find({rollnumber:record.rollnumber});
    if(response){
        await Results.deleteOne({rollnumber:record.rollnumber});
    }

    addResult(record);
    res.send("Updated");
});


module.exports = route;
