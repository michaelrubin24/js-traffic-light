document.getElementById("change-light").addEventListener("click", function(){
  var red = document.getElementsByClassName("red")[0];
  var yellow = document.getElementsByClassName("yellow")[0];
  var green = document.getElementsByClassName("green")[0];
  var begin = document.getElementsByClassName("begin")[0];
  var stop = document.getElementsByClassName("stop")[0];
  var ready = document.getElementsByClassName("ready")[0];
  var go = document.getElementsByClassName("go")[0];
  if(begin != null){
    begin.classList.remove("begin");
    stop.classList.add("red");
  }else if(red != null){
    red.classList.remove("red");
    ready.classList.add("yellow");
  }else if(yellow != null){
    yellow.classList.remove("yellow");
    go.classList.add("green");
  }else if(green != null){
    green.classList.remove("green");
    stop.classList.add("red");
  }
})
