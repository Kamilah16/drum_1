//button
var n=document.lastElementChild.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var x=this.innerHTML;
    make_sound(x);
    make_difference(x);

  });

}
//keypress
document.addEventListener("keydown",function(event){
  make_sound(event.key);
  make_difference(event.key)
});
function make_sound(event){
  switch(event){
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
       audio.play();
       break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      alert("press someother key");
    









  }
}
function make_difference(e){
  document.querySelector("."+e).classList.toggle("pressed");

}