const accordeonHeading = document.getElementsByClassName('accordeon-heading')


function Accordeon(el, config) {
  this.el = el;
  this.config = config;
  this.state = {
          elemVeiwState: 'open',
      }
    }
    
    Accordeon.prototype.setState = function(property, newState) {
      this.state[property] = newState;
    }

Accordeon.prototype.makeArrAccordionBody = function () {
  let accordeonBody = document.getElementsByClassName('accordeon-body')
  for (var i = 0; i < this.accordeonBody.length; i++) {
    this.accordeonBody[i]
  }
  this.accordeonBody = accordeonBody;
}

Accordeon.prototype.event = function () {
  this.elem.addEventListener('click', this.onAppHeaderClick.bind(this));
}

Accordeon.prototype.onAppHeaderClick = function () {
  let ElemClicked = event.target.nextElementSibling.getAttribute('index');

  this.open(ElemClicked) ? this.close(ElemClicked) : this.open(ElemClicked);
  if (!this.config.collapseOther) { this.toСollapseOther(ElemClicked); }
}


Accordeon.prototype.openEl = function () {
  this.accordionBody = this.el.getElementsByClassName('accordeon-body');
  for (var i = 0; i < this.accordionBody.length; i++) {
    this.accordionBody[i].hidden = true;
    this.accordionBody[i].setAttribute('index', i);

  }


}
Accordeon.prototype.startWork = function () {
  this.event();
  this.makeArrOfAcordeonBody();
}

const accordeon = new Accordeon(
  document.getElementById('container'),
  { collapseOther: true }
);

accordeon.startWork();


// function Acordion (elem, config) {
//   this.elem = elem;
//   this.arrOfAccordeonbBodyEl;
//   this.config = config;
//   this.state = {
//       elemVeiwState: 'open',
//   }
// }

// Acordion.prototype.setState = function(property, newState) {
//   this.state[property] = newState;
// }

// Acordion.prototype.setEvent = function() {
//   this.elem.addEventListener('click', this.onAppContainerClick.bind(this));
// }

// Acordion.prototype.onAppContainerClick = function(e) {
//   if(e.target.classList.contains('accordeon-heading')) {
//       this.openElem(e.target.nextElementSibling);
//   }
// }

// Acordion.prototype.openElem = function(acordeonBody) {
//   if(acordeonBody.classList.contains(Acordion.elemShowClassName)
//   || acordeonBody.classList.contains(Acordion.initialClassState)) {
//       if(this.config.collapseOther) {
//           this.closeOtherElems(acordeonBody);
//       }
//       acordeonBody.classList.toggle(this.state.elemVeiwState);
//   }
// }

// Acordion.prototype.closeOtherElems = function(clickedELem) {
//   for(let i = 0; i < this.elem.children.length; i++) {
//       if(this.elem.children[i].children[1] !== clickedELem) {
//           this.elem.children[i].children[1].className = Acordion.initialClassState;
//       }
//   }
// }

// Acordion.prototype.makeArrOfAcordeonBody = function() {
//   let arrOfAccordeonbBodyEl = [];
//   for(let i = 0; i < this.elem.children.length; i++) {
//       arrOfAccordeonbBodyEl.push(this.elem.children[i].children[1]);
//   }
//   this.arrOfAccordeonbBodyEl = arrOfAccordeonbBodyEl;
// }

// Acordion.prototype.close = function(index) {
//   this.arrOfAccordeonbBodyEl[index].className = Acordion.initialClassState;
// }

// Acordion.prototype.open = function(index) {
//   this.arrOfAccordeonbBodyEl[index].className = 'accordeon-body open';
// }

// Acordion.prototype.toggle = function(index) {
//   accordion.arrOfAccordeonbBodyEl[index].classList.toggle(Acordion.elemShowClassName)
// }

// Acordion.prototype.startWork = function() {
//   this.setEvent();
//   this.makeArrOfAcordeonBody();
// }

// Acordion.elemShowClassName = 'open';
// Acordion.initialClassState = 'accordeon-body';

// const accordion = new Acordion(
//   document.getElementById('container'),
//    {collapseOther: true}
// );

// accordion.startWork();

// accordion.open(0);
// accordion.close(0);
// accordion.toggle(0);