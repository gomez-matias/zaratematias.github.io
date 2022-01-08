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
const sections = document.querySelectorAll('section')
const showElement = (entradas, observador) => {
  entradas.forEach((element)=>{
    if(element.isIntersecting){
      element.target.classList.add('visible');
    }
  })
};
const observer = new IntersectionObserver(showElement,{
  // root: null,
  rootMargin: '0% 0% 0% 0%',
});
var threshold = IntersectionObserver.threshold;
sections.forEach((element)=>{
  observer.observe(element);
  observer.unobserve(document.querySelector('.hero'))
})
// End Intersection Observer

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