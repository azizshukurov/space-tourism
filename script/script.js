const tabLink = document.querySelectorAll('.tab__link')
const tabLinkParent = document.querySelector('.tabs')
const tabContent = document.querySelectorAll('.planet__content')

addActiveClass(0)

function removeActiveClass(){
    tabContent.forEach(item => {
        item.classList.remove('active')
    })
}

function addActiveClass(index = 0){
    tabContent[index].classList.add('active')
}

tabLinkParent.addEventListener('click', (e) => {
    tabLink.forEach((link, i) => {
        if(e.target === link){
            removeActiveClass()
            addActiveClass(i)
        }
    })
})