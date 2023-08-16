const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab content ite,
function selecItem(e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border')

    //grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    //add show class
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//listen for tab clicl
tabItems.forEach(item => item.addEventListener('click', selecItem));

// type effect
const dynamicText = document.querySelector("span");
const words = ["Selamanya Akan Tetap Bersatu","Selamanya Akan Tetap KOMPI E"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if(!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if(isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 20);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();