import { doesNotReject } from "assert";

// const img = new Image();
// const canvas = document.getElementById('myCanvas')
// const ctx = canvas.getContext('2d')
// let frame = 1;
// let counts = 0

// img.onload = function(){
//     console.log('loaded')
//     draw();
// }

// img.src = './actor_sprite.png'

// function draw(){
//     ctx.clearRect(0,0,600,600)
//     ctx.drawImage(img, frame*150,0,150,168, counts*10, 0, 150, 168);
//     frame++;
//     counts++;
//     if(frame>=4){frame=1}
//     if(counts>=60){counts=0}
//     setTimeout(draw,100);
// }

const ws = new WebSocket('ws://fep-app.herokuapp.com/')
const messegesList = document.getElementById('messages')
const form = document.getElementById('messageForm')
const messageInput = document.getElementById('messege')

ws.onopen = function (e) {
    console.log('open', e)
    // ws.close()
}
ws.onclose = function (e) {
    console.log('close', e)
}
ws.onerror = function (e) {
    console.log('error', e)
}

ws.onmessage = function(e){
    const message = e.data;
    renderMessage(message)
    console.log('messege', e)
}

function renderMessage(message){
    messegesList.innerHTML += `<li>${message}</li>`
}
function onFormSubmit(e){
    e.preventDefault; 
    const message = messageInput.value
    ws.send(message)
    form.reser();
}