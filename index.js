var i;
for (i=0;i<7;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
//wasdjkl
function handleClick()
{
  //console.log(this.innerHTML);

//var audio=new Audio('sounds/tom-1.mp3');
//audio.play();
  makeSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}
document.addEventListener("keypress",function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
  //console.log(this);//this matlab wo element jisme event addEventListener hai
  //console.log(event);//key press

});

//for making sounds

function makeSound(key){
  switch (key) {
    case "v":
      var audio=new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "i":
      var audio=new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "k":
      var audio=new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "a":
      var audio=new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "s":
      var audio=new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "h":
      var audio=new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "g":
      var audio=new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

function buttonAnimation(currentKey)
{
  var cl=document.querySelector("."+currentKey);
  cl.classList.add("pressed");
  setTimeout(function(){
  cl.classList.remove("pressed")},100);
}
