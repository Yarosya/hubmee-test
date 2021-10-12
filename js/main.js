const dropDown = document.querySelectorAll('.task__item')
const activeBtn = document.querySelector('.filters__btn')


for(let i=0; i<dropDown.length; i++){
    dropDown[i].addEventListener('click',(e)=>{
        e.target.classList.toggle('task__time-active')
        e.stopPropagation();
    })
}

activeBtn.addEventListener('click',()=>{
    activeBtn.classList.toggle('active-btn')
})