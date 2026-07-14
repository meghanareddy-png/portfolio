/* ===============================
   TYPING ANIMATION
================================= */

const words = [
    "Aspiring Software Development Engineer",
    "Class Representator",
    "C Programmer",
    "Problem Solver"
];
    

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, letterIndex++);
    } else {
        typing.textContent = currentWord.substring(0, letterIndex--);
    }

    let speed = isDeleting ? 70 : 120;

    if (!isDeleting && letterIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/* ===============================
   SMOOTH SCROLL
================================= */

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});


/* ===============================
   ACTIVE NAVIGATION
================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


/* ===============================
   SCROLL TO TOP BUTTON
================================= */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="30px";
topButton.style.right="30px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#ffb6c1";
topButton.style.color="black";
topButton.style.fontSize="24px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 0 20px #ffb6c1";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


/* ===============================
   SCROLL REVEAL ANIMATION
================================= */

const revealElements = document.querySelectorAll(
".about-card,.edu-card,.skill,.project-card,.certificate,.contact-item"
);

function reveal(){

    const trigger = window.innerHeight - 100;

    revealElements.forEach(element=>{

        const top = element.getBoundingClientRect().top;

        if(top < trigger){

            element.style.opacity="1";
            element.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(element=>{

    element.style.opacity="0";
    element.style.transform="translateY(60px)";
    element.style.transition="all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();


/* ===============================
   PROFILE IMAGE HOVER
================================= */

const image = document.querySelector(".hero-image img");

image.addEventListener("mouseenter",()=>{

    image.style.transform="scale(1.05) rotate(2deg)";
    image.style.transition=".4s";

});

image.addEventListener("mouseleave",()=>{

    image.style.transform="scale(1) rotate(0deg)";

});


/* ===============================
   BUTTON RIPPLE EFFECT
================================= */

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow="0 0 25px #ffb6c1";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="none";

    });

});
