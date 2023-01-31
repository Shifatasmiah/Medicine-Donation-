require('../src/db/mongoose')
const { findByIdAndUpdate } = require('../src/models/user')
const User=require('../src/models/user')

// change the age of an user and count the total number of the user

//63d48ed2093103276c38cb9c

//mongoose method use hobe findbyidandudpate

// User.findByIdAndUpdate('63d490ff17827f4180f57a72',{age:1}).then((user)=>{
//     console.log(user)
// mongoose e set dite hobe na update er jonno
// return User.countDocuments({age:1})

// }) .then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateageandCount= async (id,age)=>{
    const user=await User.findByIdAndUpdate( id,{age})
    const count=await User.countDocuments({age})
    return  user
}


updateageandCount('63d490ff17827f4180f57a72',2).then((result,count)=>{
    console.log(result)
    console.log(count)
}).catch((e)=>{
    console.log(e)
})