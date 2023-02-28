const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
function trigger(){
  if(input.value != ""){
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if(input.value.length < 8)no=0;
    if(input.value.length >= 8 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
    if(input.value.length >= 8 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
    if(input.value.length >= 8 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
    if(no==0){
      weak.classList.add("active");
      medium.style.backgroundColor = "#ff4757";
      strong.style.backgroundColor = "#ff4757";
      text.style.display = "block";
      text.textContent = "Your password is small";
      text.classList.add("weak");
    }
    if(no==1){
      weak.classList.add("active");
      medium.style.backgroundColor = "#d3d3d3";
      strong.style.backgroundColor = "#d3d3d3";
      text.style.display = "block";
      text.textContent = "Your password is too week";
      text.classList.add("weak");
    }
    if(no==2){
        weak.classList.remove("active");
        weak.style.backgroundColor = "#ffa500";
        strong.style.backgroundColor = "#d3d3d3";
        medium.classList.add("active");
        text.textContent = "Your password is medium";
        text.classList.add("medium");
    }else{
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if(no==3){
      weak.classList.remove("active");
      medium.classList.remove("active");
      weak.style.backgroundColor = "#23ad5c";
      medium.style.backgroundColor = "#23ad5c";
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add("strong");
    }else{
      strong.classList.remove("active");
      text.classList.remove("strong");
    }
    showBtn.style.display = "block";
    showBtn.onclick = function(){
      if(input.type == "password"){
        input.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#23ad5c";
      }else{
        input.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#000";
      }
    }
  }else{
    indicator.style.display = "none";
    text.style.display = "none";
    showBtn.style.display = "none";
  }
}