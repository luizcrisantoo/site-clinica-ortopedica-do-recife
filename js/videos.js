(function(){
 var PL=[{"src": "assets/videos/coluna/coluna-1.mp4", "poster": "assets/videos/coluna/coluna-1.jpg", "grupo": "Coluna"}, {"src": "assets/videos/coluna/coluna-2.mp4", "poster": "assets/videos/coluna/coluna-2.jpg", "grupo": "Coluna"}, {"src": "assets/videos/coluna/coluna-3.mp4", "poster": "assets/videos/coluna/coluna-3.jpg", "grupo": "Coluna"}, {"src": "assets/videos/coluna/coluna-4.mp4", "poster": "assets/videos/coluna/coluna-4.jpg", "grupo": "Coluna"}, {"src": "assets/videos/coluna/coluna-5.mp4", "poster": "assets/videos/coluna/coluna-5.jpg", "grupo": "Coluna"}, {"src": "assets/videos/joelho/joelho-1.mp4", "poster": "assets/videos/joelho/joelho-1.jpg", "grupo": "Joelho"}, {"src": "assets/videos/joelho/joelho-2.mp4", "poster": "assets/videos/joelho/joelho-2.jpg", "grupo": "Joelho"}, {"src": "assets/videos/joelho/joelho-3.mp4", "poster": "assets/videos/joelho/joelho-3.jpg", "grupo": "Joelho"}, {"src": "assets/videos/mao-punho/mao-punho-1.mp4", "poster": "assets/videos/mao-punho/mao-punho-1.jpg", "grupo": "Mão e Punho"}, {"src": "assets/videos/mao-punho/mao-punho-2.mp4", "poster": "assets/videos/mao-punho/mao-punho-2.jpg", "grupo": "Mão e Punho"}, {"src": "assets/videos/mao-punho/mao-punho-3.mp4", "poster": "assets/videos/mao-punho/mao-punho-3.jpg", "grupo": "Mão e Punho"}, {"src": "assets/videos/mao-punho/mao-punho-4.mp4", "poster": "assets/videos/mao-punho/mao-punho-4.jpg", "grupo": "Mão e Punho"}, {"src": "assets/videos/ombro-cotovelo/ombro-cotovelo-1.mp4", "poster": "assets/videos/ombro-cotovelo/ombro-cotovelo-1.jpg", "grupo": "Ombro e Cotovelo"}, {"src": "assets/videos/ombro-cotovelo/ombro-cotovelo-2.mp4", "poster": "assets/videos/ombro-cotovelo/ombro-cotovelo-2.jpg", "grupo": "Ombro e Cotovelo"}, {"src": "assets/videos/ombro-cotovelo/ombro-cotovelo-3.mp4", "poster": "assets/videos/ombro-cotovelo/ombro-cotovelo-3.jpg", "grupo": "Ombro e Cotovelo"}, {"src": "assets/videos/ombro-cotovelo/ombro-cotovelo-4.mp4", "poster": "assets/videos/ombro-cotovelo/ombro-cotovelo-4.jpg", "grupo": "Ombro e Cotovelo"}, {"src": "assets/videos/ombro-cotovelo/ombro-cotovelo-5.mp4", "poster": "assets/videos/ombro-cotovelo/ombro-cotovelo-5.jpg", "grupo": "Ombro e Cotovelo"}, {"src": "assets/videos/ombro-cotovelo/ombro-cotovelo-6.mp4", "poster": "assets/videos/ombro-cotovelo/ombro-cotovelo-6.jpg", "grupo": "Ombro e Cotovelo"}, {"src": "assets/videos/ombro-cotovelo/ombro-cotovelo-7.mp4", "poster": "assets/videos/ombro-cotovelo/ombro-cotovelo-7.jpg", "grupo": "Ombro e Cotovelo"}, {"src": "assets/videos/ombro-cotovelo/ombro-cotovelo-8.mp4", "poster": "assets/videos/ombro-cotovelo/ombro-cotovelo-8.jpg", "grupo": "Ombro e Cotovelo"}, {"src": "assets/videos/ombro-cotovelo/ombro-cotovelo-9.mp4", "poster": "assets/videos/ombro-cotovelo/ombro-cotovelo-9.jpg", "grupo": "Ombro e Cotovelo"}, {"src": "assets/videos/ombro-cotovelo/ombro-cotovelo-10.mp4", "poster": "assets/videos/ombro-cotovelo/ombro-cotovelo-10.jpg", "grupo": "Ombro e Cotovelo"}, {"src": "assets/videos/ombro-cotovelo/ombro-cotovelo-11.mp4", "poster": "assets/videos/ombro-cotovelo/ombro-cotovelo-11.jpg", "grupo": "Ombro e Cotovelo"}, {"src": "assets/videos/pe-tornozelo/pe-tornozelo-1.mp4", "poster": "assets/videos/pe-tornozelo/pe-tornozelo-1.jpg", "grupo": "Pé e Tornozelo"}, {"src": "assets/videos/geral/geral-1.mp4", "poster": "assets/videos/geral/geral-1.jpg", "grupo": "Geral"}, {"src": "assets/videos/geral/geral-2.mp4", "poster": "assets/videos/geral/geral-2.jpg", "grupo": "Geral"}, {"src": "assets/videos/geral/geral-3.mp4", "poster": "assets/videos/geral/geral-3.jpg", "grupo": "Geral"}, {"src": "assets/videos/geral/geral-4.mp4", "poster": "assets/videos/geral/geral-4.jpg", "grupo": "Geral"}];
 var lb=document.getElementById('vlb'),lbv=document.getElementById('vlbVideo'),cur=0;
 function openLB(i){cur=(i+PL.length)%PL.length;lbv.src=PL[cur].src;lbv.poster=PL[cur].poster;lb.hidden=false;document.body.style.overflow='hidden';lbv.currentTime=0;lbv.play().catch(function(){});}
 function closeLB(){try{lbv.pause();}catch(e){}lbv.removeAttribute('src');lbv.load();lb.hidden=true;document.body.style.overflow='';}
 [].forEach.call(document.querySelectorAll('.vcard'),function(c){c.addEventListener('click',function(){openLB(+c.dataset.i);});});
 document.getElementById('vlbClose').addEventListener('click',closeLB);
 document.getElementById('vlbPrev').addEventListener('click',function(){openLB(cur-1);});
 document.getElementById('vlbNext').addEventListener('click',function(){openLB(cur+1);});
 lb.addEventListener('click',function(e){if(e.target===lb)closeLB();});
 var tv=document.getElementById('vtv'),tvbg=document.getElementById('vtvBg'),tvstart=document.getElementById('vtvStart'),
     layers=[document.getElementById('vtvVideoA'),document.getElementById('vtvVideoB')],
     tcur=0,ti=0,trans=false,soundOn=true,FADE=0.55;
 function keepAwake(){if('wakeLock'in navigator){navigator.wakeLock.request('screen').catch(function(){});}}
 function preloadNextTV(){var nl=layers[1-tcur],ni=(ti+1)%PL.length;if(nl.getAttribute('data-i')!==String(ni)){nl.src=PL[ni].src;nl.setAttribute('data-i',ni);nl.load();}}
 function advanceTV(){
   if(trans)return;trans=true;
   var nl=layers[1-tcur],old=layers[tcur],ni=(ti+1)%PL.length;
   if(nl.getAttribute('data-i')!==String(ni)){nl.src=PL[ni].src;nl.setAttribute('data-i',ni);}
   try{nl.currentTime=0;}catch(e){}nl.muted=!soundOn;
   var p=nl.play();
   (p&&p.then?p:Promise.resolve()).then(function(){
     tvbg.style.backgroundImage='url("'+PL[ni].poster+'")';
     nl.classList.add('show');old.classList.remove('show');
     if(soundOn){nl.muted=false;old.muted=true;}
     tcur=1-tcur;ti=ni;
     setTimeout(function(){try{old.pause();old.currentTime=0;}catch(e){}trans=false;preloadNextTV();},FADE*1000+250);
   }).catch(function(){trans=false;setTimeout(advanceTV,400);});
 }
 layers.forEach(function(v){
   v.muted=true;
   v.addEventListener('timeupdate',function(){if(!trans&&v.classList.contains('show')&&v.duration&&v.currentTime>=v.duration-FADE)advanceTV();});
   v.addEventListener('ended',function(){if(v.classList.contains('show'))advanceTV();});
   v.addEventListener('error',function(){if(v.classList.contains('show'))advanceTV();});
 });
 function openTV(){
   tv.hidden=false;document.body.style.overflow='hidden';
   if(tv.requestFullscreen){tv.requestFullscreen().catch(function(){});}
   ti=0;tcur=0;soundOn=true;
   var a=layers[0];layers[1].classList.remove('show');a.classList.remove('show');
   a.src=PL[0].src;a.setAttribute('data-i',0);a.muted=false;try{a.currentTime=0;}catch(e){}
   tvbg.style.backgroundImage='url("'+PL[0].poster+'")';
   var p=a.play();
   (p&&p.then?p:Promise.resolve()).then(function(){a.classList.add('show');tvstart.hidden=true;preloadNextTV();keepAwake();})
     .catch(function(){soundOn=false;a.muted=true;a.play().then(function(){a.classList.add('show');tvstart.hidden=false;preloadNextTV();}).catch(function(){tvstart.hidden=false;});});
 }
 function startSound(){soundOn=true;var v=layers[tcur];v.muted=false;var p=v.play();if(p&&p.catch)p.catch(function(){});tvstart.hidden=true;keepAwake();}
 function closeTV(){layers.forEach(function(v){try{v.pause();}catch(e){}v.removeAttribute('src');v.classList.remove('show');try{v.load();}catch(e){}});tv.hidden=true;document.body.style.overflow='';if(document.fullscreenElement){document.exitFullscreen().catch(function(){});}}
 document.getElementById('tvBtn').addEventListener('click',openTV);
 document.getElementById('vtvStartBtn').addEventListener('click',startSound);
 document.getElementById('vtvExit').addEventListener('click',closeTV);
 document.addEventListener('keydown',function(e){if(e.key==='Escape'){if(!lb.hidden)closeLB();else if(!tv.hidden)closeTV();}else if(!lb.hidden&&e.key==='ArrowRight')openLB(cur+1);else if(!lb.hidden&&e.key==='ArrowLeft')openLB(cur-1);});
 document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible'&&!tv.hidden)keepAwake();});
})();
