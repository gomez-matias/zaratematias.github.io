const btnMenu = document.querySelector('.btnMenu');
const header = document.querySelector('header');
const nav_links = document.querySelectorAll('.nav-link');

btnMenu.addEventListener('click', ()=>{
  header.classList.toggle('open-menu');
  nav_links.forEach((element)=>{
    element.addEventListener('click', ()=>{
      header.classList.remove('open-menu');
    })
  });
});


window.addEventListener('scroll', ()=>{
  if (window.scrollY > 600) {
    header.style.backgroundColor = 'var(--clrDark)';
  }
  else{
    header.style.backgroundColor = '';
  }
});

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    dots: '.carousel__indicadores',
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente'
    }
  });
});


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
};
