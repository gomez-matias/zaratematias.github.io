'use strict'

const caja = document.querySelectorAll('.cajads')
const h4    = document.querySelectorAll('.h4ds')

h4.forEach( ( cadaH4 , i )=>{
    h4[i].addEventListener('click', () => {
        
        caja.forEach( (cadaCaja, i)=>{
            caja[i].classList.remove('activo')
        })
        caja[i].classList.add('activo')
    })
})