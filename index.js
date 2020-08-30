const express = require('express')
const PORT = process.env.PORT || 5001

const app = express()

app.use(express.static("./static"))

app.get("/",(req,res)=>{
    res.sendFile("index.html",{root: __dirname})
})
app.get("/sort",(req,res)=>{
    res.sendFile("index_sort.html",{root: __dirname})
})
app.get("/search",(req,res)=>{
    res.sendFile("index_search.html",{root: __dirname})
})
app.listen(PORT,()=>{
    console.log("running")
})