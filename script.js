const days = document.querySelector('#days');
const Hours = document.querySelector('#Hours');
const Minutes = document.querySelector('#Minutes');
const Second = document.querySelector('#Second');

let currentYear = new Date().getFullYear();
let newYearTime = new Date(
    `January 01 ${currentYear + 1} 00:00:00`
);

function updateCountDown(){
    let currentTime = new Date();
    let diff = newYearTime - currentTime;

    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;
    // const d = Math.floor(diff/1000/60/60/24);
    days.innerHTML = d;
    Hours.innerHTML = h<10 ? '0'+h:h;
    Minutes.innerHTML = m<10 ? '0'+m:m;
    Second.innerHTML = s<10 ? '0'+s:s;
    // console.log(d);
}
setInterval(updateCountDown,1000);

// console.log(newYearTime);
// console.log(Hours);
// console.log(Minutes);