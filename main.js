//change nav style on scroll
window.addEventListener('scroll',() =>{
    document.querySelector('nav').
    classList.toggle
    ('window-scrolled'), window.scrollY > 0

    

})

const textButtons = document.querySelectorAll('.contact_btn');

textButtons.forEach(textButton => {
  let text = textButton.querySelector('p');

  text.innerHTML = text.innerHTML.split('').map((character, index) => `<span 
  style="transform: rotate(${index * 12}deg)">${character}</span>` ).join('')
})






//Swipper gallery js//
var swiper = new Swiper(".mySwiper", { 
  slidesPerView : 3,
  spaceBetween :30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true ,
  },
  breakpoints:{ 
    599: {
    slidesPerView: 2,
    spaceBetween: 40
    },
    1023: {
    slidesPerView: 3,
    spaceBetween: 60
    }
},
});