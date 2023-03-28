(function(){


    let box = document.createElement('div');
    box.style.position = 'fixed';
    box.style.bottom = '50px';
    box.style.right = '10px';
    box.style.width = '150px';
    box.style.height = '100px';
    box.style.color = 'black';
    box.style.background = 'lightblue';
    box.style.padding = '20px';

    let moneybox = document.createElement('button');
    moneybox.style.position = "relative";
    moneybox.style.top = '-130px';
    moneybox.style.left= '0px';
    moneybox.style.width = '50px';
    moneybox.style.height = '30px';
    moneybox.style.color = 'black';
    moneybox.style.background = 'lightblue';

    moneybox.style.borderWidth = '2px';
    moneybox.style.borderStyle = 'solid';
    moneybox.style.borderColor = 'black';
    moneybox.style.textAlign = 'center';
    moneybox.addEventListener('click', () =>{
        money += inc;
    });

    let incButton = document.createElement('button');
    incButton.innerHTML = "Inc\n10";
    incButton.style.position = 'relative';
    incButton.style.top = '20px';
    incButton.style.left = '0px';
    incButton.style.width = '50px';
    incButton.style.height = '40px';
    incButton.style.color = 'black';
    incButton.style.background = 'lightblue';

    incButton.style.borderWidth = '2px';
    incButton.style.borderStyle = 'solid';
    incButton.style.borderColor = 'black';
    incButton.style.textAlign = 'center';

    incButton.addEventListener('click', () =>{
        if (money >= incCost){
            money -= incCost;
            inc++;
            incCost += incCostI;
            incCostI *= incCostMult;
            incButton.innerHTML = "Inc\n"+incCost.toFixed(2).toString();
        }
    });

    let autoButton = document.createElement('button');
    autoButton.innerHTML = "Auto\n500";
    autoButton.style.position = 'relative';
    autoButton.style.top = '10px';
    autoButton.style.left = '0px';
    autoButton.style.width = '50px';
    autoButton.style.height = '40px';
    autoButton.style.color = 'black';
    autoButton.style.background = 'lightblue';

    autoButton.style.borderWidth = '2px';
    autoButton.style.borderStyle = 'solid';
    autoButton.style.borderColor = 'black';
    autoButton.style.textAlign = 'center';

    autoButton.addEventListener('click', () =>{
        if (money >= autoCost){
            money -= autoCost;
            auto++;
            autoCost += autoCostI;
            autoCostI *= autoCostMult;
            autoButton.innerHTML = "Auto\n"+autoCost.toFixed(2).toString();
        }
    });

    box.appendChild(incButton);
    box.appendChild(autoButton);

    box.appendChild(moneybox);

    document.body.appendChild(box);

    let money = 0;
    let inc = 1;
    let incCost = 10;
    let incCostI = 10;
    let incCostMult = 1.2;

    let auto = 0;
    let autoCost = 500;
    let autoCostI = 500;
    let autoCostMult = 1.2;

    let delay = 50;
    let framerate = 20;

    loop();

    function loop(){
        moneybox.innerText = money.toFixed(2).toString();
        money += (inc/10 / framerate)*auto;
        setTimeout(loop, delay);
    }

})();
