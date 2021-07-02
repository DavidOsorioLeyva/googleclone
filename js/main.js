const menuBtn = document.getElementById('menu-btn')
const menuBg = document.querySelector('.menu-background')
const menu = document.querySelector('.menu')
const body = document.querySelector('.body')

const showHideMenu = () => {
    menuBg.classList.toggle('show-menu-bg')
    menu.classList.toggle('show-menu')
    body.classList.toggle('no-scroll')
}

menuBg.addEventListener('click', showHideMenu)
menuBtn.addEventListener('click', showHideMenu)
