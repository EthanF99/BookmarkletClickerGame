(function(){
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
    moneybox.style.position = "fixed";
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
        money += inc;
    });

    let incButton = document.createElement('button');
    incButton.innerHTML = "Inc\n10";
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
        if (money >= incCost){
            money -= incCost;
            inc++;
            incCost += incCostI;
            incCostI *= incCostMult;
            incButton.innerHTML = "Inc\n"+convert(incCost);
        }
    });

    let autoButton = document.createElement('button');
    autoButton.innerHTML = "Auto\n500";
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
        if (money >= autoCost){
            money -= autoCost;
            auto++;
            autoCost += autoCostI;
            autoCostI *= autoCostMult;
            autoButton.innerHTML = "Auto\n"+convert(autoCost);
        }
    });


    let gembox = document.createElement('button');
    gembox.style.position = "fixed";
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
        gem += ginc;
    });

    let gincButton = document.createElement('button');
    gincButton.innerHTML = "G-Inc\n10000" ;
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
        if (gem >= gincCost){
            gem -= gincCost;
            ginc++;
            gincCost += gincCostI;
            gincCostI *= gincCostMult;
            gincButton.innerHTML = "G-Inc\n"+convert(gincCost);
        }else if (money >= gunlock && ginc === 0){
            ginc++;
            money -= gunlock;
            gincButton.innerHTML = "G-Inc\n"+convert(gincCost);
        }
    });

    let gautoButton = document.createElement('button');
    gautoButton.innerHTML = "G-Auto\n500" ;
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
        if (gem >= gautoCost){
            gem -= gautoCost;
            gauto++;
            gautoCost += gautoCostI;
            gautoCostI *= gautoCostMult;
            gautoButton.innerHTML = "G-Auto\n"+convert(gautoCost);
        }
    });

    box.appendChild(incButton);
    box.appendChild(autoButton);
    box.appendChild(moneybox);

    box.appendChild(gincButton);
    box.appendChild(gautoButton);
    box.appendChild(gembox);

    document.body.appendChild(box);

    let money = 10000000;
    let inc = 1;
    let incCost = 10;
    let incCostI = 10;
    let incCostMult = 1.2;

    let auto = 0;
    let autoCost = 500;
    let autoCostI = 500;
    let autoCostMult = 1.2;

    let gem = 0;
    let ginc = 0;
    let gunlock = 10000;
    let gincCost = 10;
    let gincCostI = 10;
    let gincCostMult = 1.2;

    let gauto = 0;
    let gautoCost = 500;
    let gautoCostI = 500;
    let gautoCostMult = 1.2;


    let delay = 50;
    let framerate = 20;

    loop();

    function convert(amount){
        if(amount >= 100000) {
            return amount.toExponential(2);
        } else if(Math.floor(amount) === amount){
            return amount.toString();
        } else {
            return amount.toFixed(2);
        }
    }

    function loop(){

        moneybox.innerText = convert(money);
        gembox.innerText = convert(gem);
        if(gem !== 0){
            money += (inc/5 / framerate)*auto*Math.sqrt(gem); /*regular autoscale with gem amount*/
            gem += (ginc/5 / framerate)*gauto;
        }else{
            money += (inc/5 / framerate)*auto;
            gem += (ginc/5 / framerate)*gauto;
        }
        setTimeout(loop, delay);
    }

})();