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
  entradas.forEach((entrada)=>{
    if(entrada.isIntersecting){
      entrada.target.classList.add('visible');
    }
  })
  // sections.forEach((element)=>{
    
  // })
};
const observer = new IntersectionObserver(showElement,{
  root: null,
  rootMargin: '0px 0% 0% 0%'
});
sections.forEach((element)=>{
  observer.observe(element);
})
// End Intersection Observer


