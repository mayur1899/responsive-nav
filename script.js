let menu_btn = document.querySelector('.menu-btn');
let nav_con = document.querySelector('.nav-ul');
let nav_icon = document.querySelector('.nav-icon');
let nav_link = document.querySelectorAll('.nav-list-link');

let flag = true;

menu_btn.addEventListener("click", () => {
    if (flag === true) {
        nav_con.classList.remove('left-[-100%]');
        nav_con.classList.add('left-[0%]');
        nav_icon.setAttribute("name", "close-outline");
        flag = false;
    } else {
        nav_con.classList.remove('left-[0%]');
        nav_con.classList.add('left-[-100%]');
        nav_icon.setAttribute("name", "menu-outline");
        flag = true;
    }
});

nav_link.forEach((element) => {
    element.addEventListener("click", ()=>{
        nav_con.classList.remove('left-[0%]');
        nav_con.classList.add('left-[-100%]');
        nav_icon.setAttribute("name", "menu-outline");
        flag = true;
    })
});