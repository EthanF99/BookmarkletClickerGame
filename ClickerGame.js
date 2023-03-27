(function(){
    console.log("Hi, it's working right now");
    let box = document.createElement('div');
    box.style.position = 'fixed';
    box.style.bottom = '50px';
    box.style.right = '10px';
    box.style.width = '150px';
    box.style.height = '100px';
    box.style.color = 'black';
    box.style.background = 'lightblue';
    box.style.padding = '20px';
    document.body.appendChild(box);

    let money = 0;
    loop();

    function loop(){
        box.innerText = money.toString();
        money++;
        setTimeout(loop, 33);
    }
})();