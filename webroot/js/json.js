
document.querySelector('#load').addEventListener('change', onChange);
const container = document.querySelector('#container');

function onChange(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
}

function onReaderLoad(event) {
    var json = JSON.parse(event.target.result);
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }

    let slide, card;
    json.forEach((slide) => {
        slideElement = document.createElement('div');
        slideElement.classList.add('slide');
        slide.forEach((card) => {
            cardElement = document.createElement('div');
            cardElement.classList.add('card');
            card.forEach((element) => {
                cardElement.innerHTML += element;
            });
            slideElement.appendChild(cardElement);
        });
        container.appendChild(slideElement);
    });

    let firstSlide = document.querySelectorAll('.slide')[0];
    let firstSlideFirstCard = firstSlide.querySelectorAll('.card')[0];
    firstSlide.classList.add('active');
    firstSlideFirstCard.classList.add('active');
}
