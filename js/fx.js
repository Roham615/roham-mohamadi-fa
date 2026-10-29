(function(){
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const now=$('#now');
if(now){
  const half=['زیست‌شناسی','برنامه‌نویسی','دندان‌پزشکی','ژنتیک','کنجکاوی','تهران'].map(w=>`<span>${w}</span><span>✦</span>`).join('');
  const m=document.createElement('div');m.className='marquee';m.setAttribute('aria-hidden','true');
  m.innerHTML=`<div class="marquee-track">${half+half+half+half}</div>`;
  now.before(m);
}
$$('.specimen-card,.achievement-card,.timeline-item,.skill-row').forEach(el=>el.addEventListener('pointermove',e=>{
  const r=el.getBoundingClientRect();el.style.setProperty('--mx',(e.clientX-r.left)+'px');el.style.setProperty('--my',(e.clientY-r.top)+'px');
}));
const fa=n=>String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
const cio=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;cio.unobserve(e.target);
  const sp=$('.skill-bar span',e.target),t=parseInt(getComputedStyle(sp).getPropertyValue('--level'))||0;
  const p=document.createElement('b');p.className='pct';e.target.append(p);
  const t0=performance.now();(function f(n){const k=Math.min((n-t0)/1600,1);p.textContent=fa(Math.round(t*(1-Math.pow(1-k,3))))+'٪';if(k<1)requestAnimationFrame(f)})(t0);
}),{threshold:.5});
$$('.skill-row').forEach(r=>cio.observe(r));
if(!matchMedia('(pointer:coarse)').matches)$$('.btn,.contact-email').forEach(b=>{
  b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`});
  b.addEventListener('pointerleave',()=>b.style.transform='');
});
const links=$$('.nav-links a[href^="#"]');
const nio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
links.forEach(a=>{const s=$(a.getAttribute('href'));if(s)nio.observe(s)});
})();
