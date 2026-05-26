/* ── STARS ── */
(function(){
  const c=document.getElementById('stars-canvas');
  if(!c)return;
  const ctx=c.getContext('2d');
  let stars=[],W,H;
  function resize(){
    W=c.width=window.innerWidth;
    H=c.height=window.innerHeight;
  }
  function init(){
    stars=[];
    const n=Math.min(Math.floor(W*H/5500),300);
    for(let i=0;i<n;i++){
      stars.push({
        x:Math.random()*W,y:Math.random()*H,
        r:Math.random()*1.1+.15,
        phase:Math.random()*Math.PI*2,
        spd:Math.random()*.35+.1,
        col:Math.random()>.9?'#7eb8f7':Math.random()>.8?'#a78bfa':'#c8d0f0'
      });
    }
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    const t=Date.now()*.001;
    for(const s of stars){
      const a=.1+.4*(0.5+0.5*Math.sin(t*s.spd+s.phase));
      ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=s.col;ctx.globalAlpha=a;ctx.fill();
    }
    ctx.globalAlpha=1;
    requestAnimationFrame(draw);
  }
  resize();init();draw();
  window.addEventListener('resize',()=>{resize();init();});
})();

/* ── NAV ── */
(function(){
  const burger=document.querySelector('.nav-burger');
  const menu=document.querySelector('.nav-menu');
  if(!burger||!menu)return;
  burger.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    burger.classList.toggle('open',open);
    document.body.style.overflow=open?'hidden':'';
  });
  menu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click',()=>{
      menu.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow='';
    });
  });
  document.addEventListener('click',e=>{
    if(!burger.contains(e.target)&&!menu.contains(e.target)){
      menu.classList.remove('open');burger.classList.remove('open');
      document.body.style.overflow='';
    }
  });
})();

/* ── ACTIVE LINK ── */
(function(){
  const pg=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a=>{
    if(a.getAttribute('href')===pg)a.classList.add('active');
  });
})();

/* ── REVEAL ── */
(function(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
  },{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
})();

/* ── FILTERS ── */
window.initFilters=function(){
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const v=btn.dataset.filter;
      document.querySelectorAll('[data-tags]').forEach(card=>{
        card.style.display=(v==='all'||card.dataset.tags.includes(v))?'':'none';
      });
    });
  });
};
