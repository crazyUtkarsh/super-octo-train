var len = document.querySelectorAll("button").length;
var soundArray = ["crash","kick-bass","snare","tom-1","tom-2","tom-3","tom-4"];
for (var i = 0;i<len;i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
   // var audio = new Audio("sounds/tom-1.mp3");
   // audio.play();
   var buttonInnerHtml = this.innerHtml;
   keypress(buttonInnerHtml);
   animateButton(buttonInnerHtml);
  });
}
document.addEventListener("keydown", function(event){
  keypress(event.key);
  animateButton(event.key);
});
function keypress(key){
  switch (key) {
  case "w":
    var tom1 = new Audio("tom-1.mp3");
    tom1.play();
    break;
  case "a":
    var tom2 = new Audio("tom-2.mp3");
    tom2.play();
    break;
  case "s":
    var tom3 = new Audio('tom-3.mp3');
    tom3.play();
    break;
  case "d":
    var tom4 = new Audio('tom-4.mp3');
    tom4.play();
    break;
  case "j":
    var crash = new Audio('crash.mp3');
    crash.play();
    break;
  case "k":
    var kick = new Audio('kick-bass.mp3');
    kick.play();
    break;
  case "l":
    var snare = new Audio('snare.mp3');
    snare.play();
    break;
  default:
    console.log(key);

  }
}
function animateButton(currentKey){
  var pressedKey = document.querySelector("."+currentKey);
  pressedKey.classList.add("pressed");
  setTimeout(function(){
    pressedKey.classList.remove("pressed");
  },100);
}
