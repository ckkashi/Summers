const pl1 = document.getElementById('pl1Con');
const pl2 = document.getElementById('pl2Con');
const pl1Time = document.getElementById('pl1Time');
const pl2Time = document.getElementById('pl2Time');
const greet = document.getElementById('greet');
let pl1TimeInterval,pl2TimeInterval;
let pl1Minutes,pl1Seconds,pl2Minutes,pl2Seconds;
let valuesInitialize = false;
let turn = false;

const initializeValues = ()=>{
    if(!valuesInitialize){
        pl1Minutes = 10;
        pl2Minutes = 10;
        pl1Seconds= 60;
        pl2Seconds = 60;  
        valuesInitialize = true;
        pl1Time.innerHTML = `${pl1Minutes} : ${pl1Seconds}`;
        pl2Time.innerHTML = `${pl2Minutes} : ${pl2Seconds}`;
    }
}

const pl1Timer = ()=>{
    initializeValues();
    if(!turn){
        pl1.style.backgroundColor = 'green';
        pl2.style.backgroundColor = 'red';
        turn = true;
    }
}
const pl2Timer = ()=>{
    initializeValues();
    if(turn){
        pl2.style.backgroundColor = 'green';
        pl1.style.backgroundColor = 'red';
        turn = false;
    }
}

pl1.addEventListener('click',pl1Timer);
pl2.addEventListener('click',pl2Timer);