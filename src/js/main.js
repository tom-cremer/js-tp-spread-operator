


const jump = {
    jumpElement: document.querySelector('.jump'),
    letterList: [],
    spanString: '',

    init() {
        this.textToList();
        this.letterToSpan();
        this.jumpElement.textContent = '';
        this.jumpElement.insertAdjacentHTML('beforeend', this.spanString);
    },

    textToList() {
        this.letterList = this.jumpElement.textContent.split('')
    },

    letterToSpan() {
        this.letterList.forEach((letter) => { // parcours de la liste de lettre
            (letter === ' ')?this.spanString += '<span>\u00A0</span>' : this.spanString += `<span>${letter}</span>`;

        });
    }
}

jump.init();