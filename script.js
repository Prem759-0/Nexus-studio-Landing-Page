@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&family=Exo+2:ital,wght@0,200;0,400;0,700;1,200&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#040409;--panel:#08080f;--neon:#00f0c8;--neon2:#ff2d78;--neon3:#7b2fff;
  --text:#d4d8e8;--muted:#4a5068;--border:rgba(0,240,200,.15);
  --border2:rgba(255,45,120,.12);
}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:'Rajdhani',sans-serif;overflow-x:hidden;cursor:none}
 
/* SCANLINE overlay */
body::after{content:'';position:fixed;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.03) 2px,rgba(0,0,0,.03) 4px);pointer-events:none;z-index:900}
 
/* CURSOR */
#cur{position:fixed;width:4px;height:20px;background:var(--neon);pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:transform .08s,height .2s,background .2s;box-shadow:0 0 8px var(--neon)}
#cur-h{position:fixed;width:20px;height:4px;background:var(--neon);pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:transform .08s,width .2s;box-shadow:0 0 8px var(--neon)}
#cur-ring{position:fixed;width:28px;height:28px;border:1px solid rgba(0,240,200,.5);pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:transform .14s ease,width .2s,height .2s}
body:has(a:hover) #cur,body:has(button:hover) #cur{height:36px;background:var(--neon2);box-shadow:0 0 12px var(--neon2)}
body:has(a:hover) #cur-h,body:has(button:hover) #cur-h{width:36px;background:var(--neon2)}
body:has(a:hover) #cur-ring,body:has(button:hover) #cur-ring{width:50px;height:50px;border-color:var(--neon2)}
 
/* HUD corners */
.hud-corner{position:absolute;width:14px;height:14px;pointer-events:none}
.hud-corner.tl{top:0;left:0;border-top:1px solid var(--neon);border-left:1px solid var(--neon)}
.hud-corner.tr{top:0;right:0;border-top:1px solid var(--neon);border-right:1px solid var(--neon)}
.hud-corner.bl{bottom:0;left:0;border-bottom:1px solid var(--neon);border-left:1px solid var(--neon)}
.hud-corner.br{bottom:0;right:0;border-bottom:1px solid var(--neon);border-right:1px solid var(--neon)}
 
/* NAV */
nav{position:fixed;inset:0 0 auto;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.2rem 4vw;background:rgba(4,4,9,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border)}
.nav-logo{font-family:'Share Tech Mono',monospace;font-size:1rem;letter-spacing:.15em;color:var(--neon);text-decoration:none;text-shadow:0 0 20px rgba(0,240,200,.5)}
.nav-logo span{color:var(--text)}
.nav-menu{display:flex;gap:2rem;list-style:none}
.nav-menu a{font-size:.75rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:color .2s}
.nav-menu a:hover{color:var(--neon)}
.nav-status{display:flex;align-items:center;gap:.6rem;font-family:'Share Tech Mono',monospace;font-size:.62rem;letter-spacing:.1em;color:var(--neon)}
.status-dot{width:6px;height:6px;background:var(--neon);border-radius:50%;animation:pulse 2s ease-in-out infinite;box-shadow:0 0 8px var(--neon)}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.4)}}
@media(max-width:700px){.nav-menu{display:none}}
 
/* HERO */
#hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:0 4vw 6vh;position:relative;overflow:hidden}
#particleCanvas{position:absolute;inset:0;width:100%;height:100%}
.hero-content{position:relative;z-index:2;max-width:900px}
.hero-sys{font-family:'Share Tech Mono',monospace;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:var(--neon);margin-bottom:2rem;display:flex;align-items:center;gap:1rem}
.hero-sys::before{content:'> SYS_BOOT: NEXUS_v4.2.1';color:rgba(0,240,200,.5)}
.hero-h1{font-family:'Exo 2',sans-serif;font-size:clamp(52px,9vw,132px);font-weight:700;line-height:.9;letter-spacing:-.03em;margin-bottom:1.5rem}
.hero-h1 .line2{-webkit-text-stroke:1px var(--neon);color:transparent;display:block;text-shadow:none}
.hero-h1 .line3{color:var(--neon2);display:block;text-shadow:0 0 40px rgba(255,45,120,.4)}
.hero-row{display:flex;align-items:flex-end;gap:3vw;flex-wrap:wrap}
.hero-p{font-size:1rem;font-weight:400;line-height:1.65;color:rgba(212,216,232,.55);max-width:42ch}
.hero-btns{display:flex;gap:1rem;flex-wrap:wrap;margin-top:1.5rem}
 
/* BUTTONS */
.btn-neon{display:inline-flex;align-items:center;gap:.7rem;font-family:'Share Tech Mono',monospace;font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:var(--neon);border:1px solid var(--neon);padding:.85rem 2rem;text-decoration:none;cursor:none;position:relative;overflow:hidden;transition:color .2s;text-shadow:0 0 10px rgba(0,240,200,.4)}
.btn-neon::before{content:'';position:absolute;inset:0;background:var(--neon);transform:translateX(-101%);transition:transform .3s cubic-bezier(.77,0,.175,1)}
.btn-neon:hover{color:var(--bg)}
.btn-neon:hover::before{transform:translateX(0)}
.btn-neon span{position:relative;z-index:1}
.btn-ghost-neon{display:inline-flex;align-items:center;gap:.7rem;font-family:'Share Tech Mono',monospace;font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);border:1px solid rgba(74,80,104,.4);padding:.85rem 2rem;text-decoration:none;cursor:none;transition:color .2s,border-color .2s}
.btn-ghost-neon:hover{color:var(--text);border-color:rgba(212,216,232,.3)}
 
/* STATS BAR */
.stats-bar{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--border);border-left:1px solid var(--border);margin-top:3rem;position:relative;z-index:2}
.stat{border-right:1px solid var(--border);border-bottom:1px solid var(--border);padding:1.5rem 2rem;position:relative;overflow:hidden}
.stat::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,240,200,.04),transparent);opacity:0;transition:opacity .3s}
.stat:hover::before{opacity:1}
.stat-n{font-family:'Share Tech Mono',monospace;font-size:2rem;font-weight:400;color:var(--neon);text-shadow:0 0 20px rgba(0,240,200,.4);line-height:1}
.stat-l{font-size:.65rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);margin-top:.3rem}
@media(max-width:600px){.stats-bar{grid-template-columns:1fr 1fr}}
 
/* WORKS */
#works{padding:6rem 4vw}
.section-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:3rem;flex-wrap:wrap;gap:1rem}
.section-label{font-family:'Share Tech Mono',monospace;font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:var(--neon)}
.section-title{font-family:'Exo 2',sans-serif;font-size:clamp(28px,4vw,52px);font-weight:700;letter-spacing:-.02em;line-height:1}
.section-link{font-family:'Share Tech Mono',monospace;font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:color .2s}
.section-link:hover{color:var(--neon)}
 
.works-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--border)}
@media(max-width:600px){.works-grid{grid-template-columns:1fr}}
.work-item{background:var(--panel);position:relative;overflow:hidden;cursor:none}
.work-item:first-child{grid-column:span 2}
@media(max-width:600px){.work-item:first-child{grid-column:span 1}}
.work-canvas{width:100%;display:block;transition:transform .5s ease}
.work-item:hover .work-canvas{transform:scale(1.04)}
.work-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(4,4,9,.95) 0%,transparent 55%);display:flex;flex-direction:column;justify-content:flex-end;padding:2rem;transform:translateY(8px);transition:transform .3s}
.work-item:hover .work-overlay{transform:translateY(0)}
.work-index{font-family:'Share Tech Mono',monospace;font-size:.55rem;letter-spacing:.2em;color:var(--neon);margin-bottom:.4rem}
.work-title{font-family:'Exo 2',sans-serif;font-size:clamp(16px,2vw,24px);font-weight:700;letter-spacing:-.01em;margin-bottom:.3rem}
.work-tech{font-family:'Share Tech Mono',monospace;font-size:.55rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.work-link{position:absolute;top:1.2rem;right:1.2rem;width:36px;height:36px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:.9rem;color:var(--neon);opacity:0;transform:translate(8px,-8px);transition:opacity .3s,transform .3s}
.work-item:hover .work-link{opacity:1;transform:translate(0,0)}
 
/* SERVICES */
#services{padding:6rem 4vw;border-top:1px solid var(--border)}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);margin-top:3rem}
@media(max-width:900px){.services-grid{grid-template-columns:1fr 1fr}}
@media(max-width:500px){.services-grid{grid-template-columns:1fr}}
.svc-card{background:var(--panel);padding:2.5rem 2rem;position:relative;overflow:hidden;transition:background .3s}
.svc-card:hover{background:#0c0c18}
.svc-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(to right,var(--neon),var(--neon3));transform:scaleX(0);transform-origin:left;transition:transform .4s cubic-bezier(.77,0,.175,1)}
.svc-card:hover::after{transform:scaleX(1)}
.svc-num{font-family:'Share Tech Mono',monospace;font-size:.6rem;letter-spacing:.2em;color:var(--muted);margin-bottom:1.5rem}
.svc-icon{font-size:1.6rem;margin-bottom:1rem;filter:drop-shadow(0 0 8px rgba(0,240,200,.4))}
.svc-title{font-family:'Exo 2',sans-serif;font-size:1.15rem;font-weight:700;letter-spacing:-.01em;margin-bottom:.6rem;transition:color .2s}
.svc-card:hover .svc-title{color:var(--neon)}
.svc-desc{font-size:.85rem;line-height:1.7;color:var(--muted);font-weight:400}
.svc-tags{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:1.2rem}
.svc-tag{font-family:'Share Tech Mono',monospace;font-size:.52rem;letter-spacing:.12em;text-transform:uppercase;border:1px solid var(--border);color:var(--muted);padding:.2rem .6rem}
 
/* TERMINAL */
#terminal-section{padding:6rem 4vw;border-top:1px solid var(--border)}
.terminal{background:var(--panel);border:1px solid var(--border);max-width:680px;position:relative}
.terminal-bar{padding:.6rem 1rem;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:.6rem}
.t-dot{width:10px;height:10px;border-radius:50%}
.t-title{font-family:'Share Tech Mono',monospace;font-size:.6rem;letter-spacing:.15em;color:var(--muted);margin-left:.5rem}
.terminal-body{padding:1.5rem;font-family:'Share Tech Mono',monospace;font-size:.78rem;line-height:2;min-height:200px}
.t-line{display:block;color:var(--muted)}
.t-line .prompt{color:var(--neon)}
.t-line .cmd{color:var(--text)}
.t-line .out{color:rgba(212,216,232,.5)}
.t-line .ok{color:var(--neon)}
.t-line .err{color:var(--neon2)}
.t-cursor{display:inline-block;width:7px;height:13px;background:var(--neon);animation:blink .8s step-end infinite;vertical-align:middle}
@keyframes blink{50%{opacity:0}}
.hud-corners-wrap{position:absolute;inset:-1px;pointer-events:none}
 
/* CTA */
#cta{padding:8rem 4vw;border-top:1px solid var(--border);text-align:center;position:relative;overflow:hidden}
#ctaCanvas2{position:absolute;inset:0;width:100%;height:100%}
.cta-inner{position:relative;z-index:2;max-width:700px;margin:0 auto}
.cta-pre{font-family:'Share Tech Mono',monospace;font-size:.65rem;letter-spacing:.25em;text-transform:uppercase;color:var(--neon);margin-bottom:1.5rem}
.cta-h{font-family:'Exo 2',sans-serif;font-size:clamp(36px,6vw,80px);font-weight:700;line-height:.95;letter-spacing:-.03em;margin-bottom:1.5rem}
.cta-h em{font-style:italic;font-weight:200;color:var(--neon);text-shadow:0 0 30px rgba(0,240,200,.4)}
.cta-sub{font-size:.9rem;color:var(--muted);margin-bottom:2.5rem}
 
/* FOOTER */
footer{border-top:1px solid var(--border);padding:3rem 4vw 2rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem}
.footer-logo{font-family:'Share Tech Mono',monospace;font-size:.85rem;letter-spacing:.15em;color:var(--neon)}
.footer-links{display:flex;gap:2rem}
.footer-links a{font-family:'Share Tech Mono',monospace;font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:color .2s}
.footer-links a:hover{color:var(--neon)}
.footer-copy{font-family:'Share Tech Mono',monospace;font-size:.6rem;letter-spacing:.1em;color:var(--muted)}
 
/* REVEAL */
.reveal{opacity:0;transform:translateY(20px);transition:opacity .8s ease,transform .8s ease}
.reveal.vis{opacity:1;transform:none}
