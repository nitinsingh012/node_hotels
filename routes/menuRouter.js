const express = require("express")

const router = express.Router()

const menu = require("../models/menu")

router.get("/", async (req,res)=>{
    try{
       const data = await menu.find()
       console.log(data)
       res.status(200).json(data)
    }
    catch(error){
        console.log("menu error", err)
        res.status(500).json({error : "internal menu werror"})

    }
})
router.get("/:taste", async (req,res)=>{
    try{
       const taste = req.params.taste
       if(taste == 'sweet' || taste == 'sour' || taste == 'spice'){
        const response = await menu.find({taste : taste})
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
router.post("/",async (req,res)=>{
    try{
     const data = req.body
     const newMneu = new menu(data)
     const response = await newMneu.save()
     console.log("data saved")
        res.status(200).json(response)
          
    }
    catch(err){
        console.log("err", err)
        res.status(500).json({error :"internal error"})
        
    }
})

module.exports = router