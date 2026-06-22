const hamburger= document.getElementById("hamburger");
const navLinks=document.querySelector(".nav_links");
hamburger.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
    if(navLinks.classList.contains("active")){
        hamburger.innerHTML ='<i class="fas fa-times"></i>';
    }else{
        hamburger.innerHTML='<i class="fa fa-bars"></i>';
    }
}
);
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        themeToggle.innerHTML = "🌙";
    }
    else{
        themeToggle.innerHTML = "☀️";
    }

});