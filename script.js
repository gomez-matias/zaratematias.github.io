const header = document.getElementById('header');
const btnMenu = document.getElementById('btnMenu');
// var navlinks = document.getElementsByClassName('.navlink');
const navlinks = document.querySelectorAll('.navlink');
const question = document.querySelectorAll('.pregunta');

btnMenu.addEventListener('click', ()=> {
  btnMenu.classList.toggle('open');
  header.classList.toggle('open-menu');
});

navlinks.forEach((element =>{
  element.addEventListener('click', ()=>{
    header.classList.toggle('open-menu');
    btnMenu.classList.toggle('open');
  })
}))

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
})