import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path"
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))



const customWare = (req, res, next) => {
  console.log(req.body)
  next()
}
// function customWare(req, res, next)  {
//   console.log(req.body)
//   next()
// }

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(customWare)

app.get('/', (req,res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/submit", (req, res) => {
  console.log(req.body)
  res.send(`<h2>Your Stree is ${req.body["street"]} and your pet name is ${req.body["pet"]}</h2`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
