(function(){
    let saveTime = 0;
    class GameState extends Map{

        startGame() {
            this.set('money', 0);
            this.set('inc', 1);
            this.set('incCost', 10);
            this.set('incCostI', 10);
            this.set('incCostMult', 1.2);

            this.set('auto', 0);
            this.set('autoCost', 500);
            this.set('autoCostI', 500);
            this.set('autoCostMult', 1.2);

            this.set('gem', 0);
            this.set('ginc', 0);
            this.set('gunlock', 10000);
            this.set('gincCost', 10);
            this.set('gincCostI', 10);
            this.set('gincCostMult', 1.2);

            this.set('gauto', 0);
            this.set('gautoCost', 500);
            this.set('gautoCostI', 500);
            this.set('gautoCostMult', 1.2);


            this.set('delay', 50);
            this.set('framerate', 20);
        }
        getInt(key){
            let notInt = this.get(key);
            return parseFloat(notInt);
        }

        incBy(key, num){
            let current = this.getInt(key);
            current += num;
            this.set(key, current);

        }

        inc(key){
            this.incBy(key,1);
        }

        addTwo(key, key2){
            this.incBy(key, this.getInt(key2));
        }
        subTwo(key, key2){
            this.incBy(key, -this.getInt(key2));
        }
        multTwo(key, key2){
            let num = this.getInt(key);
            let num2 = this.getInt(key2);
            let ans = num * num2;
            this.set(key, ans);
        }


        divKeyByInt(key, divisor){
            let num = this.getInt(key);
            let ans = num / divisor;
            return ans;
        }
    }

    let box = document.createElement('div');
    box.style.position = 'fixed';
    box.style.bottom = '25px';
    box.style.right = '10px';
    box.style.width = '150px';
    box.style.height = '120px';
    box.style.color = 'black';
    box.style.background = 'lightblue';
    box.style.padding = '20px';

    let moneybox = document.createElement('button');
    moneybox.style.position = 'fixed';
    moneybox.style.bottom = '145px';
    moneybox.style.right= '110px';
    moneybox.style.width = '75px';
    moneybox.style.height = '30px';
    moneybox.style.color = 'black';
    moneybox.style.background = 'lightgreen';

    moneybox.style.borderWidth = '2px';
    moneybox.style.borderStyle = 'solid';
    moneybox.style.borderColor = 'black';
    moneybox.style.textAlign = 'center';
    moneybox.addEventListener('click', () =>{
        gameState.addTwo('money', 'inc');
    });

    let incButton = document.createElement('button');
    incButton.innerHTML = 'Inc\n10';
    incButton.style.position = 'fixed';
    incButton.style.bottom = '90px';
    incButton.style.right = '110px';
    incButton.style.width = '75px';
    incButton.style.height = '40px';
    incButton.style.color = 'black';
    incButton.style.background = 'lightgreen';

    incButton.style.borderWidth = '2px';
    incButton.style.borderStyle = 'solid';
    incButton.style.borderColor = 'black';
    incButton.style.textAlign = 'center';

    incButton.addEventListener('click', () =>{
        if (gameState.getInt('money') >= gameState.getInt('incCost')){
            gameState.subTwo('money', 'incCost');
            gameState.inc('inc');
            gameState.addTwo('incCost', 'incCostI');
            gameState.multTwo('incCostI','incCostMult');
            incButton.innerHTML = 'Inc\n'+convert(gameState.getInt('incCost'));
        }
    });

    let autoButton = document.createElement('button');
    autoButton.innerHTML = 'Auto\n500';
    autoButton.style.position = 'fixed';
    autoButton.style.bottom = '35px';
    autoButton.style.right = '110px';
    autoButton.style.width = '75px';
    autoButton.style.height = '40px';
    autoButton.style.color = 'black';
    autoButton.style.background = 'lightgreen';

    autoButton.style.borderWidth = '2px';
    autoButton.style.borderStyle = 'solid';
    autoButton.style.borderColor = 'black';
    autoButton.style.textAlign = 'center';

    autoButton.addEventListener('click', () =>{
        if (gameState.getInt('money') >= gameState.getInt('autoCost')){
            gameState.subTwo('money', 'autoCost');
            gameState.inc('auto');
            gameState.addTwo('autoCost', 'autoCostI');
            gameState.multTwo('autoCostI','autoCostMult');
            autoButton.innerHTML = 'Auto\n'+convert(gameState.getInt('autoCost'));
        }
    });


    let gembox = document.createElement('button');
    gembox.style.position = 'fixed';
    gembox.style.bottom = '145px';
    gembox.style.right= '25px';
    gembox.style.width = '75px';
    gembox.style.height = '30px';
    gembox.style.color = 'black';
    gembox.style.background = 'red';

    gembox.style.borderWidth = '2px';
    gembox.style.borderStyle = 'solid';
    gembox.style.borderColor = 'black';
    gembox.style.textAlign = 'center';
    gembox.addEventListener('click', () =>{
        gameState.addTwo('gem', 'ginc');
    });

    let gincButton = document.createElement('button');
    gincButton.innerHTML = 'G-Inc\n10000' ;
    gincButton.style.position = 'fixed';
    gincButton.style.bottom = '90px';
    gincButton.style.right = '25px';
    gincButton.style.width = '75px';
    gincButton.style.height = '40px';
    gincButton.style.color = 'black';
    gincButton.style.background = 'red';

    gincButton.style.borderWidth = '2px';
    gincButton.style.borderStyle = 'solid';
    gincButton.style.borderColor = 'black';
    gincButton.style.textAlign = 'center';


    gincButton.addEventListener('click', () =>{
        if (gameState.getInt('gem') >= gameState.getInt('gincCost')){
            gameState.subTwo('gem', 'gincCost');
            gameState.inc('ginc');
            gameState.addTwo('gincCost', 'gincCostI');
            gameState.multTwo('gincCostI','gincCostMult');
            gincButton.innerHTML = 'G-Inc\n'+convert(gameState.getInt('gem'));
        } else if (gameState.getInt('money') >= gameState.getInt('gunlock') && gameState.getInt('ginc') === 0){
            gameState.inc('ginc');
            gameState.subTwo('money','gunlock');
            gincButton.innerHTML = 'G-Inc\n'+convert(gameState.getInt('gincCost'));
        }
    });

    let gautoButton = document.createElement('button');
    gautoButton.innerHTML = 'G-Auto\n500';
    gautoButton.style.position = 'fixed';
    gautoButton.style.bottom = '35px';
    gautoButton.style.right = '25px';
    gautoButton.style.width = '75px';
    gautoButton.style.height = '40px';
    gautoButton.style.color = 'black';
    gautoButton.style.background = 'red';

    gautoButton.style.borderWidth = '2px';
    gautoButton.style.borderStyle = 'solid';
    gautoButton.style.borderColor = 'black';
    gautoButton.style.textAlign = 'center';

    gautoButton.addEventListener('click', () =>{
        if (gameState.getInt('gem') >= gameState.getInt('gautoCost')){
            gameState.subTwo('money', 'gautoCost');
            gameState.inc('gauto');
            gameState.addTwo('gautoCost', 'gautoCostI');
            gameState.multTwo('gautoCostI','gautoCostMult');
            gautoButton.innerHTML = 'G-Auto\n'+convert(gameState.getInt('gautoCost'));
        }
    });

    let rButton = document.createElement('button');
    rButton.innerHTML = '';
    rButton.style.position = 'fixed';
    rButton.style.bottom = '10px';
    rButton.style.right = '10px';
    rButton.style.width = '10px';
    rButton.style.height = '15px';
    rButton.style.background = 'black';
    rButton.addEventListener('click', () =>{
        gameState.startGame();
    });


    box.appendChild(incButton);
    box.appendChild(autoButton);
    box.appendChild(moneybox);

    box.appendChild(gincButton);
    box.appendChild(gautoButton);
    box.appendChild(gembox);

    document.body.appendChild(rButton);

    document.body.appendChild(box);

    gameState = new GameState();


    const iframe = document.createElement('iframe');
    iframe.src='https://dartdash.net/storage/';
    document.body.appendChild(iframe);

    iframe.addEventListener('load',function(){
        window.addEventListener('message', function(event){
            if(event.data != null && event.data != 'hi') {
                gameState = new GameState(JSON.parse(event.data));

            }else{
                gameState.startGame();
            }
            loop();
        });
        setTimeout(load, 50);
        function load(){
            iframe.contentWindow.postMessage('load','https://dartdash.net/storage/');
        }
    });





    function convert(amount){
        if(amount >= 100000) {
            return amount.toExponential(2);
        } else if(Math.floor(amount) === amount){
            return amount.toString();
        } else {
            return amount.toFixed(2);
        }
    }

    function moneyToAdd (gemPres){ /*((inc/5)/framerate)*auto*sqrt of gem*/
        let first = gameState.divKeyByInt('inc',5);
        let second = first/gameState.getInt('framerate');
        let third = second*gameState.getInt('auto');
        console.log('function called', gameState.getInt('money'));
        if(gemPres){
            console.log('money with sqrt', gameState.getInt('money'));
            return third*Math.sqrt(gameState.getInt('gem'));

        }else {
            console.log('money no sqrt', gameState.getInt('money'));
            return third;

        }
    }
    function gemToAdd (){ /*((inc/5)/framerate)*auto*sqrt of gem*/
        let first = gameState.divKeyByInt('ginc',5);
        let second = first/gameState.getInt('framerate');
        return second*gameState.getInt('gauto');
    }




    function loop(){


        if(gameState.getInt('gem') != 0){
            gameState.incBy('money', moneyToAdd(true));
            gameState.incBy('gem', gemToAdd());
        } else{
            gameState.incBy('money', moneyToAdd(false));
            gameState.incBy('gem', gemToAdd());
        }
        moneybox.innerText = convert(gameState.getInt('money'));
        gembox.innerText = convert(gameState.getInt('gem'));

        incButton.innerHTML = 'Inc\n'+convert(gameState.getInt('incCost'));
        autoButton.innerHTML = 'Auto\n'+convert(gameState.getInt('autoCost'));

        if(gameState.getInt('ginc') != 0){
            gincButton.innerHTML = 'G-Inc\n'+convert(gameState.getInt('gincCost'));
        }else{
            gincButton.innerHTML = 'G-Inc\n'+convert(gameState.getInt('gunlock'));
        }
        gautoButton.innerHTML = 'G-Auto\n'+convert(gameState.getInt('gautoCost'));

        if (saveTime == 50){

            let savestate = JSON.stringify(Array.from(gameState.entries()));
            iframe.contentWindow.postMessage(savestate,'https://dartdash.net/storage/');

            saveTime = 0;
        } else{
            saveTime++;
        }
        setTimeout(loop, gameState.getInt('delay'));
    }

})();
