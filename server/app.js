const express= require('express');
const app= express();
const cors= require('cors')
const userRouter= require('./router/user.router.js')

app.use(cors({
  origin: "https://newshub-yq70.onrender.com",
  methods:["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/user",userRouter)

module.exports= app