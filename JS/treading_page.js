
let body = document.querySelector("body"),
treadingBox = document.querySelector(".treadingBox"),
img = document.querySelectorAll(".gImg"),
showImg = treadingBox.querySelector(".showImg img"),
close = treadingBox .querySelector(".close");
for (let image of img) {
     image.addEventListener("click", ()=>{
     showImg.src = image.src;
     treadingBox.style.display = "block";
     body.style.overflow = "hidden";
     close.onclick = ()=>{
          treadingBox.style.display = "none";
          body.style.overflow = "visible";
        };
      });
    }