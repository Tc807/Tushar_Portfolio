// ============================================
// PORTFOLIO JAVASCRIPT
// ============================================

console.log("Welcome to Tushar's Portfolio");

// ===============================
// Smooth Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Reveal Animation on Scroll
// ===============================

const revealElements = document.querySelectorAll(

".skill-card, .project-card, .certificate-card, .about-content, .contact-box"

);

function reveal(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element=>{

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            element.style.opacity="1";

            element.style.transform="translateY(0)";

        }

    });

}

reveal();

window.addEventListener("scroll",reveal);


// ===============================
// Initial Hidden State
// ===============================

revealElements.forEach(element=>{

    element.style.opacity="0";

    element.style.transform="translateY(40px)";

    element.style.transition="all 0.8s ease";

});


// ===============================
// Typing Effect
// ===============================

const title = document.querySelector(".hero h2");

const words = [

"Data Scientist",

"Data Analyst",

"Machine Learning Enthusiast",

"AI Enthusiast"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function typeEffect(){

    let currentWord = words[wordIndex];

    if(!deleting){

        title.textContent=currentWord.substring(0,charIndex++);

        if(charIndex>currentWord.length){

            deleting=true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        title.textContent=currentWord.substring(0,charIndex--);

        if(charIndex===0){

            deleting=false;

            wordIndex=(wordIndex+1)%words.length;

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();


// ===============================
// Scroll To Top Button
// ===============================

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";

topButton.style.bottom="30px";

topButton.style.right="30px";

topButton.style.padding="12px 16px";

topButton.style.border="none";

topButton.style.borderRadius="50%";

topButton.style.background="#2563EB";

topButton.style.color="white";

topButton.style.cursor="pointer";

topButton.style.display="none";

topButton.style.fontSize="18px";

topButton.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===============================
// Greeting Message
// ===============================

const hour=new Date().getHours();

let greeting="";

if(hour<12){

    greeting="Good Morning 👋";

}

else if(hour<18){

    greeting="Good Afternoon 👋";

}

else{

    greeting="Good Evening 👋";

}

console.log(greeting);
