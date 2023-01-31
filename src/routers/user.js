const express=require('express')
const router=new express.Router()
const User = require("../models/user");

// router example
// router.get('/test',(req,res)=>{
//     res.send(' from a new file')
//   })




  // app.post("/users", (req, res) => {
//   const user = new User(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//        res.status(400).send(e)
       
//     });
// });

/// by using asyync function:
router.post("/users", async (req, res) => {
    const user = new User(req.body);
   // saved the user and everything comes after is run only if once the user was saved successfully or unsuccessfully  
 // individual promises er jonno individual error handle korar jonno try catch statement use korte hobe.

try{
    await user.save()  
   res.status(201).send(user)

} catch(e){
  res.status(400).send(e)
}
})



// app.get('/users',(req,res)=>{
//     User.find({
        
//     }).then((users)=>{
  
//         res.send(users)

//     }).catch(()=>{
//         res.status(500).send()
//     })
// })


router.get('/users',async (req,res)=>{

try{
 const user=await User.find({})
 res.send(user)
} catch(e){
  res.status(500).send()
}

})



// app.get('/users/:id',(req,res)=>{
//     const _id=req.params.id
//     User.findById(_id).then((user)=>{
//        if(!user){
//            return res.status(404).send()
//        }
       
//         res.send(user)
//     }).catch(()=>{
//    res.status(500).send()
//     })
// })



router.get('/users/:id',async(req,res)=>{
    const _id=req.params.id
  try{
     const user=await User.findById(_id)
     if(!user){
         return res.status(404).send()
     }

  res.send(user)
  } catch(e){
 res.status(500).send()

  }
})


router.patch('/users/:id',async(req,res)=>{
   const updates=Object.keys(req.body)
  const allowedUpdate=['name','email','password','age']
    const isValidOperation= updates.every((update)=>allowedUpdate.includes(update)
    )

    if(!isValidOperation){
      return res.status(400).send({error:'Invalid updates'})
        }
  try{
         const user=await User.findByIdAndUpdate(req.params.id, req.body,{new:true,runValidators:true})
         if(!user){
           return res.status(404).send()
         }
        res.send(user)
  } catch(e){
     
      //validation related issue
      
      res.status(400).send(e)

  }
}) 

router.delete('/users/:id', async(req,res)=>{

      try{
          const user=   await User.findByIdAndDelete(req.params.id)
        if(!user){
          return res.status(404).send()
        }
        res.send(user)
      } catch(e){
         res.status(500).send()
      }
})

  
  module.exports=router