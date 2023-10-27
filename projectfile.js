let scrollContenar = document.querySelector(".gallery");
let nextbtn = document.getElementById("image1");
let backbtn = document.getElementById("image2");

nextbtn.addEventListener("click",()=>{
    scrollContenar.scrollLeft  -= 1600;

    scrollContenar.style.scrollBehavior = "smooth";
});
backbtn.addEventListener("click",()=>{
    scrollContenar.style.scrollBehavior = "smooth";
   
    scrollContenar.scrollLeft  += 1600;
});
//    ================================================================
    
