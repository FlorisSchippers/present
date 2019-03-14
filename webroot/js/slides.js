window.addEventListener('load', pageLoaded);
function pageLoaded(e) {
     let firstSlide = document.querySelectorAll('.slide')[0];
     let firstSlideFirstCard = firstSlide.querySelectorAll('.card')[0];
     firstSlide.classList.add('active');
     firstSlideFirstCard.classList.add('active');
}

const body = document.querySelector('body');
body.addEventListener('keydown', keyPressed);
function keyPressed(e) {
     if(e.key === 'ArrowRight') {
          nextSlide();
     } else if(e.key === 'ArrowLeft') {
          previousSlide();
     } else if(e.key === 'ArrowDown') {
          nextCard();
     } else if(e.key === 'ArrowUp') {
          previousCard();
     }
}

function nextSlide() {
     let activeSlide = document.querySelector('.slide.active');
     let activeCard = activeSlide.querySelector('.card.active');
     let nextSlide = activeSlide.nextElementSibling;
     let nextSlideFirstCard = nextSlide.querySelectorAll('.card')[0];
     activeSlide.classList.remove('active');
     activeCard.classList.remove('active');
     nextSlide.classList.add('active');
     nextSlideFirstCard.classList.add('active');
}

function previousSlide() {
     let activeSlide = document.querySelector('.slide.active');
     let activeCard = activeSlide.querySelector('.card.active');
     let previousSlide = activeSlide.previousElementSibling;
     let previousSlideFirstCard = previousSlide.querySelectorAll('.card')[0];
     activeSlide.classList.remove('active');
     activeCard.classList.remove('active');
     previousSlide.classList.add('active');
     previousSlideFirstCard.classList.add('active');
}

function nextCard() {
     let activeSlide = document.querySelector('.slide.active');
     let activeCard = activeSlide.querySelector('.card.active');
     let nextCard = activeCard.nextElementSibling;
     activeCard.classList.remove('active');
     nextCard.classList.add('active');
}

function previousCard() {
     let activeSlide = document.querySelector('.slide.active');
     let activeCard = activeSlide.querySelector('.card.active');
     let previousCard = activeCard.previousElementSibling;
     activeCard.classList.remove('active');
     previousCard.classList.add('active');
}
