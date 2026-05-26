(function(){
  const pages=[
    {href:'index.html',label:'Home'},
    {href:'vision.html',label:'Vision'},
    {href:'leadership.html',label:'Leadership'},
    {href:'alliances.html',label:'Alliances'},
    {href:'info.html',label:'Info & Rules'},
    {href:'sellers.html',label:'RSS Sellers'},
    {href:'pilots.html',label:'Pilots'},
  ];
  const discord=(typeof SPACEBORN!=='undefined')?SPACEBORN.kingdom.discordLink:'https://discord.gg/y5XYSS6pvF';
  const cur=location.pathname.split('/').pop()||'index.html';
  const nav=document.getElementById('site-nav');
  if(!nav)return;
  nav.className='site-nav';
  nav.innerHTML=`
    <a href="index.html" class="nav-logo">Space<em>Born</em></a>
    <button class="nav-burger" aria-label="Menu"><span></span><span></span><span></span></button>
    <nav class="nav-menu">
      ${pages.map(p=>`<a href="${p.href}" ${cur===p.href?'class="active"':''}>${p.label}</a>`).join('')}
      <a href="${discord}" target="_blank" class="menu-discord">Join Discord</a>
    </nav>
  `;
})();
