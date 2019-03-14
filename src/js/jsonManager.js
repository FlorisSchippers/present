import { resetDefaults } from './slideManager.js';

let json;

export function onUploadFile(event) {
    let reader = new FileReader();
    reader.onload = onLoadFile;
    reader.readAsText(event.target.files[0]);
}

export function onLoadFile(event) {
    const container = document.querySelector('#container');
    json = JSON.parse(event.target.result);
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    let slideElement, cardElement;
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
    resetDefaults();
}

export function onSaveFile() {
    let data = encode(JSON.stringify(json));
    let blob = new Blob([data], {
        type: 'application/octet-stream'
    });
    let url = URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'example.json');
    let event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent(event);
}

function encode(string) {
    let output = [];
    for (let i = 0; i < string.length; i++) {
        output[i] = string.charCodeAt(i);
    }
    return new Uint8Array(output);
}
