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









































/*var registration_button = document.getElementById("registration_submit")
registration_submit.addEventListener("click", function(){
  var email = document.getElementById('email');
  var email_errors = new emailChecker(email.value).checkEmail();
  setErrors(email_errors, email);
})
function setErrors(errors, element){
  var parent = element.parentNode;
  var next = element.nextElementSibling;
  if(errors.length > 0){
    parent.classList.remove("has-success");
    parent.classList.add("has-error");
    next.innerText = errors.join("\n");
  }else{
    parent.classList.remove("has-error");
    parent.classList.add("has-success");
    next.innerText = "";
  }
}
*/
