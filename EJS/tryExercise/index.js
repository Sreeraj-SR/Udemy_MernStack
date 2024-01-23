import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))

const greetingOfDay = () => {
    var todayDate = new Date()
    var greeting = " "
    var day = todayDate.getDay()
    switch(day){
        case 0: greeting = `Sunday fun Day`;
                return greeting
        case 1: greeting = "Hey Monday Lets start this work week"
                return greeting
        case 2: greeting = "Hey Tuesday 3 day for weekend";
                return greeting
        case 3: greeting = "Wednesday, Hey don't be lazy only 2 days for weekend";
                return greeting
        case 4: greeting = "Thursday, Are you suprised there is only one day to go";
                return greeting
        case 5: greeting = "Finally, its Friday ensure no works are pending.";
                return greeting
        case 6: greeting = "Hey its weekend ! Let's enjoy ; )";
                return greeting
        default: greeting = "";
                break;
    }
    
} 

app.get('/', (req, res) => {
    var greeting = greetingOfDay()
    res.render(`${__dirname}/views/index.ejs`, { greeting: greeting})
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})




