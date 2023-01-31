const express=require('express')
const router=new express.Router()
const Task = require("../models/medicine");




// app.post("/tasks",(req,res)=>{
//     const task=new Task(req.body)
//     task.save().then(()=>{
//    res.status(201).send(task)
//     }).catch((e)=>{
//    res.status(400).send(e)
//     })
// })


//By applying async function:


router.post("/Donation",async (req,res)=>{
    const task=new Task(req.body)
  
    try{
        await task.save()
        res.status(201).send(task)  

    } catch(e){

   res.status(400).send(e)
    }
})

// app.get('/tasks',(req,res)=>{
//     Task.find({}).then((task)=>{
//   res.send(task)
//     }).catch(()=>{
//     res.status(500).send()
//     })
// })

router.get('/Donation',async (req,res)=>{
    try{
     const task= await Task.find({})
    res.send(task)  // promise fulfilled hole send hobe

    } catch(e){
      res.status(500).send()
    }
})



// app.get('/tasks/:id',(req,res)=>{
//     const _id=req.params.id
//     Task.findById(_id).then((task)=>{
//        if(!task){
//            return res.status(404).send()
//        }
       
//     res.send(task)

//     }).catch((e)=>{
//    res.status(500).send()
//     })
// })



router.get('/Donation/:id',async (req,res)=>{
    const _id=req.params.id
    try{
     const task= await Task.findById(_id)
     if(!task){
         return res.status(404).send()
     }
     res.send(task)
    } catch(e){
     res.status(500).send()
    }
})


router.patch('/Donation/:id',async(req,res)=>{


  const updates=Object.keys(req.body) // convert request dot body from object to an array of properties.
  const allowedUpdate=['description','completed']// properties allow for update
    const isValidOperation= updates.every((update)=>allowedUpdate.includes(update)
    )

    if(!isValidOperation){
      return res.status(400).send({error:'Invalid updates'})
        }


  try{
    const task=await Task.findByIdAndUpdate(req.params.id, req.body,{new:true,runValidators:true})
    if(!task){
      return res.status(404).send()
    }
   res.send(task)
} catch(e){

 //validation related issue
 
 res.status(400).send(e)

}
} )

router.delete('/Donation/:id',async (req,res)=>{
  try{
         const task= await Task.findByIdAndDelete(req.params.id)

         if(!task){
         res.status(404).send()
         }

         res.send(task)
  } catch(e){
       res.status(500).send()
  }
})


module.exports=router