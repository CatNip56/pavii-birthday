
const texts=[
'Checking birthday status...',
'Checking RCB loyalty...',
'Checking Virat Kohli obsession...',
'Checking if Pavii is 10/10...',
'Verification complete ✅'
];

let i=0;
const t=setInterval(()=>{
document.getElementById('loadingText').innerText=texts[i];
i++;
if(i>=texts.length){
clearInterval(t);
setTimeout(()=>{
document.getElementById('loadingScreen').style.display='none';
document.getElementById('mainContent').style.display='block';
},1000);
}
},1200);

function showPlayerCard(){
document.getElementById('playerCard').classList.remove('hidden');
}

function showMessage(){
document.getElementById('messageCard').classList.remove('hidden');
}

function celebrate(){
alert('🎂 HAPPY BIRTHDAY PAVII! - From Yashwanth (your lil kiddo) 💙');
startConfetti();
}

function startConfetti(){
const canvas=document.getElementById('confetti');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const pieces=[];
for(let i=0;i<200;i++){
pieces.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*6+2,vy:Math.random()*3+1});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
for(const p of pieces){
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle='white';
ctx.fill();
p.y+=p.vy;
if(p.y>canvas.height)p.y=0;
}
requestAnimationFrame(animate);
}
animate();
}
