// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID= mongodb.ObjectID

const {MongoClient,ObjectID}=require('mongodb')


const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'



MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
   if (error){
     return  console.log('Unable to connect to database.')
   }
const db=client.db(databaseName)


// fetching data

 
// db.collection('tasks').findOne({
//   _id:new ObjectID("63d1df012709830c3018ca46")
// },(error,result)=>{
// if (error){
//   return console.log('Unable to find last work')
// }
// console.log(result)
// })
// db.collection('tasks').find({
// completed:false
// }).toArray((error,task)=>{
//   console.log(task)
// })
 
///Update:


db.collection('users').updateOne({
  _id :new ObjectID("63d1d0a3ea1457975f3c0529")
},{
  $set:{
    name:'Moon'
  }
}).then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
})


db.collection('tasks').updateMany({
  completed:false
},{
  $set:{
    completed:true
  }
}).then((result)=>{
  console.log(result.modifiedCount)
}).catch((error)=>{
  console.log(error)
})


///Delete:

db.collection('users').deleteMany({
  age:23
 }).then((result)=>{
   console.log(result)
 }).catch((error)=>{
   console.log(error)
 })

 db.collection('tasks').deleteOne({
   description:"Wash the glass"
 }).then((result)=>{
   console.log(result)
 }).catch((error)=>{
   console.log(error)
 })
})