const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose');
const e = require('express');
mongoose.set('strictQuery', true);  

const app=express()
app.use(express.json())

app.use(express.urlencoded())   //warning
app.use(cors())

mongoose.connect("mongodb+srv://NIKHILESHSHARMA:NIKHILESHSHARMA@cluster0.93d7iy7.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)
// app.post("/login",(req,res)=>{
//     res.send("my login")
//     res.end()

// })

app.post("/register",(req,res)=>{
    // console.log(req.body)
    const {name,email,password}=req.body
    // if(User.findOne({email:email})){
    //     res.send({message:"User alredy registerd"})
    //     return
    // }
    // // // User.findOne({email:email})
    // const user=new User({
    //     name:name,
    //     email:email,
    //     password:password
    // })

    // User.save(err=>{
    //     if(err){
    //         res.send(err)
    //     }
    //     else{
    //         res.send({message:"Register succesfully"})

    //     }
    // })
    // // res.end()
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

})

app.post("/login",(req,res)=>{
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })

})

app.listen(9002,() => {
    console.log("BE started at port 9002")
})