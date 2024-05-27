//navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.tonggle('active');
}
menu.onscroll = () => {
    navbar.classList.remove('active');
}
//Dark mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');

    }
}
//scroll reveal
const sr = scrollreveal({
    origin: 'top',
    distance:'40px',
    duration:2000,
    reset: true
});


sr.reveal(`.home-text,home-img,
.about-img, .about-text,
.box, s-box,
.btn, .connect-text,
.contact-box`, {
interval:200
})