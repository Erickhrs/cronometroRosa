//declarando as variaveis, pegando os elementos e adicionando ouvintes
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let display = document.getElementById("display");
var timeid;

let sec = 0;
let min =0;
let hour =0;

start.addEventListener('click', starclicked);
stop.addEventListener('click', stopclicked);
reset.addEventListener('click', resetclicked);

//função de para deixar formatado
function twodigits (digit){
    if (digit<10){
        return ("0" + digit)
    }
    else {
        return(digit)
    }
}


//funções dos botões
function starclicked() {
   timeid = setInterval(time, 1000)
}
function stopclicked() {
    clearInterval(timeid)
}
function resetclicked() {
    clearInterval(timeid)
    display.innerHTML = ("00:00:00");
    sec = 0;
    min =0;
    hour =0;
}


function time (){
    if (sec==60){
        min++
        sec = 0;
    }
    else if (min==60){
        hour++
        sec = 0;
        min = 0;
    }
    else{
        sec++
    }
    display.innerHTML = (twodigits(hour) + ":" + twodigits(min) + ":" + twodigits(sec));
}