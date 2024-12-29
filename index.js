let btn = document.querySelector('#btn');
let body = document.querySelector('body');
let theme = "light"; // Declare outside the event listener
let navBar = document.querySelector('#navbar');
let softW=document.querySelector('.software');
let engineer=document.querySelector('.engineering');

btn.addEventListener('click', e => {
    console.log('clicked');

    if (theme === "light") {
        console.log('dark');
        theme = "dark"; // Update theme to "dark"
        body.style.backgroundColor = 'black';
        body.style.color = "white";
        navBar.style.backgroundImage='url("jetbrains://web-storm/navigate/reference?project=portfolio&path=orangesky.jpg")';
        navBar.style.backgroundSize = '100% 100%';
        navBar.style.backgroundRepeat = 'no-repeat';
        navBar.style.boxShadow = "0 0 4px white, 0 0 8px white";
        engineer.style.color = 'white';


    } else {
        console.log('light');
        theme = "light"; // Update theme to "light"
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        navBar.style.backgroundImage='url(https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?t=st=1735386626~exp=1735390226~hmac=4ab61c207631731e1e313161f3e0f926fbf25fbfa133ea6b7043942f8441ce2b&w=996)'
        navBar.style.backgroundSize = 'cover';
        navBar.style.boxShadow = "0 0 4px midnightblue, 0 0 8px black";
        engineer.style.color = 'midnightblue';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    function fadeInOnScroll() {
        fadeInElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            // Check if the element is in view
            if (elementPosition < viewportHeight * 0.8) { // Trigger when 80% in view
                element.classList.add('visible');
            }
        });
    }

    // Initial check in case elements are already in view
    fadeInOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', fadeInOnScroll);
});


