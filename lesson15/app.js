class Album {
    static CONTAINER_CLASS = 'album-container';
    static ITEM_CLASS = 'album-item'

    constructor(el) {
        this.el = el;
        this.init();
    }

    init() {
        this.applyClasses()
        this.setEvent();
        this.addMainItem();
    }

    applyClasses() {
        this.el.classList.add(Album.CONTAINER_CLASS);
        Array.prototype.forEach.call(this.el.children, (el) => {
            el.classList.add(Album.ITEM_CLASS);
        });
    }

    addMainItem() {
        const mainLi = document.createElement('li');
        mainLi.className = 'album--main-img';

        this.mainImg = document.createElement('img');

        mainLi.appendChild(this.mainImg);
        this.el.appendChild(mainLi);
    }

    setEvent() {
        this.el.addEventListener('mouseover', this.onShowImg.bind(this))
    }

    onShowImg(e) {
        if (e.target.nodeName == 'IMG') {
            this.duplicateImg(e.target);
        }
    }

    duplicateImg(el) {
        this.mainImg.src = el.src;
        this.mainImg.alt = el.alt;
    }
}

const album = new Album(document.getElementById('container'));




