const tabLink = document.querySelectorAll('.tab__link')
const tabLinkParent = document.querySelector('.tabs')
const tabContent = document.querySelectorAll('.planet__content')

addActiveClass(0)

function removeActiveClass(){
    tabContent.forEach(item => {
        item.classList.remove('active')
    })
    tabLink.forEach(item => {
        item.classList.remove('link__active')
    })
}

function addActiveClass(index = 0){
    tabContent[index].classList.add('active')
    tabLink[index].classList.add('link__active')
}

tabLinkParent.addEventListener('click', (e) => {
    tabLink.forEach((link, i) => {
        if(e.target === link){
            removeActiveClass()
            addActiveClass(i)
        }
    })
})