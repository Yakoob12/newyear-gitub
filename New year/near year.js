const days=document.querySelector(".days");
const hours=document.querySelector(".hours");
const minutes=document.querySelector(".minutes");
const secounds=document.querySelector(".secounds");


function Updatetime(){
const CurrentYear=new Date().getFullYear();
const newyear=new Date(`january 1 ${CurrentYear+1} 00:00:00`);
const CurrentDate=new Date();
const diff=newyear-CurrentDate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);
days.innerHTML=d;
hours.innerHTML=h;
minutes.innerHTML=m;
secounds.innerHTML=s;

console.log(h);
}
setInterval(Updatetime,1000);   
// Days.innerhtml=d;

