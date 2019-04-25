class Tabset {
    static CONTAINER_CLASS = 'tabset';

    constructor(el) {
        this.el = el;
        this.init();
    }

    init() {
        this.applyClass();
        this.show(2)
        this.setEvent();
    }

    applyClass() {
        this.el.className = Tabset.CONTAINER_CLASS;
    }

    setEvent() {
        this.el.addEventListener('click', this.onContainerClick.bind(this))
    }

    onContainerClick(e) {
        if (e.target.className == 'tabset-heading') {
            this.showElement(e.target.parentNode);
        }
    }

    showElement(el) {
        this.closeElement(el);
        this.openElement(el);
    }

    closeElement(el) {
        el.children[0].classList.remove('active')
        el.children[1].classList.remove('open')
    }

    closeAllElements() {
        Array.prototype.forEach.call(this.el.children, this.closeElement);
    }

    openElement(el) {
        if (Tabset) {
            this.closeAllElements();
        }
        this.addOpenClasses(el)
    }

    addOpenClasses(el) {
        el.children[0].classList.add('active')
        el.children[1].classList.add('open')
    }

    show(index) {
        this.openElement(this.el.children[index]);
    }
}

const tabs = new Tabset(
    document.getElementById('container')
);