const header = document.getElementById('header');
const btnMenu = document.getElementById('btnMenu');
// var navlinks = document.getElementsByClassName('.navlink');
var navlinks = document.querySelectorAll('.navlink');
console.log(navlinks.length);
btnMenu.addEventListener('click', ()=> {
  btnMenu.classList.toggle('open');
  header.classList.toggle('open-menu');
  console.log("hola soy el header");
});

navlinks.forEach((element =>{
  element.addEventListener('click', ()=>{
    header.classList.toggle('open-menu');
    btnMenu.classList.toggle('open');
  })
}))






















