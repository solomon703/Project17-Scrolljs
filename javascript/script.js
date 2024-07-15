let galaryContainer  = document.querySelector(".galary");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click",()=>{
  galaryContainer.style.scrollBehavior = "smooth";
  galaryContainer.scrollLeft +=900;
});
backBtn.addEventListener("click",()=>{
  galaryContainer.style.scrollBehavior = "smooth";
  galaryContainer.scrollLeft -=900;
});
