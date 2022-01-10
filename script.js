// document.cookie = 'same-site-cookie=foo; SameSite=Lax'; 
// document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
document.cookie = 'third_party_var=value; SameSite=None; Secure';
document.cookie = 'third_party_var=metriplica; SameSite=None; Secure';
const header = document.getElementById('header');
const btnMenu = document.getElementById('btnMenu');
// var navlinks = document.getElementsByClassName('.navlink');
const navlinks = document.querySelectorAll('.navlink');
const question = document.querySelectorAll('.pregunta');


// alert(sections.length);
// Boton Menu
btnMenu.addEventListener('click', ()=> {
  btnMenu.classList.toggle('open');
  header.classList.toggle('open-menu');
});

// Los botones del menu cierran el menu al ser precionados
navlinks.forEach((element =>{
  element.addEventListener('click', ()=>{
    header.classList.toggle('open-menu');
    btnMenu.classList.toggle('open');
  })
}))

// Acordeon Dudas
question.forEach((element)=>{
    element.addEventListener('click', (e) => {
      if(!(e.currentTarget.classList.contains('open'))){
        question.forEach((element)=>{
            element.classList.remove('open');
        })
        e.currentTarget.classList.add('open');
      }
      else{
        e.currentTarget.classList.remove('open');
      }
    })
});


// Intersection Observer
const boxes = document.querySelectorAll('.animed');
console.log(boxes.length);
function showElement(entradas, observador){
  entradas.forEach((element)=>{
    // element.target.classList.add('animate__animated', element.isIntersecting);
    // if (element.isIntersecting) { observer.unobserve(element.target) }
    if(element.isIntersecting){
      element.target.classList.add('animate__animated');
      observer.unobserve(element.target);
    }
    if(element.target.classList.contains('contentServices') && element.isIntersecting) {
      element.target.classList.add('animate__fadeInLeft')
    }
    if(element.target.classList.contains('ft-1') && element.isIntersecting) {
      element.target.classList.add('animate__fadeInLeft')
    }
    if(element.target.classList.contains('ft-2') && element.isIntersecting) {
      element.target.classList.add('animate__rotateInUpRight')
    }
    if(element.target.classList.contains('ft-3') && element.isIntersecting) {
      element.target.classList.add('animate__fadeInRight')
    }
    if(element.target.classList.contains('ft-4') && element.isIntersecting) {
      element.target.classList.add('animate__rotateInUpLeft')
    }
    if(element.target.classList.contains('contentBanner') && element.isIntersecting) {
      element.target.classList.add('animate__backInUp')
    }
    if(element.target.classList.contains('boxPrizes') && element.isIntersecting) {
      element.target.classList.add('animate__jackInTheBox')
    }
    if(element.target.classList.contains('dudaBox') && element.isIntersecting) {
      element.target.classList.add('animate__rotateInUpLeft')
    }
    if(element.target.classList.contains('contentForm') && element.isIntersecting) {
      element.target.classList.add('animate__flipInY')
    }
    if(element.target.classList.contains('contentMensaje') && element.isIntersecting) {
      element.target.classList.add('animate__flipInY')
    }
  })
};
const observer = new IntersectionObserver(showElement,{
  root:null,
  rootMargin: '-200px 0px -200px 0px'
  // threshold: 0.6
});
// observer.observe(sections);
boxes.forEach((box)=>{
  observer.observe(box);
});

// Al bajar cambia de color el menu
window.addEventListener('scroll', ()=>{
  if (window.scrollY > 500) {
    header.style.backgroundColor = 'var(--black)';
  }
  else{
    header.style.backgroundColor = 'transparent';
  }
})
// End Al bajar cambia de color el menu

// // Otro Intersection Observer
const beforeImg = document.querySelectorAll('section.dudas::before');
console.log(beforeImg.length);

const images = document.querySelectorAll('img:not(.logoImg, .imgHero)');
// const imagenes = images.concat([beforeImg]);
// console.log(imagenes.length);
function lazy_loading(entries, observer){
  entries.forEach((element)=>{
    if (element.isIntersecting) {
    element.target.src = element.target.dataset.src;
    segundoObserver.unobserve(element.target);
    }
  })
};
const segundoObserver = new IntersectionObserver(lazy_loading,{
  rootMargin: '0px 0px 600px 0px'
});
images.forEach((img)=>{
  segundoObserver.observe(img);
})

// // End Otro intersection