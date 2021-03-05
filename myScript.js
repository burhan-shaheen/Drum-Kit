// document.querySelectorAll("button")[0].addEvenListener("click",function() {   alert("I got clicked");});
// document.querySelectorAll("button")[1].addEvetListener("click",function() {   alert("I got clicked");});
// document.querySelectorAll("button")[2].addEvntListener("click",function() {   alert("I got clicked");});
// document.querySelectorAll("button")[3].addventListener("click",function() {   alert("I got clicked");});
// document.querySelectorAll("button")[4].addEvetListener("click",function() {   alert("I got clicked");});
// document.querySelectorAll("button")[5].addEentListener("click",function() {   alert("I got clicked");});
// document.querySelectorAll("button")[6].addEvenListener("click",function() {   alert("I got clicked");});
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    // document.querySelectorAll(".drum")[i].addEventListener("click",function() {  }); 
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

// var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();

document.addEventListener("keypress", function (event) {
    // var buttonInnerHTML=this.onkeypress;
    
    makeSound(event.key);
    buttonAnimation(event.key);

});
function makeSound(key)
{
    switch (key) {
        case "W":
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "A":
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "S":
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "D":
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "J":
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "K":
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "L":
        case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
    }
}


function buttonAnimation(currentKey){

    var active=document.querySelector("."+currentKey);
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed");
    },100);

}