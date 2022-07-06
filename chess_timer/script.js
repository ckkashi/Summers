const pl1 = document.getElementById('pl1Con');
const pl2 = document.getElementById('pl2Con');
const pl1Time = document.getElementById('pl1Time');
const pl2Time = document.getElementById('pl2Time');
const greet = document.getElementById('greet');
let pl1MinInterval,pl2MinInterval,pl1SecInterval,pl2SecInterval;
let pl1Minutes,pl1Seconds,pl2Minutes,pl2Seconds;
let valuesInitialize = false;
let turn = '' ;

let secondsInterval;

pl1MinInterval = ()=>{
    secondsInterval = setInterval(pl1SecInterval,1000);    
}
pl1SecInterval = ()=>{
    if(pl1Seconds == 0){
        pl1Seconds = 60;
        pl1Minutes--;
    }
    if(pl1Minutes < 0){
        clearInterval(secondsInterval);
        greet.innerHTML = 'Player 1 WON';
        pl1Minutes = 9;
        pl1Seconds = 60;
        pl2Minutes = 9;
        pl2Seconds = 60;
        pl1Time.innerHTML = `0${pl1Minutes} : ${pl1Seconds}`;
        pl2Time.innerHTML = `0${pl2Minutes} : ${pl2Seconds}`;
    }
    pl1Seconds = pl1Seconds - 1;
    if(pl1Seconds<10){
        pl1Time.innerHTML = `0${pl1Minutes} : 0${pl1Seconds}`;
    }else{
        pl1Time.innerHTML = `0${pl1Minutes} : ${pl1Seconds}`;
    }
    
}

pl2MinInterval = ()=>{
    secondsInterval = setInterval(pl2SecInterval,1000);    
}
pl2SecInterval = ()=>{
    if(pl1Seconds == 0){
        pl1Seconds = 60;
        pl1Minutes--;
    }
    if(pl2Minutes < 0){
        clearInterval(secondsInterval);
        greet.innerHTML = 'Player 2 WON';
        pl1Minutes = 9;
        pl1Seconds = 60;
        pl2Minutes = 9;
        pl2Seconds = 60;
        pl1Time.innerHTML = `0${pl1Minutes} : ${pl1Seconds}`;
        pl2Time.innerHTML = `0${pl2Minutes} : ${pl2Seconds}`;
    }
    pl2Seconds = pl2Seconds - 1;
    if(pl2Seconds<10){
        pl2Time.innerHTML = `0${pl2Minutes} : 0${pl2Seconds}`;
    }else{
        pl2Time.innerHTML = `0${pl2Minutes} : ${pl2Seconds}`;
    }
}


const initializeValues = (t)=>{
    if(!valuesInitialize){
        pl1Minutes = 9;
        pl2Minutes = 9;
        pl1Seconds= 60;
        pl2Seconds = 60;  
        turn = t;
        valuesInitialize = true;
        pl1Time.innerHTML = `${pl1Minutes} : ${pl1Seconds}`;
        pl2Time.innerHTML = `${pl2Minutes} : ${pl2Seconds}`;
    }
}

const pl1Timer = ()=>{
    if(!valuesInitialize){
        initializeValues('pl1');
    }
    if(turn === 'pl1'){
        // clearInterval(minutesInterval);
        clearInterval(secondsInterval);
        pl1.style.backgroundColor = 'green';
        pl2.style.backgroundColor = 'red';
        turn = 'pl2';
        greet.innerHTML = 'Player 1 turn';
        pl1MinInterval();
        // minutesInterval = setInterval(pl1MinInterval,60000);
    }
}
const pl2Timer = ()=>{
    if(!valuesInitialize){
        initializeValues('pl2');
    }
    if(turn === 'pl2'){
        clearInterval(secondsInterval);
        pl2.style.backgroundColor = 'green';
        pl1.style.backgroundColor = 'red';
        turn = 'pl1';
        greet.innerHTML = 'Player 2 turn';
        pl2MinInterval();
    }
}

pl1.addEventListener('click',pl1Timer);
pl2.addEventListener('click',pl2Timer);