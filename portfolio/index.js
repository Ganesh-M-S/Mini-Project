// show menu
const showmenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    };
}                                   
showmenu("toggler", "nav_menu")

// active and remove active
const navlink=document.querySelectorAll('.nav_link')
function linkAction(){
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    const navmenu=document.getElementById("nav_menu")
    navmenu.classList.remove('show')
}
navlink.forEach(n =>n.addEventListener('click',linkAction))
