let navber=document.querySelector('nav');
const manuebtn=document.querySelector('#manue-btn').onclick=()=>{
    navber.classList.add('activeo')
}
const closebtn=document.querySelector('#nav-close').onclick=()=>{
    navber.classList.remove('activeo')
}
let searchFormE=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchFormE.classList.add('activeo')
}
document.querySelector('.close-search').onclick=()=>{
    searchFormE.classList.remove('activeo')
}
window.onscroll=()=>{
    navber.classList.remove('activeo');
    if(window.scrollY>0){
        document.querySelector('.head').classList.add('active');
    }
    else{
        document.querySelector('.head').classList.remove('active');

    }
}
    window.onload=()=>{
        if(window.scrollY>0){
            document.querySelector('.head').classList.add('active');
        }
        else{
            document.querySelector('.head').classList.remove('active');
    
        }
    }
var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",

    },
  });
  var swiper = new Swiper(".product-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",

    },
    breakpoints: {
        0: {
            slidesPerView: 1,
           
          },
        640: {
          slidesPerView: 2,
         
        },
        768: {
          slidesPerView: 3,
          
        },
        1024: {
          slidesPerView: 4,
         
        },
      },

  });