
const alertPop = document.querySelector('.alert_container') ;
const overlay = document.getElementById('overlay');
const siteBtn = document.querySelector('[data-site-target]')
const closeBtn = document.querySelector('[data-close]')

document.addEventListener('DOMContentLoaded',()=>{
    alertPop.classList.add('active')
    overlay.classList.add('active')
    siteBtn.addEventListener('click',()=> {
         window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
         alertPop.classList.remove('active')
         overlay.classList.remove('active')
    })
    closeBtn.addEventListener('click',()=>{
        alertPop.classList.remove('active')
        overlay.classList.remove('active')
    })
})
