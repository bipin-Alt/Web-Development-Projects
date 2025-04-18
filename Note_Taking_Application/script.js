const menuIcon = document.querySelector(".fa-bars");
const crossIcon =document.querySelector(".fa-xmark");

//event listeners to the menu Icon and Cross Icon//
menuIcon.addEventListener("click", ()=>{
  document.querySelector(".nav-buttons").style.display = "block";
  menuIcon.style.display ="none";
  document.querySelector(".close-menu").style.display ="block";
})
crossIcon.addEventListener("click", ()=>{
  document.querySelector(".nav-buttons").style.display ="none";
  menuIcon.style.display ="block";
  document.querySelector(".menu-toggle").style.display ="block";
  document.querySelector(".close-menu").style.display ="none";
})

//function for showing the stats//
const showStats = ()=>{
  const allStats = document.querySelectorAll(".stats");
  const triggerBottom = window.innerHeight*.85;
  allStats.forEach(stat=>{
    const statTop = stat.getBoundingClientRect().top;
    if(statTop<triggerBottom){
      stat.classList.add("visible");
    }
  });
}
window.addEventListener("scroll",showStats);
window.addEventListener("load",showStats)