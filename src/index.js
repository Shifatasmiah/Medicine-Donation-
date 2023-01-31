const express = require("express");
require("./db/mongoose");




const userRouter=require('./routers/user')
const taskRouter=require('./routers/medicine')
const app = express();
const port = process.env.PORT || 5000;

//const router=new express.Router()
// router.get('/test',(req,res)=>{
//   res.send('this is from my other router')
// })

// app.use(router)//register the router


app.use(express.json()); // automatically parse incoming json data to an object ,json data ta asbe postman e client j data ta input dise server e save hoar jonno.
app.use(userRouter)//register the router
app.use(taskRouter)


app.listen(port, () => {
  console.log("Server is up on port " + port);
});
