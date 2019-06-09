const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const ballRadius = document.getElementById('range');
const collorBall = document.getElementById('colorpicker');

let width = canvas.width;
let height = canvas.height;


let x = width / 2
let y = height / 2
let xSpead = 0;
let ySpead = -5;


let keyAction = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
}


init();


function init() {
    setInterval(animate, 25);
    onInputChange();
    keyEvent()

}


function drawBall(x, y) {
    circle(x, y, ballRadius, true)

}


function circle(x, y, fillCircle) {
    ctx.beginPath()
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 9;
    ctx.shadowColor = 'gold';
    let gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    ctx.strokeRect(0, 0, width, height);
    ctx.arc(x, y, ballRadius.value, 0, Math.PI * 2, false);
    ctx.fillStyle = collorBall.value ;
    if (fillCircle) {
        ctx.fill()
    } else {
        ctx.stroke()
    }
}

function onInputChange() {
    ballRadius.addEventListener('change', drawBall);
    collorBall.addEventListener('change', drawBall);
}

function keyEvent() {
    document.body.addEventListener('keydown', event)
}

function animate() {
    y += ySpead;
    x += xSpead;

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    drawBall(x, y)
    ctx.closePath();

    if (x < 0 || x >= width) {
        xSpead = -xSpead
    }
    if (y < 0 || y > height) {
        ySpead = -ySpead
    }

}


function event(event) {
    let direction = keyAction[event.keyCode]
    circle(setDirection(direction))
}


function setDirection(direction) {
    if (direction === 'up') {
        xSpead = 0;
        ySpead = -5;
    } else if (direction === 'down') {
        xSpead = 0;
        ySpead = 5;
    } else if (direction === 'left') {
        xSpead = -5;
        ySpead = 0;
    } else if (direction === 'right') {
        xSpead = 5;
        ySpead = 0;
    }

}






