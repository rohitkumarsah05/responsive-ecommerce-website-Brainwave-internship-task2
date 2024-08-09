const menuBTN = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuBTNicon = menuBTN.querySelector("i");


menuBTN.addEventListener("click", (e) => {

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBTNicon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")


});

navLinks.addEventListener("click", (e) => {

    navLinks.classList.remove("open");
    menuBTNicon.setAttribute("class", "ri-menu-line");
});



const navSerch = document.getElementById("nav_search");

navSerch.addEventListener("click", (e) => {
    navSerch.classList.toggle("open");
});


const slides = document.querySelectorAll('.slider_slide');
const dots = document.querySelectorAll('.slider_dot');
let currentindex = 0;

function showsslide(index) {

    slides.forEach((slide, i) => {

        slide.classList.toggle('active', i === index);
    });


    dots.forEach((dot, i) => {

        dot.classList.toggle('active', i === index);
    });

const sliderwrapper = document.querySelector('.slider_wrapper');
    sliderwrapper.style.transform = `translateX(-${index * 100}%)`;


}

function nextslide(){

    currentindex = (currentindex +1) % slides.length;
    showsslide(currentindex);

}

dots.forEach((dot, index) => {

    dot.addEventListener('click', () =>{

        currentindex = index;
        showsslide(currentindex);

    });



});

showsslide(currentindex);



const autoslideinterval = 4000;
setInterval(nextslide, autoslideinterval);



