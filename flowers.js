// ---- flower garden ----
const garden = document.getElementById('garden');
const petalColors = [
  ['#f2b6cb','#e8a0b4'],
  ['#e3c9ef','#c9a3dd'],
  ['#fbdde6','#f0aac0'],
  ['#f9e2c2','#f0c27b']
];

const positions = [10, 27, 44, 56, 73, 90];
positions.forEach((leftPct, i) => {
  const height = 90 + Math.random()*60;
  const dur = (4 + Math.random()*2);

  // one wrapper = stem + leaf + flower, so they all sway together as a single piece
  const plant = document.createElement('div');
  plant.className = 'plant';
  plant.style.left = leftPct + '%';
  plant.style.height = height + 'px';
  plant.style.setProperty('--dur', dur + 's');

  const stem = document.createElement('div');
  stem.className = 'stem';
  plant.appendChild(stem);

  // little leaf on the stem
  const leaf = document.createElement('div');
  leaf.className = 'leaf';
  leaf.style.left = '4px';
  leaf.style.bottom = (height*0.35) + 'px';
  leaf.style.transform = 'rotate(' + (i%2===0? -20:20) + 'deg)';
  plant.appendChild(leaf);

  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.setProperty('--delay', (i*0.3) + 's');

  const [c1,c2] = petalColors[i % petalColors.length];
  const petalCount = 6;
  for(let p=0; p<petalCount; p++){
    const petal = document.createElement('div');
    petal.className = 'petal';
    const angle = (360/petalCount)*p;
    petal.style.background = `linear-gradient(180deg, ${c1}, ${c2})`;
    petal.style.transform = `translate(-50%,-100%) rotate(${angle}deg)`;
    flower.appendChild(petal);
  }
  const center = document.createElement('div');
  center.className = 'center';
  flower.appendChild(center);

  plant.appendChild(flower);
  garden.appendChild(plant);
});

// ---- floating hearts ----
const heartSymbols = ['♥','❤'];
for(let i=0;i<14;i++){
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = heartSymbols[Math.floor(Math.random()*heartSymbols.length)];
  h.style.left = Math.random()*100 + 'vw';
  h.style.setProperty('--drift', (Math.random()*80-40)+'px');
  h.style.animationDuration = (10 + Math.random()*10) + 's';
  h.style.animationDelay = (Math.random()*10) + 's';
  h.style.fontSize = (14 + Math.random()*14) + 'px';
  document.body.appendChild(h);
}

// ---- live timer (placeholder year: uses this year, or last year if date hasn't happened yet) ----
const start = new Date(2026, 7, 3); // August 3, 2026

function updateTimer(){
  const now = new Date();
  let diff = Math.max(0, now - start);
  const totalSeconds = Math.floor(diff/1000);
  const days = Math.floor(totalSeconds/86400);
  const hours = Math.floor((totalSeconds%86400)/3600);
  const mins = Math.floor((totalSeconds%3600)/60);
  const secs = totalSeconds%60;

  document.getElementById('d').textContent = days;
  document.getElementById('h').textContent = hours;
  document.getElementById('m').textContent = mins;
  document.getElementById('s').textContent = secs;
}
updateTimer();
setInterval(updateTimer, 1000);