class Gallery {


    constructor(el, {delay}) {
        this.container = el;
        this.delay = delay;
        this.currentImg = 0;
        this.init();
    }

    init() {
        this.createButtons();
        this.autoShow();

    }


    autoShow() {
        if (this.delay) {
            this.showNextImg();
            setTimeout(() => this.autoShow(), this.delay);
        }
    }

    createButtons() {
        const prevBtn = document.createElement('div');
        const nextBtn = document.createElement('div');
        const buttons = document.createElement('div');
        prevBtn.classList.add('prev-btn');
        nextBtn.classList.add('next-btn');
        buttons.classList.add('buttons');
        this.addButtons(buttons, prevBtn, nextBtn);
        this.setEvent(prevBtn, nextBtn)


    }

    addButtons(buttons, prevBtn, nextBtn) {
        buttons.appendChild(prevBtn);
        buttons.appendChild(nextBtn);
        this.container.parentNode.appendChild(buttons);
    }

    setEvent(prevBtn, nextBtn) {
        prevBtn.addEventListener('click', () => this.showPrevImg())
        nextBtn.addEventListener('click', () => this.showNextImg())
    }

    showPrevImg() {
        this.showImg(this.currentImg - 1)
    }

    showNextImg() {
        this.showImg(this.currentImg + 1)
    }


    showImg(e) {
        let slides = document.querySelectorAll('li');
        slides[this.currentImg].className = '';
        this.currentImg = (e + slides.length) % slides.length;
        slides[this.currentImg].className = 'showing';
    }


}


const myGallery = new Gallery(
    document.getElementById('container'),
    {delay: 10000}
)




