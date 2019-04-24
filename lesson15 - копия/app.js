class Tabset{
    // static CONTAINER_CLASS = 'tabset';
    // static TABSET_HEADING = 'tabset-heading';
    // static TABSET_CONTENT = 'tabset-content2';


    constructor(el, config) {
        this.el = el;
        this.config = config;
        this.init();
        this.index = 0;
    }

    init() {
        // this.applyClasses();
      this.setEvent();
    }

    // applyClasses() {
    //     this.el.className = Tabset.CONTAINER_CLASS;
    //     Array.prototype.forEach.call(this.el.children, (el) => {
    //         el.children[0].className = Tabset.TABSET_HEADING;
    //         el.children[1].className = Tabset.TABSET_CONTENT;
           
    //     });
    // }

    setEvent(){
        this.el.addEventListener('click', (e) => this.onTabHeadingClick(e))
    }      

    onTabHeadingClick(){
        if (e.target.classList.contains('tabset-heading')){
            this.toggleElement(e.target.parentNode);
        }
    }

    toggleElement(){
        if (e.classList.contains('open')){
            this.closeElement(e);
        } else {
            this.openElement(e);
        }
    
    }

    closeElement(e){
        e.classList.remove('open');
    }
    
    closeAllElements(){
        Array.prototype.forEach.call(this.el.children, this.closeElement);
    }

    openElement(e){
        if (this.config.collapseOther){
            this.closeAllElements();
        }
    
       e.classList.add('open');
    }

    

    // findItemIndexOfCollection(){
    //     return Array.prototype.indexOf.call(htmlCollection, elem);
    // }
}

const tabs = new Tabset(
                        document.getElementById('container')
                    );