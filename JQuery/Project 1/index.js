$("h2").addClass('big-title') // adding class using JQuery
$("button").html("<b>You changed it to this.</b>") // manipulating text using JQuery on using .html we can add tags along
$("a").attr("href", "https://instagram.com") //adding attributes using JQuery

// adding events using JQuery

$("h2").click(()=>{
    $("h2").css("color", "Purple")
    alert("You Clicked the Heading")
})

$("button").click(() => {
    $("h2").css("color", "red")
})

$(document).keydown((event) => {
    console.log(event.key)
    $("h2").html(event.key)
})

// Animation using JQuery

$("button").on("click" ,() => {
    $("h2").fadeToggle()
})