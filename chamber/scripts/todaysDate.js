const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let day = weekday[d.getDay()];
let name = month[d.getMonth()];
document.write(day + ", " + name + new Date().getDate() +", " + new Date().getFullYear() );
