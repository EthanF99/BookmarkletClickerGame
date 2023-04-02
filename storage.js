window.addEventListener('message', recieveMessage, false);

function recieveMessage(event){
    let message = event.data;
    localStorage.setItem('game', message);
}