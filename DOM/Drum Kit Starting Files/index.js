let  buttons = document.querySelectorAll(".drum"); // Taking the all buttons with class drum

// Looping through the buttons and adding eventListener to each button
// buttons.forEach( (button) => {
//     button.addEventListener("click",  () => {
//       console.log(this)
//     })
// })

    // A nested arrow function cannot accomadate this method unless 
    // its parent function is not an arrow function var 

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            buttonAnimation(this.innerHTML)
            switch (this.innerHTML){
                case "w":   var tom1 = new Audio("sounds/tom-1.mp3")
                            tom1.play();
                            break; 
                case "a":   var tom2 = new Audio("sounds/tom-2.mp3");
                            tom2.play();
                            break;
                case "s":   var tom3 = new Audio("sounds/tom-3.mp3");
                            tom3.play();
                            break;
                case "d":   var tom4 = new Audio("sounds/tom-4.mp3");
                            tom4.play();
                            break;
                case "j":   var snare = new Audio("sounds/snare.mp3");
                            snare.play();
                            break;
                case "k":   var crash = new Audio("sounds/crash.mp3");
                            crash.play();
                            break;
                case "l":   var kick = new Audio("sounds/kick-bass.mp3")
                            kick.play();
                            break;
                default: console.log(this.innerHTML)
                }   
    })
}

document.addEventListener("keydown", (event) => {
    buttonAnimation(event.key.toLowerCase())
    switch (event.key.toLowerCase()){
        case "w":   var tom1 = new Audio("sounds/tom-1.mp3")
                    tom1.play();
                    break; 
        case "a":   var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
        case "s":   var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
        case "d":   var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
        case "j":   var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
        case "k":   var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
        case "l":   var kick = new Audio("sounds/kick-bass.mp3")
                    kick.play();
                    break;
        default: console.log(this.innerHTML)
        }   
})

buttonAnimation = (currentKey) => {
    var activeButton = document.querySelector(`.${currentKey}`)
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 10)
}