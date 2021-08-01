const usertemplate = require("../models/usermodel.js");
const displayBmiText =require("../utils/bmitotext.js")
exports.userCreate = async(req, res) => {
  try{
    console.log(req.body)
  const { age, gender, height, weight } = req.body;
  const bmi=await((parseInt(weight)/parseInt(height)/parseInt(height))*10000).toFixed(1);
  
  const bmitext =await displayBmiText(bmi)
  console.log(bmitext)
  const user = new usertemplate({
    age,
    gender,
    height,
    weight,
    bmi,
    bmitext,
  });
  user
    .save()
    .then(() => {
      res.status(200).json({ message: "user saved",data:bmi });
    })
    .catch((error) => {
      res.status(400).json({ error: error, message: "error" });
    });
  }
  catch(error){
    return res
    .status(400)
    .json({ error: err, message: "Error Saving data" });
} 
};


exports.allUsers = (req, resp) => {
  try{
    usertemplate.find({})
  .exec((err,Users)=>{
     if(err){
      resp.status(400).json({message : "NO User Found"});
     }else{
         resp.json(Users);
     }
  });
  }
  catch(error){
      return resp
      .status(400)
      .json({ error: err, message: "Error fetching data" });
  } 
};
