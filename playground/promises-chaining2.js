require('../src/db/mongoose')
const Task=require('../src/models/task')

// Task.findByIdAndDelete('63d49edb9132a90b4443df94').then(()=>{
//   return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


// async function use kore kora hoise

const deletetaskandcount=async (id)=>{
  await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed:false})
  return count
}

deletetaskandcount("63d4bccdef08d70a4463be87").then((count)=>{
console.log(count)
}).catch((e)=>{
console.log('error',e)
})
