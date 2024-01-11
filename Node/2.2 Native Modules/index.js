const fs = require("fs")
fs.writeFile("text.txt", "Hello Welcome", (err) =>{
    if(err) throw err;
    console.log("The file saved")
})

fs.readFile("text.txt", "utf8", (err, data) => {
    if(err) throw err;
    data = "Hello Sreeraj"
})