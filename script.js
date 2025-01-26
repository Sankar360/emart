var bar=document.getElementById("bar")
var box=document.querySelector(".box")
let searchform=document.querySelector(".search-form")
let loginform=document.querySelector(".login-form")
let usericon=document.querySelector("#user-icon")


document.querySelector("#search-icon").onclick=()=>{
    searchform.classList.toggle("active");
    box.classList.remove("active")
    loginform.classList.remove("active")
}

bar.addEventListener("click",()=>{
    box.classList.toggle("active")
    searchform.classList.remove("active")
    loginform.classList.remove("active")
    searchform.classList.remove("active")
})

usericon.addEventListener("click",()=>{
    loginform.classList.toggle("active")
    searchform.classList.remove("active")
    box.classList.remove("active")
    searchform.classList.remove("active")
})

window.onscroll=()=>{
    searchform.classList.remove("active")
    box.classList.remove("active")
    loginform.classList.remove("active")
    searchform.classList.remove("active")
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1020: {
        slidesPerView: 3
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1020: {
        slidesPerView: 3
      },
    },
  });