"option strict";

let vetMax = [];
let vetMin = [];

window.onload = function (){
    for(let i=0;i<10;i++){
        vetMax[i]=Math.floor(Math.random()*(15-10+1))+10;
        vetMin[i]=Math.floor(Math.random()*(5+10+1))-10;
    }
    console.log(vetMax);
    console.log(vetMin);
}

function scriviTemp(){
    let tableMin=document.getElementsByClassName("tMin");
    let tableMax=document.getElementsByClassName("tMax");
    for(let i=0;i<10;i++){
        tableMin[i].innerHTML=vetMin[i];
        tableMax[i].innerHTML=vetMax[i];
        if(vetMax[i]>13){
            tableMax[i].style.color="red";
        }
        if(vetMin[i]<0){
            tableMin[i].classList.add("tMinime");
        }
    }
}