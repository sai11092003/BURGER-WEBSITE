const dotenv=require('dotenv')
dotenv.config()
const users=require('./logs/Users')
const burger=require('./logs/Burgers')
const express=require('express')
const app=express();
const Users=require('./models/Users')
const Order=require('./models/Order')
const Burgers=require('./models/burgerSchema')
const connectdb=require('./config/db')
connectdb();
const importdata=async()=>{
try {
    await Order.deleteMany()
    await Users.deleteMany()
    await Burgers.deleteMany()
    const createdUsers=await Users.insertMany(users)
    const adminUser=createdUsers[0]._id
    const sampleBurgers=burger.map(burger=>({...burger,User:adminUser}))
    await Burgers.insertMany(sampleBurgers)
    console.log('data imported')
    process.exit()

} catch (error) {
    console.log(`${error}`)
    process.exit(1)
}
}
const dataDestroy=async()=>{
   await Order.deleteMany()
   await Users.deleteMany()
   await Burgers.deleteMany()
   console.log('data destroy')
   process.exit()
   
}

if(process.argv[2]==='-d'){
    dataDestroy()
}else{
    importdata()
}