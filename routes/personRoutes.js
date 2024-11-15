const express = require("express")

const router = express.Router()
const person = require("../models/person")
router.post("/", async (req,res)=>{
    try{
        const data = req.body
        const newPerson = new person(data)
        const response = await newPerson.save()
        console.log("data saved")
        res.status(200).json(response)
          
    }
    catch(err){
        console.log("err", err)
        res.status(500).json({error :"internal error"})
        
    }
   
})
router.get("/", async (req,res)=>{
    try{
   const data = await person.find()
   console.log("data fetched")
   res.status(200).json(data)
     
}
catch(err){
   console.log("err", err)
   res.status(500).json({error :"internal error"})
   
}
})

router.get("/:workType" , async (req,res)=>{
    try{
       const workType = req.params.workType
       if(workType == "waiter" || workType == "manager" || workType == "chef"){
        const response = await person.find({work : workType})
        console.log("data fetched")
       res.status(200).json(response)

       }
       else{
      
        res.status(404).json({error :"internal error"})
        
       }
    }
    catch(err){
        console.log("err", err)
        res.status(500).json({error :"internal error"})
        
     }
})
router.put("/:id", async (req,res)=>{
    try{
      const personId = req.params.id
      const updatepersonData = req.body
      const response = await person.findByIdAndUpdate(personId , updatepersonData , {
        new : true,
        runValidators : true
      })
      if(!response){
        return res.status(404).json({error : "person not found"})
      }
      console.log("success update")
      res.status(200).json(response)
    }

    catch(error){

        console.log("error", error)
        res.status(500).json({error : "internal server"})

    }
})

router.delete("/:id", async (req,res)=>{
  try{
    const personId = req.params.id

    const response = await person.findByIdAndDelete(personId)
    if(!response){
        return res.status(404).json({error : "person not found"})
      }
      console.log("success update")
      res.status(200).json(response)
    }
    catch(error){

        console.log("error", error)
        res.status(500).json({error : "internal server"})

    }
    
})

module.exports = router