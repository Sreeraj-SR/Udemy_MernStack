var randomNumberOne = Math.floor(Math.random() * 6 + 1)

var randomImageOne = `images/dice${randomNumberOne}.png`
var imageOne = document.querySelectorAll("img")[0]
imageOne.setAttribute('src', randomImageOne);

var randomNumberTwo = Math.floor(Math.random() * 6 + 1)
var randomImageTwo = `images/dice${randomNumberTwo}.png`
var imageTwo = document.querySelectorAll("img")[1]
imageTwo.setAttribute('src', randomImageTwo);

var heading = document.querySelector("h1")
console.log(heading)
if (randomNumberOne > randomNumberTwo){
    heading.innerHTML = "Player One wins"
}
else if (randomNumberTwo > randomNumberOne){
    heading.innerHTML = "Player Two wins"
}
else{
    heading.innerHTML = "It's a tie!"
}