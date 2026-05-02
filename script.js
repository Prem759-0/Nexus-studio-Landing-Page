/* CURSOR */
const cur=document.getElementById('cur'),curH=document.getElementById('cur-h'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';curH.style.left=mx+'px';curH.style.top=my+'px'});
(function loop(){rx+=(mx-rx)*.15;ry+=(my-ry)*.15;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop)})();
 
/* PARTICLE HERO */
(function(){
  const c=document.getElementById('particleCanvas');
  const ctx=c.getContext('2d');
  let t=0,W,H,particles=[];
  function resize(){W=c.width=window.innerWidth;H=c.height=window.innerHeight;particles=Array.from({length:180},()=>makeP())}
  function makeP(){return{x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,life:Math.random(),maxLife:1,size:Math.random()*1.5+.3,color:Math.random()<.6?'0,240,200':'255,45,120'}}
  resize();window.addEventListener('resize',resize);
  let mouse={x:W/2,y:H/2};
  document.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY});
  function draw(){
    W=c.width;H=c.height;
    ctx.fillStyle='rgba(4,4,9,.18)';ctx.fillRect(0,0,W,H);
    particles.forEach((p,i)=>{
      p.x+=p.vx;p.y+=p.vy;p.life-=.003;
      // Mouse attraction
      const dx=mouse.x-p.x,dy=mouse.y-p.y,dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<200){p.vx+=dx/dist*.015;p.vy+=dy/dist*.015}
      p.vx*=.998;p.vy*=.998;
      if(p.life<=0||p.x<-10||p.x>W+10||p.y<-10||p.y>H+10)particles[i]=makeP();
      ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
      const a=Math.max(0,p.life)*.7;
      ctx.fillStyle=`rgba(${p.color},${a})`;ctx.fill();
      // glow
      ctx.beginPath();ctx.arc(p.x,p.y,p.size*3,0,Math.PI*2);
      ctx.fillStyle=`rgba(${p.color},${a*.15})`;ctx.fill();
    });
    // Connect close particles
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<90){
          ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);
          const a=(1-d/90)*.15;ctx.strokeStyle=`rgba(0,240,200,${a})`;ctx.lineWidth=.4;ctx.stroke();
        }
      }
    }
    t+=.016;requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();
 
/* CTA Canvas */
(function(){
  const c=document.getElementById('ctaCanvas2');if(!c)return;
  const ctx=c.getContext('2d');let t=0;
  function r(){c.width=c.offsetWidth;c.height=c.offsetHeight||500}r();new ResizeObserver(r).observe(c);
  function d(){
    const w=c.width,h=c.height;
    ctx.fillStyle='rgba(4,4,9,.15)';ctx.fillRect(0,0,w,h);
    for(let i=0;i<6;i++){
      const x=w/2+Math.cos(t*.3+i)*w*.3;
      const y=h/2+Math.sin(t*.2+i*1.4)*h*.3;
      const r2=Math.min(w,h)*.25;
      const grd=ctx.createRadialGradient(x,y,0,x,y,r2);
      const colors=['0,240,200','123,47,255','255,45,120'];
      grd.addColorStop(0,`rgba(${colors[i%3]},.08)`);grd.addColorStop(1,'transparent');
      ctx.fillStyle=grd;ctx.fillRect(0,0,w,h);
    }
    t+=.008;requestAnimationFrame(d);
  }
  requestAnimationFrame(d);
})();
 
/* WORKS */
const worksData=[
  {idx:'01',title:'VOID RUNNER XR',tech:'WebXR · Three.js · Rapier Physics',color:'0,240,200'},
  {idx:'02',title:'NEON ODYSSEY',tech:'WebGL · GLSL · Web Audio API',color:'255,45,120'},
  {idx:'03',title:'FRACTAL MIND',tech:'Canvas API · Generative Art',color:'123,47,255'},
];
document.getElementById('worksGrid').innerHTML=worksData.map((w,i)=>`
<div class="work-item reveal" style="transition-delay:${i*.12}s">
  <canvas class="work-canvas" id="wc${i}" height="${i===0?420:240}"></canvas>
  <div class="work-overlay">
    <div class="work-index">[ ${w.idx} ]</div>
    <div class="work-title">${w.title}</div>
    <div class="work-tech">${w.tech}</div>
  </div>
  <div class="work-link">↗</div>
</div>`).join('');
 
worksData.forEach((w,i)=>{
  const c=document.getElementById('wc'+i);if(!c)return;
  const ctx=c.getContext('2d');let t=Math.random()*100;
  const color=w.color;
  function r(){c.width=c.offsetWidth;c.height=c.offsetHeight||240}r();new ResizeObserver(r).observe(c);
  function d(){
    const cw=c.width,ch=c.height;
    ctx.fillStyle=`rgba(4,4,9,${i===0?.08:.12})`;ctx.fillRect(0,0,cw,ch);
    if(i===0){
      // Ring system
      for(let r=0;r<5;r++){
        const radius=Math.min(cw,ch)*.08*(r+1);
        const angle=t*.3*(r%2===0?1:-1);
        ctx.beginPath();
        ctx.arc(cw/2,ch/2,radius,0,Math.PI*2);
        ctx.strokeStyle=`rgba(${color},${(.5-r*.08)})`;ctx.lineWidth=1;ctx.stroke();
        const px=cw/2+Math.cos(angle)*radius,py=ch/2+Math.sin(angle)*radius;
        ctx.beginPath();ctx.arc(px,py,3,0,Math.PI*2);
        ctx.fillStyle=`rgba(${color},.9)`;ctx.fill();
      }
      // Grid overlay
      for(let x=0;x<cw;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,ch);ctx.strokeStyle='rgba(0,240,200,.04)';ctx.lineWidth=.5;ctx.stroke()}
      for(let y=0;y<ch;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(cw,y);ctx.strokeStyle='rgba(0,240,200,.04)';ctx.lineWidth=.5;ctx.stroke()}
    } else if(i===1){
      // Wave interference
      for(let x=0;x<cw;x+=3){
        const y1=ch/2+Math.sin(x*.02+t)*ch*.2;
        const y2=ch/2+Math.sin(x*.015-t*.7)*ch*.15;
        ctx.fillStyle=`rgba(${color},.5)`;
        ctx.fillRect(x,Math.min(y1,y2),2,Math.abs(y1-y2)||1);
      }
    } else {
      // Fractal-ish dots
      for(let f=0;f<3;f++){
        for(let a=0;a<Math.PI*2;a+=.3){
          const r=40+f*25+Math.sin(a*3+t)*.2*30;
          const x=cw/2+Math.cos(a+t*(f*.2+.1))*r;
          const y=ch/2+Math.sin(a+t*(f*.2+.1))*r*.7;
          ctx.beginPath();ctx.arc(x,y,1.5,0,Math.PI*2);
          ctx.fillStyle=`rgba(${color},${.3+f*.15})`;ctx.fill();
        }
      }
    }
    t+=.018;requestAnimationFrame(d);
  }
  requestAnimationFrame(d);
});
 
/* SERVICES */
const svcs=[
  {n:'01',icon:'◉',title:'Game Development',desc:'Browser-native game experiences with WebGL, physics engines, and multiplayer networking.',tags:['Three.js','Rapier','WebRTC']},
  {n:'02',icon:'⬡',title:'XR & Spatial Web',desc:'WebXR applications for headsets and AR-enabled devices — no app store required.',tags:['WebXR','WebGPU','Babylon']},
  {n:'03',icon:'✦',title:'Shader Art',desc:'Custom GLSL shaders, post-processing effects, and generative visual systems.',tags:['GLSL','WebGL','GPGPU']},
  {n:'04',icon:'▣',title:'Interactive Installs',desc:'Physical-digital installations with touch, motion, and sensor-based input systems.',tags:['Touch','OSC','CV']},
  {n:'05',icon:'◈',title:'Creative Web Dev',desc:'Production-grade frontend engineering where design meets code at the boundary.',tags:['React','Framer','GSAP']},
  {n:'06',icon:'◫',title:'Tech Consulting',desc:'Architecture audits, performance optimization, and WebGL pipeline reviews.',tags:['Audits','DevOps','CI/CD']},
];
document.getElementById('servicesGrid').innerHTML=svcs.map((s,i)=>`
<div class="svc-card reveal" style="transition-delay:${i*.07}s">
  <div class="svc-num">[ ${s.n} ]</div>
  <div class="svc-icon">${s.icon}</div>
  <div class="svc-title">${s.title}</div>
  <p class="svc-desc">${s.desc}</p>
  <div class="svc-tags">${s.tags.map(t=>`<span class="svc-tag">${t}</span>`).join('')}</div>
</div>`).join('');
 
/* TERMINAL */
const lines=[
  {type:'cmd',prompt:'nexus@studio:~$',cmd:' whoami'},
  {type:'out',out:'nexus-studio :: creative-technology-lab'},
  {type:'cmd',prompt:'nexus@studio:~$',cmd:' cat stack.json'},
  {type:'out',out:'{\n  "3d": ["Three.js","Babylon.js","WebGPU"],\n  "physics":["Rapier","Cannon-es"],\n  "shaders":["GLSL","WGSL"],\n  "frontend":["React","Svelte","Vanilla"],\n  "tools":["WebXR","WebRTC","WebSockets"]\n}'},
  {type:'ok',out:'✓ 47 packages loaded'},
  {type:'cmd',prompt:'nexus@studio:~$',cmd:' ping clients.dev'},
  {type:'out',out:'PING clients.dev (185.23.12.4): 4ms — ready to build ◉'},
];
const tb=document.getElementById('termBody');
let li=0;
function typeNextLine(){
  if(li>=lines.length){const cursor=document.createElement('span');cursor.className='t-cursor';tb.appendChild(cursor);return}
  const l=lines[li++];const span=document.createElement('span');span.className='t-line';
  if(l.type==='cmd')span.innerHTML=`<span class="prompt">${l.prompt}</span><span class="cmd">${l.cmd}</span>`;
  else if(l.type==='ok')span.innerHTML=`<span class="ok">${l.out}</span>`;
  else span.innerHTML=`<span class="out">${l.out}</span>`;
  tb.appendChild(span);tb.appendChild(document.createTextNode('\n'));
  setTimeout(typeNextLine,180+Math.random()*200);
}
setTimeout(typeNextLine,800);
 
/* COUNTERS */
const cobs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    const el=e.target,target=+el.dataset.count,start=performance.now();
    const dur=1600;
    const tick=now=>{const p=Math.min((now-start)/dur,1);const ease=1-Math.pow(1-p,3);el.textContent=Math.round(ease*target)+(el.dataset.count==='99'?'':'+');if(p<1)requestAnimationFrame(tick)};
    requestAnimationFrame(tick);cobs.unobserve(el);
  });
},{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>cobs.observe(el));
 
/* REVEAL */
const obs=new IntersectionObserver(e=>e.forEach(en=>{if(en.isIntersecting)en.target.classList.add('vis')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
