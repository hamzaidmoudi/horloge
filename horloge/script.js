const H=document.getElementById("aigH");
const S=document.getElementById("aigS");
const M=document.getElementById("aigM");
function updateHorloge(){
let d = new Date();
let minutes=d.getMinutes();
let hours=d.getHours();
let secondes=d.getSeconds();

let se=secondes*360/60;
let min=minutes*360/60;
let ho=hours*360/12;
S.setAttribute("transform",`rotate(${se},50,50)`);
M.setAttribute("transform",`rotate(${min},50,50)`);
H.setAttribute("transform",`rotate(${ho},50,50)`);
}
setInterval(updateHorloge,1000); 