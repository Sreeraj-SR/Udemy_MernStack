import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path'
import { fileURLToPath} from 'url'

const app = express();
const port = 3000;

const nameLength = (firstName, secondName) => {
  let nameLength = 0
  if (firstName && secondName){
    const fullName = firstName + secondName
    nameLength = fullName.length
  } 
  return nameLength
}
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs");
});

app.post("/submit", (req, res) => {
  const firstName = req.body["fName"];
  const secondName = req.body["sName"];
  let lettersCount = nameLength(firstName, secondName);
  res.render("index.ejs", {letterCount: lettersCount})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
