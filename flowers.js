// ===== EDIT THESE =====
const CODE = "0308";                 // the secret code (here: 03.08, August 3rd)
const HINT = "Think of the day it all began (DDMM)";
const START = new Date(2026, 7, 3);  // August 3rd. Change the year if needed (month is 0-based).
const reasons = [
  "The way your whole face changes when you smile.",
  "You make ordinary days feel like something worth remembering.",
  "You listen like what I say actually matters.",
  "Your laugh. I'd do almost anything to hear it again.",
  "You're kind to people even when nobody is watching.",
  "I feel like myself around you, only better.",
  "The way you say hrášková polievka.",
  "You're braver than you give yourself credit for.",
  "Your hugs fix things I didn't even know were broken.",
  "You notice the small things that everyone else misses.",
  "Silence with you is never awkward, only peaceful.",
  "You care so deeply, even when it's hard.",
  "The little face you make when you're thinking.",
  "You make me want to be a better man.",
  "Waiting for your messages is my favorite part of the day.",
  "You're beautiful, and honestly that's the least interesting thing about you.",
  "You make me laugh when I'm trying my hardest to stay serious.",
  "You trust me, and I never take that lightly.",
  "Home feels like wherever you are.",
  "I love how you šiši are you.",
  "You're patient with me on my worst days.",
  "You turn simple plans into little adventures.",
  "Your voice calms me down in a second.",
  "You believe the best in people.",
  "You dream big, and it makes me want to dream bigger.",
  "You're honest, even when it's the harder thing to be.",
  "You make even boring errands feel fun.",
  "The way you light up when you talk about things you love.",
  "You give great advice without even realizing it.",
  "You make me feel chosen.",
  "You're soft and strong at the same time.",
  "You remember the little things I tell you.",
  "You make the world feel a little less heavy.",
  "Your hand fits in mine like it was always meant to.",
  "You're the first person I want to tell my good news to.",
  "And the first person I want next to me on the bad days.",
  "You make me proud to be yours.",
  "You're so gentle with my heart.",
  "The way you look at me when you think I'm not looking.",
  "You helped me believe in good things again.",
  "You're funny without even trying.",
  "You make the future look exciting instead of scary.",
  "You love fully, and I get to be on the receiving end.",
  "Even when you're tired and grumpy, I'd still pick you.",
  "You make me slow down and actually enjoy life.",
  "You're the calm in the middle of my loudest thoughts.",
  "Just being near you makes me feel at ease.",
  "With you, I never have to pretend.",
  "You're the best thing that has happened to me in my life.",
  "Because it's you. Just you. Always you."
];
const SECRET = "My secret: every single day, I fall for you a little more. Please don't tell anyone, I'm supposed to be playing it cool.";
const LETTER = "Lisi,\n\nI'm not great at saying everything out loud, so I wanted to write it down, slowly and for real.\n\nBefore you, I didn't know a person could feel like home. You walked in and made everything softer, brighter and so much more fun. You make me laugh, you make me feel safe, and you make me want to be the best version of myself.\n\nI don't have grand promises, only honest ones. I'll be kind to you. I'll be patient with you. I'll cheer for you, hold your hand through the hard days and celebrate the good ones like they're the best in the world.\n\nEverything above is just flowers. This part is me, and it's the truest thing here: I love you, Lisi. With my whole heart.";
// ======================
const $=id=>document.getElementById(id);
const pc=['#f7a1bb','#ffc2d4','#e8527a','#ffd6e2','#f08fb0'];

function petal(){const p=document.createElement('i');p.className='pet';
  p.style.cssText=`left:${Math.random()*100}%;--c:${pc[Math.random()*5|0]};--x:${Math.random()*120-60}px;animation-duration:${7+Math.random()*7}s`;
  document.body.appendChild(p);setTimeout(()=>p.remove(),14500)}
setInterval(petal,700);
function hearts(x,y,n=1,big=18){for(let i=0;i<n;i++){const h=document.createElement('span');h.className='hrt';h.textContent=['♥','💗','💕','🌸'][Math.random()*4|0];
  h.style.cssText=`left:${x}px;top:${y}px;--s:${big+Math.random()*10}px;--x:${Math.random()*140-70}px;--y:${-40-Math.random()*110}px`;
  document.body.appendChild(h);setTimeout(()=>h.remove(),1100)}}
document.addEventListener('pointerdown',e=>hearts(e.clientX,e.clientY,3));
let lt=0;document.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'&&Date.now()-lt>80){lt=Date.now();hearts(e.clientX,e.clientY,1,12)}});

const code=$('code');$('hint').textContent=HINT;let tries=0;
function unlock(){
  if(code.value===CODE){
    document.body.classList.remove('locked');$('gate').classList.add('out');
    for(let i=0;i<30;i++)setTimeout(()=>hearts(innerWidth/2,innerHeight/2,2,26),i*40);
    try{sessionStorage.setItem('ok','1')}catch(e){}
  }else{
    tries++;code.classList.remove('shake');void code.offsetWidth;code.classList.add('shake');code.value='';
    $('hint').textContent=tries>2?'Almost, my love. '+HINT:'Not quite. Try again.';
  }
}
$('enter').onclick=unlock;code.onkeydown=e=>{if(e.key==='Enter')unlock()};
try{if(sessionStorage.getItem('ok')){document.body.classList.remove('locked');$('gate').remove()}}catch(e){}

function tick(){let s=Math.max(0,Math.floor((Date.now()-START)/1000));
  const d=Math.floor(s/86400),h=Math.floor(s%86400/3600),m=Math.floor(s%3600/60);
  $('clock').innerHTML=[[d,'days'],[h,'hours'],[m,'min'],[s%60,'sec']].map(x=>`<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}
tick();setInterval(tick,1000);

const msgs=[[0,"Go on, slide it."],[15,"A little..."],[35,"Okay, that's a lot."],[60,"More than I can say out loud."],[85,"Almost there..."],[100,"∞ It doesn't fit on this slider."]];
$('lv').oninput=e=>{const v=+e.target.value;$('lt').textContent=[...msgs].reverse().find(m=>v>=m[0])[1];
  if(v===100){const r=e.target.getBoundingClientRect();for(let i=0;i<12;i++)hearts(r.left+Math.random()*r.width,r.top,2,24)}};

const g=$('garden'),veil=$('veil');let opened=new Set();
try{opened=new Set(JSON.parse(localStorage.getItem('lisi-opened')||'[]').filter(n=>n<reasons.length))}catch(e){}
const petals=[0,72,144,216,288].map(a=>`<ellipse class="p" cx="0" cy="-15" rx="9" ry="14" transform="rotate(${a})"/>`).join('');
reasons.forEach((_,i)=>{const b=document.createElement('button');b.className='f';b.setAttribute('aria-label','Open flower '+(i+1));
  b.style.cssText=`--c:${pc[i%5]};--r:${(i*37%24)-12}deg;--y:${(i*53%22)-8}px;--d:-${(i%9)*.6}s`;
  b.innerHTML=`<svg viewBox="-30 -30 60 60">${petals}<circle class="m" r="7"/></svg>`;
  if(opened.has(i))b.classList.add('open');b.onclick=()=>show(i,b);g.appendChild(b)});
function show(i,b){$('cn').textContent='Reason '+(i+1)+' of '+reasons.length;$('ct').textContent=reasons[i];
  veil.classList.add('on');$('cx').focus();b.classList.add('open');opened.add(i);
  try{localStorage.setItem('lisi-opened',JSON.stringify([...opened]))}catch(e){}upd()}
function upd(){$('bar').style.width=(opened.size/reasons.length*100)+'%';$('count').textContent=opened.size+' of '+reasons.length+' opened';
  $('end').classList.toggle('on',opened.size===reasons.length)}
$('cx').onclick=()=>veil.classList.remove('on');
veil.onclick=e=>{if(e.target===veil)veil.classList.remove('on')};
document.addEventListener('keydown',e=>{if(e.key==='Escape')veil.classList.remove('on')});
$('pick').onclick=()=>{const left=[...g.children].filter(b=>!b.classList.contains('open'));if(left.length)left[Math.random()*left.length|0].click()};
upd();

let caught=0,run=null;
$('start').onclick=()=>{caught=0;$('score').textContent='Caught: 0 / 10';clearInterval(run);
  run=setInterval(()=>{const a=$('arena'),t=document.createElement('button');t.className='t';t.textContent='💗';t.setAttribute('aria-label','Catch heart');
    t.style.cssText=`left:${Math.random()*(a.clientWidth-50)}px;top:${a.clientHeight}px;animation-duration:${3+Math.random()*2}s`;
    t.onclick=e=>{e.stopPropagation();t.remove();caught++;
      if(caught>=10){clearInterval(run);$('score').textContent=SECRET;for(let i=0;i<20;i++)hearts(innerWidth/2,innerHeight/2,2,26)}
      else $('score').textContent='Caught: '+caught+' / 10'};
    a.appendChild(t);setTimeout(()=>t.remove(),5200)},550)};

let typed=false;new IntersectionObserver(([en],ob)=>{if(en.isIntersecting&&!typed){typed=true;ob.disconnect();let i=0;
  const el=$('lt2');(function w(){el.innerHTML=LETTER.slice(0,i).replace(/\n/g,'<br>');if(i++<LETTER.length)setTimeout(w,28);else $('sg').style.opacity=1})()}},{threshold:.5}).observe($('lt2'));

const no=$('no');function dodge(e){e.preventDefault();no.style.position='fixed';
  no.style.left=Math.random()*(innerWidth-110)+'px';no.style.top=Math.random()*(innerHeight-60)+'px'}
no.addEventListener('pointerenter',dodge);no.addEventListener('pointerdown',dodge);
$('yesb').onclick=()=>{$('yes').classList.add('on');for(let i=0;i<60;i++)setTimeout(()=>hearts(Math.random()*innerWidth,innerHeight*.8,2,28),i*50)};
$('yx').onclick=()=>$('yes').classList.remove('on');