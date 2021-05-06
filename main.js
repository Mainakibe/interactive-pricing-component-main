//toggle
const toggleCont = document.querySelector('.toggle-container')
const toggle = document.querySelector('.toggle-btn')

toggleCont.addEventListener('click',()=>{
    toggle.classList.toggle('active')
})