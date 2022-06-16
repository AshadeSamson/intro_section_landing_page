const submenuP = document.querySelectorAll(".submenu_p");
const submenuOne = document.querySelector(".submenu1");
const submenuTwo = document.querySelector(".submenu2");
const HeroImage = document.querySelector(".heroimg img");
const openMenu = document.querySelector(".openmenu a");
const closeMenu = document.querySelector(".closemenu a");
const Menu = document.querySelector(".navigation");




// Mobile Screen Hero Image
if(window.innerWidth <= 760){
  HeroImage.setAttribute("src","images/image-hero-mobile.png")
}


// Mobile Harburger Toggler
openMenu.addEventListener("click",() => {
  Menu.style.display = "block";
})
closeMenu.addEventListener("click",() => {
  Menu.style.display = "none";
})


// Dropdown Menus
submenuP.forEach(menu =>{
  function toggleMenu(){
    const arrow = menu.querySelector("img");

    if(arrow.getAttribute("src") === "images/icon-arrow-down.svg"){
      arrow.setAttribute("src","images/icon-arrow-up.svg");
    }else{
      arrow.setAttribute("src","images/icon-arrow-down.svg")
    }

    if(menu === submenuP[0]){
      if(arrow.getAttribute("src") === "images/icon-arrow-up.svg"){
        submenuOne.style.display = "block";
      }else{submenuOne.style.display = "none";}
    }else{
      if(arrow.getAttribute("src") === "images/icon-arrow-up.svg"){
        submenuTwo.style.display = "block";
      }else{submenuTwo.style.display = "none";}
    }
  }
  menu.addEventListener("click",toggleMenu);
})
