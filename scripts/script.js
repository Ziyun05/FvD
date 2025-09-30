/* Sticky header */ 
//Sticky header / scroll detectie: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        header.classList.remove('hidden');
        return;
    }
    if (currentScroll > lastScroll) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});



/* Slide in uitgelicht (fade in) */
//https://www.bing.com/search?qs=SC&pq=visibility+js&sk=CSYN1UT1SC1&sc=16-13&q=visibility+javascript&cvid=1f67ab1a63104386b684d3d8f7f95feb&gs_lcrp=EgRlZGdlKgYIAhAAGEAyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEDSAQg4ODc0ajBqNKgCCLACAQ&FORM=ANAB01&ucpdpc=UCPD&PC=ACTS
const listItems = document.querySelectorAll('.agenda section:nth-of-type(2) ul li');

listItems.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add('visible'); 
    }, index * 200); 
});


/* Slideshow */
//https://chatgpt.com/share/68db2b32-9a58-8006-97a0-7ac2b083d35e
const slides = document.querySelectorAll('.slideshow-container img');
let current = 0;


slides[current].classList.add('active');

function showSlide() {

  slides[current].classList.remove('active');

  current = (current + 1) % slides.length;

  slides[current].classList.add('active');
}


setInterval(showSlide, 2500);



/* Lettergrootte */
//https://chatgpt.com/share/68db2bde-78fc-8006-8196-6d1f303d714b
const increaseBtn = document.getElementById('fontIncrease');
const decreaseBtn = document.getElementById('fontDecrease');
const body = document.body;

let fontSize = 16; 
body.style.fontSize = fontSize + 'px';

increaseBtn.addEventListener('click', () => {
  fontSize += 2;
  body.style.fontSize = fontSize + 'px';
});

decreaseBtn.addEventListener('click', () => {
  fontSize -= 2;
  body.style.fontSize = fontSize + 'px';
});

// Bron DOM manipulatie: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
function activate(button) {
    const allButtons = document.querySelectorAll('.filter-buttons li button');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }
  