// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
},{passive:true});

// Live KST clock
function tick(){
  const now = new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Seoul'}));
  const h=String(now.getHours()).padStart(2,'0');
  const m=String(now.getMinutes()).padStart(2,'0');
  const s=String(now.getSeconds()).padStart(2,'0');
  document.getElementById('clock').textContent=h+':'+m+':'+s;
}
tick(); setInterval(tick,1000);

// Scroll reveal — threshold:0 fires the moment ANY pixel enters view
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); }
  });
},{threshold:0, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach((el,i)=>{
  el.style.transitionDelay=(i%4*.1)+'s';
  obs.observe(el);
});

// Course tabs
document.querySelectorAll('.course-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.course-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.course-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + btn.dataset.panel).classList.add('active');
  });
});