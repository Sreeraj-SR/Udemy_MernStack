import express from "express"
const app = express();

app.get("/", (req, res) =>{
    res.send("Your Independent App is working")
})

app.get("/register", (req, res) => {
    res.sendStatus(201)
})

app
app.get("/about", (req, res) => {
    res.send("You are on the about page")
})
app.listen(3000, ()=>{
    console.log("this app is running properly")
})