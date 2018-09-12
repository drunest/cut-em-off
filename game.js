!function(){"use strict";var e=new class{constructor(){this.subscribers=[]}subscribe(e,t,r=!1){this.subscribers.push({message:e,callback:t,permanent:r})}reset(){this.subscribers=this.subscribers.filter(({permanent:e})=>e)}publish(e,t){this.subscribers.forEach(({message:r,callback:s})=>r===e&&s(t))}};const t=0,r=1,s=2,o=4,i=5,a=6,n=7,l=8,c=9,h=11;const d=new function(){let e,t,r,s,o,i,a,n,l,c,h,d;this._params=new function(){this.setSettings=function(e){for(let t=0;t<24;t++)this[String.fromCharCode(97+t)]=e[t]||0;this.c<.01&&(this.c=.01);const t=this.c+this.e;if(t<.18){const e=.18/t;this.c*=e,this.e*=e}}},this.reset=function(){const e=this._params;s=100/(e.f*e.f+.001),o=100/(e.g*e.g+.001),i=1-e.h*e.h*e.h*.01,a=-e.i*e.i*e.i*1e-6,e.a||(h=.5-e.n/2,d=5e-5*-e.o),n=e.l>0?1-e.l*e.l*.9:1+e.l*e.l*10,l=0,c=1==e.m?0:(1-e.m)*(1-e.m)*2e4+32},this.totalReset=function(){this.reset();const s=this._params;return e=0,t=s.c*s.c*1e5,r=s.e*s.e*1e5+10,e+t+r|0},this.synthWave=function(p,u){const m=this._params,g=1!=m.s||m.v;let b=m.v*m.v*.1,f=m.s*m.s*m.s*.1;const w=1!=m.s,y=m.x*m.x,v=m.g,x=m.q||m.r,k=m.r*m.r*m.r*.2;let T=m.q*m.q*(m.q<0?-1020:1020);const S=m.d,A=m.a;let M=e;const I=1/e,C=1/t,R=1/r;let E=5*(.01+f);E>.8&&(E=.8),E=1-E;let D,Y,L,P,X=!1,G=0,W=0,B=0,O=0,H=0,N=0,$=0,F=0;var U,V;const q=new Array(1024),z=new Array(32);for(var _=q.length;_--;)q[_]=0;for(_=z.length;_--;)z[_]=2*Math.random()-1;for(_=0;_<u;_++){if(X)return _;if(c&&++l>=c&&(c=0,s*=n),(s*=i+=a)>o&&(s=o,v>0&&(X=!0)),Y=s,(Y|=0)<8&&(Y=8),A||((h+=d)<0?h=0:h>.5&&(h=.5)),++W>M)switch(W=0,++G){case 1:M=t;break;case 2:M=r}switch(G){case 0:B=W*I;break;case 1:B=1+2*(1-W*C)*S;break;case 2:B=1-W*R;break;case 3:B=0,X=!0}x&&((L=0|(T+=k))<0?L=-L:L>1023&&(L=1023)),g&&((b*=3e-4)<1e-5?b=1e-5:b>.1&&(b=.1)),V=0;for(let e=8;e--;){if(++$>=Y&&($%=Y,3==A))for(let e=z.length;e--;)z[e]=2*Math.random()-1;switch(A){case 0:U=$/Y<h?.5:-.5;break;case 1:U=1-$/Y*2;break;case 2:U=(U=(P=(P=$/Y)>.5?6.28318531*(P-1):6.28318531*P)<0?1.27323954*P+.405284735*P*P:1.27323954*P-.405284735*P*P)<0?.225*(U*-U-U)+U:.225*(U*U-U)+U;break;case 3:U=z[Math.abs(32*$/Y|0)]}g&&(D=N,(f*=1e-4)<0?f=0:f>.1&&(f=.1),w?(H+=(U-N)*f,H*=E):(N=U,H=0),O+=(N+=H)-D,U=O*=1-b),x&&(q[F%1024]=U,U+=q[(F-L+1024)%1024],F++),V+=U}V*=.125*B*y,p[_]=V>=1?32767:V<=-1?-32768:32767*V|0}return u}};function p(e){d._params.setSettings(e);const t=d.totalReset(),r=new Uint8Array(4*((t+1)/2|0)+44);let s=2*d.synthWave(new Uint16Array(r.buffer,44),t);const o=new Uint32Array(r.buffer,0,44);o[0]=1179011410,o[1]=s+36,o[2]=1163280727,o[3]=544501094,o[4]=16,o[5]=65537,o[6]=44100,o[7]=88200,o[8]=1048578,o[9]=1635017060,o[10]=s,s+=44;let i=0,a="data:audio/wav;base64,";for(;i<s;i+=3){const e=r[i]<<16|r[i+1]<<8|r[i+2];a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>18]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>12&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>6&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[63&e]}return i-=s,a.slice(0,a.length-i)+"==".slice(0,i)}function u(){var e;this.sounds={},(e=this).add("infected",3,[[2,,.2916,,.2587,.9356,.3909,-.2493,,,,,,.3583,.1617,,,,1,,,.1217,,.5]]),e.add("drop-bomb",3,[[0,,.0641,.5296,.1228,.4195,,,,,,.3029,.6261,,,,,,1,,,,,.5]]),e.add("drop-ship",1,[[0,,.57,,.1398,.61,,-.26,.1,,,.02,,.3325,,,,,.9793,,,,,.5]]),e.add("explode",3,[[3,,.4,.91,.25,.21,,-.38,,,,,,,,,-.0403,-.186,1,,,,,.5]])}u.prototype.add=function(e,t,r){this.sounds[e]=[],r.forEach(function(r,s){this.sounds[e].push({tick:0,count:t,pool:[]});for(let o=0;o<t;o++){const t=new Audio;t.src=p(r),this.sounds[e][s].pool.push(t)}},this)},u.prototype.play=function(e){const t=this.sounds[e],r=t.length>1?t[Math.floor(Math.random()*t.length)]:t[0];r.pool[r.tick].play(),r.tick<r.count-1?r.tick++:r.tick=0};const m=new u;const g=800,b=600,f=1e3;var w=(e,{row:t,col:r})=>{const{x:s,y:o}=e.getXAndY({row:t,col:r});return{context:kontra.context,x:s,y:o,collisionRadius:30,fuseLength:100,status:y,shrapnel:[],explosionDuration:0,map:e,mapX:100*r,mapY:100*t,row:t,col:r,update(){({status:this.status,fuseLength:this.fuseLength,explosionDuration:this.explosionDuration,x:this.x,y:this.y}=j(this))},render(){x(this)}}};const y=0,v=2;var x=e=>{const{status:t,shrapnel:r}=e;switch(t){case y:W(e);break;case 1:r.forEach(e=>e.render())}},k=({col:e,row:t})=>({sx:100*e-g/2+50,sy:100*t-b/2+50});const T="N",S="E",A="S",M="W";var I=(e,{x:t,y:r},s)=>{const o=e.tileAtLayer("main",{x:t,y:r});if(!G(o)||!R[o].allowed.includes(s))return!1;const i=D(e,{x:t,y:r},s);return G(i)},C=(e,{x:t,y:r},s)=>{const o=e.tileAtLayer("main",{x:t,y:r});if(!G(o))throw new Error("dropped");const i=R[o].change[s]||s;if(I(e,{x:t,y:r},i))return i;const a=R[o].allowed.filter(s=>I(e,{x:t,y:r},s));switch(a.length){case 0:throw new Error("locked in");case 1:return a[0];default:return a[L(0,a.length-1)]}},R={1:{allowed:[A,S],change:{[T]:S,[M]:A}},2:{allowed:[M,A],change:{[T]:M,[S]:A}},3:{allowed:[T,A],change:{}},4:{allowed:[M,T,S],change:{[A]:T}},5:{allowed:[T,S,A],change:{[M]:S}},6:{allowed:[M,S,A],change:{[T]:A}},9:{allowed:[T,S],change:{[A]:S,[M]:T}},10:{allowed:[M,T],change:{[S]:T,[A]:M}},11:{allowed:[M,S],change:{}},12:{allowed:[T,S,A,M],change:{}},13:{allowed:[T,A,M],change:{[S]:M}},7:{allowed:[A],change:{[T]:A}},8:{allowed:[M],change:{[S]:M}},15:{allowed:[T],change:{[A]:T}},16:{allowed:[S],change:{[M]:S}}};const E=[];for(const[e,{allowed:t}]of Object.entries(R))t.length>2&&E.push(Number(e));var D=(e,{x:t,y:r},s)=>e.tileAtLayer("main",{x:s===S?t+100:s===M?t-100:t,y:s===T?r-100:s===A?r+100:r}),Y=e=>e*Math.PI/180,L=(e,t)=>{const r=Math.min(e,t),s=Math.max(e,t);return Math.floor(Math.random()*(s-r+1))+r},P=(e,t)=>{const r=[];for(let s=0;s<e.length;s++){const o=e[s];for(let e=0;e<t.length;e++){const s=t[e];X(o,s)&&r.push([o,s])}}return r},X=(e,t)=>{const r=e.x-t.x,s=e.y-t.y;return Math.sqrt(r*r+s*s)<e.collisionRadius+t.collisionRadius},G=e=>e>=1&&e<=16,W=e=>{const{context:t,x:r,y:s,fuseLength:o}=e;t.save(),t.translate(r,s),t.rotate(Y(-45)),t.lineWidth=3,t.strokeStyle="#52638a",t.fillStyle="#2b3653",t.beginPath(),t.moveTo(23,-10),t.lineTo(40,-10),t.lineTo(40,10),t.lineTo(23,10),t.arc(0,0,25,Y(19),Y(341)),t.fill(),t.stroke();const i=o/100*90;t.beginPath(),t.moveTo(40,0),t.arc(40,25,25,Y(270),Y(270+i)),t.stroke();const a=25*Math.cos(Y(i-90))+40,n=25*Math.sin(Y(i-90))+25;t.fillStyle="#cd3926";for(let e=0;e<10;e++){const e=Math.cos(Y(L(0,360)))*L(0,15)+a,r=Math.sin(Y(L(0,360)))*L(0,15)+n;t.fillRect(e-1,r-1,3,3)}t.restore()};var B=new class{constructor(){this.timeoutHandler=null,this.div=document.createElement("div"),this.div.setAttribute("id","mbx"),document.getElementById("wrapper").appendChild(this.div)}show(e){clearTimeout(this.timeoutHandler),this.div.style.transition="3s",this.div.innerHTML=`<div>${e}</div>`,this.div.style.opacity=1}flash(e){clearTimeout(this.timeoutHandler),this.div.style.transition="0.5s",this.div.innerHTML=`<div>${e}</div>`,this.div.style.opacity=1,this.timeoutHandler=setTimeout(()=>this.div.style.opacity=0,500)}clear(){clearTimeout(this.timeoutHandler),this.div.style.transition="0.5s",this.div.style.opacity=0}};var O=new class{constructor(){this.viruses=[],this.gameInactive=!0;const r=()=>this.gameInactive=!0;e.subscribe(t,r,!0),e.subscribe(n,r,!0)}init(e,t){this.viruses=[],this.gameInactive=!1,this.map=e,this.virusConfig=t}update(){this.viruses.forEach(e=>e.update());const e=this.viruses.filter(e=>!e.dropped);e.length<this.viruses.length&&(setTimeout(()=>this.spawn(),3e3),B.flash("Nice one! Virus dropped"),this.viruses=e)}render(){this.viruses.forEach(e=>e.render())}spawn(){const e=V.getRandom();if(!e)return;const{row:t,col:r}=e,{speed:s,max:o}=this.virusConfig;this.viruses.length<o&&this.viruses.push(H({map:this.map,row:t,col:r,speed:s}))}getAll(){return this.viruses}getAllWithRowAndCol(){return this.viruses.map(e=>({...e,...this.map.getRowAndCol({x:e.x,y:e.y})}))}startSpawning(){const{interval:e,max:t}=this.virusConfig;this.intervalId=setInterval(()=>{this.viruses.length<t?(this.spawn(),this.checkGameStatusWhenAllSpawned()):clearInterval(this.intervalId)},e)}checkGameStatusWhenAllSpawned(){this.viruses.length>=this.virusConfig.max&&setTimeout(()=>e.publish(o),1e3)}reset(){clearInterval(this.intervalId)}},H=({map:e,col:t,row:r,speed:s})=>{const{x:o,y:i}=e.getXAndY({row:r,col:t}),a=new class{constructor(){this.blips=[]}start(e){setInterval(()=>{this.blips.push(F({x:e.x,y:e.y}))},f)}update(){this.blips.forEach(e=>e.update()),this.blips=this.blips.filter(e=>e.ttl>0)}render(){this.blips.forEach(e=>e.render())}},n={context:kontra.context,visits:Array(e.height).fill().map(()=>Array(e.width).fill(0)),x:o,y:i,speed:s,collisionRadius:30,dropped:!1,map:e,mapX:100*t,mapY:100*r,direction:C(e,{x:o,y:i},"S"),blips:a,update(){try{({x:this.x,y:this.y,mapX:this.mapX,mapY:this.mapY,direction:this.direction}=N(this)),this.blips.update()}catch({message:e}){"dropped"===e&&(this.dropped=!0)}},render(){$(this),this.blips.render()}};return a.start(n),n},N=e=>{let{direction:t}=e;const{map:r,visits:s}=e,{mapX:o,mapY:i}=(({mapX:e,mapY:t,direction:r,speed:s})=>{switch(r){case T:return{mapX:e,mapY:t-s};case S:return{mapX:e+s,mapY:t};case A:return{mapX:e,mapY:t+s};case M:return{mapX:e-s,mapY:t};default:return{mapX:e,mapY:t}}})(e),{x:a,y:n}=r.getXAndY({mapX:o,mapY:i});if((({mapX:e,mapY:t})=>e%100==0&&t%100==0)({mapX:o,mapY:i})){const e=r.tileAtLayer("main",{x:a,y:n}),{col:o,row:i}=r.getRowAndCol({x:a,y:n});if(s[i][o]++,(e=>E.includes(e))(e)){const{allowed:l}=R[e],c=(({viable:e,visits:t,row:r,col:s})=>{let o=Number.MAX_SAFE_INTEGER;return e.map(e=>{let i;switch(e){case T:i=t[r-1][s];break;case S:i=t[r][s+1];break;case A:i=t[r+1][s];break;case M:i=t[r][s-1]}return o=i<o?i:o,{dir:e,vis:i}}).filter(({vis:e})=>e===o).map(({dir:e})=>e)})({viable:l.filter(e=>e!==(e=>{switch(e){case T:return A;case S:return M;case A:return T;case M:return M;default:return null}})(t)&&I(r,{x:a,y:n},e)),visits:s,row:i,col:o});t=c[L(0,c.length-1)]}else try{t=C(r,{x:a,y:n},t)}catch({message:e}){throw new Error(e)}}return{direction:t,mapY:i,mapX:o,x:a,y:n}},$=e=>{const{context:t,x:r,y:s}=e;t.save(),t.translate(r,s),t.lineWidth=3,t.strokeStyle="#cd3926",t.fillStyle="#7a2431",t.beginPath(),t.moveTo(L(-5,5),L(-5,-25)),t.lineTo(L(5,50),L(-5,-50)),t.lineTo(L(5,25),L(-5,5)),t.lineTo(L(5,50),L(5,50)),t.lineTo(L(-5,5),L(5,25)),t.lineTo(L(-5,-50),L(5,50)),t.lineTo(L(-5,-25),L(-5,5)),t.lineTo(L(-5,-50),L(-5,-50)),t.closePath(),t.fill(),t.stroke(),t.restore()},F=({x:e,y:t})=>({context:kontra.context,x:e,y:t,ttl:180,radius:100,update(){this.radius+=10,this.ttl--},render(){U(this)}}),U=e=>{const{context:t,x:r,y:s,radius:o}=e;t.save(),t.translate(r,s),t.lineWidth=1,t.strokeStyle="#cd3926",t.beginPath(),t.arc(0,0,o,Y(0),Y(360)),t.closePath(),t.stroke(),t.restore()};var V=new class{constructor(){this.servers=[],this.gameInactive=!0;const r=()=>this.gameInactive=!0;e.subscribe(t,r,!0),e.subscribe(n,r,!0)}init(e,t=[]){this.servers=[],this.gameInactive=!1,this.map=e,this.nextServerPointer=0,t.forEach(({col:t,row:r})=>this.servers.push(q({map:e,row:r,col:t})))}update(){this.servers.forEach(e=>e.update())}render(){this.servers.forEach(e=>e.render())}destroy({col:t,row:r}){const s=this.find({col:t,row:r});s&&(s.broken=!0,e.publish(c))}infect(){const t=O.getAll(),r=this.getAvailableServers(),s=P(r,t);0!==s.length&&(s.forEach(([t])=>{t.infected=!0,e.publish(l)}),this.gameInactive||(0!==this.getAvailableServers().length?B.flash("server infected!"):B.flash("all servers destroyed or infected – be careful")))}find({col:e,row:t}){return this.servers.find(r=>r.col===e&&r.row===t)}getAvailableServers(){return this.servers.filter(e=>!(e.broken||e.infected))}getAvailableServersForDirection(){return this.getAvailableServers().filter(e=>{try{return C(this.map,e,"S"),!0}catch(e){return!1}})}getRandom(){const e=this.getAvailableServersForDirection();return e[Math.floor(Math.random()*e.length)]}getNext(){const e=this.getAvailableServersForDirection(),t=this.nextServerPointer+1<e.length;return this.nextServerPointer=t?this.nextServerPointer+1:0,e[this.nextServerPointer]}getInfectedServers(){return this.servers.filter(e=>e.infected)}},q=({map:e,row:t,col:r})=>{const{x:s,y:o}=e.getXAndY({row:t,col:r});return{context:kontra.context,x:s,y:o,row:t,col:r,map:e,mapX:100*r,mapY:100*t,broken:!1,infected:!1,collisionRadius:30,update(){({x:this.x,y:this.y}=e.getXAndY({mapX:this.mapX,mapY:this.mapY}))},render(){_(this)}}},z=(e,t)=>t.forEach(([t,r,s])=>e[t?"lineTo":"moveTo"](r,s)),_=e=>{const{context:t,x:r,y:s,broken:o,infected:i}=e;t.save(),t.translate(r,s),t.lineWidth=3,t.strokeStyle=i?"#cd3926":"#52638a",t.fillStyle=i?"#7a2431":"#2b3653",t.beginPath(),z(t,[[0,30,-48],[1,48,-30],[1,48,30],[1,30,48],[1,-30,48],[1,-48,30],[1,-48,-30],[1,-30,-48],[1,30,-48]]),t.fill(),t.stroke(),o&&(t.lineWidth=2,z(t,[[0,10,-48],[1,0,-40],[0,24,-48],[1,20,-30],[0,48,-27],[1,20,-20],[0,-10,-30],[1,10,-30],[1,30,-10],[1,20,0],[1,10,0],[0,48,7],[1,30,10],[0,20,0],[1,30,10],[1,10,20],[0,30,48],[1,30,30],[1,10,30],[0,20,20],[1,20,30],[0,-10,48],[1,-10,20],[1,0,10],[0,-20,0],[1,-20,20],[1,-10,30],[0,-30,48],[1,-20,40],[1,-20,30],[0,-30,30],[1,-20,40],[0,-48,20],[1,-30,20],[0,-40,20],[1,-40,10],[0,-48,0],[1,-30,0],[1,-20,-10],[0,-40,0],[1,-30,10],[0,-48,-17],[1,-40,-30],[1,-30,-20],[0,-30,-48],[1,-10,-20],[1,-10,-10],[0,-20,-30],[1,-20,-20],[1,-30,-10]]),t.stroke()),t.restore()},j=t=>{let{status:r,fuseLength:s,explosionDuration:a,x:n,y:l}=t;const{shrapnel:c,map:h,mapX:d,mapY:p,row:u,col:m}=t;switch(({x:n,y:l}=h.getXAndY({mapX:d,mapY:p})),r){case y:if((s-=1)<0){r=1,e.publish(i);for(let e=0;e<50;e++)c.push(J({x:n,y:l}));if(V.find({row:u,col:m}))V.destroy({row:u,col:m});else{const t=h.tileAtLayer("main",{row:u,col:m});h.changeTile("main",{row:u,col:m},t+16),e.publish(3,h),e.publish(o)}}break;case 1:c.forEach(e=>e.update()),200===++a&&(r=v)}return{status:r,fuseLength:s,explosionDuration:a,x:n,y:l}},J=({x:e,y:t})=>{const r=L(0,360),s=L(5,15);return{context:kontra.context,x:e,y:t,dx:Math.cos(Y(r))*s,dy:Math.sin(Y(r))*s,rotation:L(0,360),rotationDir:[L(-10,-1),L(1,10)][L(0,1)],update(){this.x+=this.dx,this.y+=this.dy,this.rotation+=this.rotationDir},render(){(e=>{const{context:t,x:r,y:s,rotation:o}=e;t.save(),t.translate(r,s),t.rotate(Y(o)),t.lineWidth=3,t.strokeStyle="#52638a",t.fillStyle="#2b3653",t.beginPath(),t.moveTo(0,-10),t.lineTo(10,5),t.lineTo(-10,5),t.closePath(),t.fill(),t.stroke(),t.restore()})(this)}}};class K{constructor(t){this.map=t,this.bombs=[],e.subscribe(r,e=>this.dropBomb(e))}dropBomb(e){this.bombs.length>0&&this.bombs.find(({col:t,row:r})=>t===e.col&&r===e.row)||this.bombs.push(w(this.map,e))}update(){this.bombs=this.bombs.filter(e=>(e.update(),e.status!==v))}render(){this.bombs.forEach(e=>e.render())}}var Q=(e,t)=>{const r=[];let s=t;for(;void 0!==s;)r.push(s),s=e.get(s);return r.reverse(),r},Z=(e,t)=>{let r=t.shift();const s=[];let o,i,a;for(;t.length;){if(o=t.shift(),!(i=ee(e,r,o)))return null;if(a=Q(i,o),!t.length)return s.concat(a);s.push.apply(s,a.slice(0,-1)),r=o}return null},ee=(e,t,r)=>{const s=new Map([[t,0]]),o=new Map([[0,[t]]]),i=new Map;function a(e,t){let r=o.get(e);r||(r=[],o.set(e,r)),r.push(t)}for(;o.size>0;){const t=Array.from(o.keys()).sort((e,t)=>e-t)[0],r=o.get(t),n=r.shift(),l=e.get(n)||new Map;0===r.length&&o.delete(t);for(const[e,r]of l){const o=r+t,l=s.get(e);(void 0===l||l>o)&&(s.set(e,o),a(o,e),i.set(e,n))}}return void 0===s.get(r)?null:i},te=({width:e,layers:t},r)=>{const{graph:s,allowed:o}=se(t[r].data,e);for(const[e,t]of s){const r=o.get(e),{row:i,col:a}=e;let n;for(const e of r)switch(e){case T:(n=re(s,{row:i-1,col:a}))&&t.set(n,1);break;case S:(n=re(s,{row:i,col:a+1}))&&t.set(n,1);break;case A:(n=re(s,{row:i+1,col:a}))&&t.set(n,1);break;case M:(n=re(s,{row:i,col:a-1}))&&t.set(n,1)}}return s},re=(e,{row:t,col:r})=>{for(const[s]of e)if(t===s.row&&r===s.col)return s;return null},se=(e,t)=>{const r=new Map,s=new Map;let o=0,i=0,a=0;for(const n of e){if(G(n)){const e={row:o,col:i};s.set(e,R[n].allowed),r.set(e,new Map)}++a%t==0?(o++,i=0):i++}return{graph:r,allowed:s}};var oe=new class{constructor(e=null){this.graph=e}setDataFromMap(e,t){this.graph=te(e,t)}getNodeByCoords(e){return re(this.graph,e)}findShortestPath(...e){return Z(this.graph,e)}isReachable(e,t){return null!==this.findShortestPathByCoords(e,t)}findShortestPathByCoords(...e){return this.findShortestPath(...e.map(e=>this.getNodeByCoords(e)))}},ie=()=>e.subscribe(3,e=>oe.setDataFromMap(e,"main"),!0);const ae="KATAMOV";var ne=new class{constructor(){this.div=document.createElement("div"),this.div.setAttribute("id","scb"),document.getElementById("wrapper").appendChild(this.div),this.score=0,this.highScore=localStorage.getItem(ae)||0,e.subscribe(h,e=>this.winPoints(e),!0)}startGame(){this.score=0,this.render()}initLevel(){this.render()}winPoints(e){this.score+=e,this.highScore=Math.max(this.score,this.highScore),localStorage.setItem(ae,this.highScore),this.render()}render(){const{infected:e,online:t,offline:r}=le.getStats();this.div.innerHTML=`${t} online |  `+`${r} offline | `+`${e} infected | `+`Score: ${this.score} | `+`Highscore: ${this.highScore}`}};var le=new class{constructor(){this.users=[],this.gameInactive=!0;const r=()=>this.gameInactive=!0;e.subscribe(t,r,!0),e.subscribe(n,r,!0)}init(e){this.users=[],this.gameInactive=!1,this.map=e;for(let t=0;t<e.height;t++)for(let r=0;r<e.width;r++){const s=e.tileAtLayer("main",{row:t,col:r});7!==s&&8!==s&&15!==s&&16!==s||this.users.push(ce({map:e,row:t,col:r}))}}updateOnlineStatus(){const t=O.getAllWithRowAndCol();if(0===t.length)return;let r=0;for(const s of this.getOnlineUsers())0===t.filter(e=>oe.isReachable(s,e)).length&&(r++,s.status=de,e.publish(h,100));r>0&&(this.endLevelOrGame()||B.flash(`${r} users went offline<br>good job!`))}endLevelOrGame(){const{online:r,offline:s,infected:o}=this.getStats();return!(r>0||(o<s?(e.publish(h,200*s),0===o&&e.publish(h,500),B.show("level completed<br>"+`offline users: ${s}<br>`+`infected users: ${o}<br>`+`score: ${ne.score}<br><br>`+"press any key"),e.publish(n),0):(B.show("game over – too many infected users!<br>"+`offline users: ${s}<br>`+`infected users: ${o}<br>`+`score: ${ne.score}<br><br>`+"press any key to start again"),e.publish(t),0)))}getOnlineUsers(){return this.users.filter(({status:e})=>e===he)}getStats(){return this.users.reduce((e,{status:t})=>({online:e.online+(t===he?1:0),offline:e.offline+(t===de?1:0),infected:e.infected+(t===pe?1:0)}),{online:0,offline:0,infected:0})}update(){this.users.forEach(e=>e.update())}render(){this.users.forEach(e=>e.render())}infect(){const e=O.getAll(),{users:t,gameInactive:r}=this,s=P(t,e).filter(([e])=>e.status!==pe);0!==s.length&&(s.forEach(([e])=>e.infect()),r||this.endLevelOrGame()||B.flash("user infected!"))}infectAllReachable(e){if(0===e.length)return;const t=this.getOnlineUsers();e.forEach(e=>{t.forEach(t=>{oe.isReachable(t,e)&&t.infect()})}),this.endLevelOrGame()}},ce=({map:t,row:r,col:s})=>{const{x:o,y:i}=t.getXAndY({row:r,col:s});return{context:kontra.context,x:o,y:i,collisionRadius:30,infected:!1,map:t,mapX:100*s,mapY:100*r,row:r,col:s,status:he,update(){({x:this.x,y:this.y}=t.getXAndY({mapX:this.mapX,mapY:this.mapY}))},render(){me(this)},infect(){this.status=pe,e.publish(a)}}};const he=0,de=1,pe=2,ue={[he]:{fg:"#52638a",bg:"#2b3653"},[de]:{fg:"#75a042",bg:"#365b1d"},[pe]:{fg:"#cd3926",bg:"#7a2431"}};var me=e=>{const{context:t,x:r,y:s,status:o}=e,{fg:i,bg:a}=ue[o];t.save(),t.translate(r,s),t.lineWidth=3,t.strokeStyle=i,t.fillStyle=a,t.beginPath(),t.moveTo(-40,40),t.lineTo(-40,20),t.arc(-20,20,20,Y(180),Y(270)),t.moveTo(-20,0),t.lineTo(20,0),t.arc(20,20,20,Y(270),Y(0)),t.lineTo(40,40),t.lineTo(-40,40),t.moveTo(-23,20),t.lineTo(-23,40),t.moveTo(23,20),t.lineTo(23,40),t.fill(),t.stroke(),t.beginPath(),t.arc(0,-15,25,Y(0),Y(360)),t.fill(),t.stroke(),t.restore()},ge=({map:t,player:r,bombs:o})=>{let i=!0;return e.subscribe(s,()=>i=!1),kontra.gameLoop({update(){O.update(),r.update(),r.infect([...V.getInfectedServers(),...O.getAll()]),r.teleport(),i&&(({map:e,direction:t,speed:r})=>{switch(t){case T:e.sy-=r;break;case S:e.sx+=r;break;case A:e.sy+=r;break;case M:e.sx-=r}})({map:t,...r}),le.update(),le.infect(),o.update(),V.update(),V.infect()},render(){t.render(),le.render(),V.render(),o.render(),r.render(),O.render()}})};function be(e,t){return[Math.cos(Y(e))*t+50,Math.sin(Y(e))*t+50]}var fe=({ctx:e,row:t,col:r,deg:s,broken:o=!1})=>{e.save(),e.translate(100*(r-1)+50,100*(t-1)+50),e.rotate(Y(s)),e.lineWidth=3,e.strokeStyle="#52638a",e.beginPath(),o?(e.moveTo(20,50),e.arc(50,50,30,Y(180),Y(190)),e.moveTo(...be(190,30)),e.lineTo(10,45),e.lineTo(10,35),e.lineTo(-10,40),e.lineTo(...be(190,70)),e.arc(50,50,70,Y(190),Y(180),!0),e.moveTo(50,20),e.arc(50,50,30,Y(270),Y(260),!0),e.moveTo(...be(260,30)),e.lineTo(40,10),e.lineTo(45,0),e.lineTo(35,0),e.lineTo(...be(260,70)),e.arc(50,50,70,Y(260),Y(270))):(e.moveTo(20,50),e.arc(50,50,30,Y(180),Y(270)),e.moveTo(-20,50),e.arc(50,50,70,Y(180),Y(270))),e.stroke(),e.restore()},we=({ctx:e,row:t,col:r,deg:s,broken:o=!1})=>{e.save(),e.translate(100*(r-1)+50,100*(t-1)+50),e.rotate(Y(s)),e.lineWidth=3,e.strokeStyle="#52638a",e.beginPath(),z(e,o?[[0,-20,50],[1,-20,30],[1,-10,40],[1,0,25],[1,10,35],[1,20,30],[1,20,50],[0,-20,-50],[1,-20,-40],[1,-10,-25],[1,0,-35],[1,10,-30],[1,20,-40],[1,20,-50]]:[[0,-20,-50],[1,-20,50],[0,20,-50],[1,20,50]]),e.stroke(),e.restore()},ye=({ctx:e,row:t,col:r,deg:s,broken:o=!1})=>{e.save(),e.translate(100*(r-1)+50,100*(t-1)+50),e.rotate(Y(s)),e.lineWidth=3,e.strokeStyle="#52638a",e.beginPath(),z(e,o?[[0,50,20],[1,40,20],[1,45,10],[1,40,-10],[1,45,-20],[1,50,-20],[0,20,-50],[1,20,-35],[1,10,-40],[1,0,-30],[1,-10,-40],[1,-20,-35],[1,-20,-50],[0,-50,-20],[1,-40,-20],[1,-35,-10],[1,-45,0],[1,-30,10],[1,-35,20],[1,-50,20]]:[[0,-20,-50],[1,-20,-20],[1,-50,-20],[0,20,-50],[1,20,-20],[1,50,-20],[0,-50,20],[1,50,20]]),e.stroke(),e.restore()},ve=({ctx:e,row:t,col:r,broken:s=!1})=>{e.save(),e.translate(100*(r-1)+50,100*(t-1)+50),e.lineWidth=3,e.strokeStyle="#52638a",e.beginPath(),z(e,s?[[0,-20,50],[1,-20,45],[1,-10,40],[1,0,45],[1,10,35],[1,20,40],[1,20,50],[0,50,20],[1,40,20],[1,45,10],[1,40,-10],[1,45,-20],[1,50,-20],[0,20,-50],[1,20,-35],[1,10,-40],[1,0,-30],[1,-10,-40],[1,-20,-35],[1,-20,-50],[0,-50,-20],[1,-40,-20],[1,-35,-10],[1,-45,0],[1,-30,10],[1,-35,20],[1,-50,20]]:[[0,-20,-50],[1,-20,-20],[1,-50,-20],[0,20,-50],[1,20,-20],[1,50,-20],[0,-50,20],[1,-20,20],[1,-20,50],[0,50,20],[1,20,20],[1,20,50]]),e.stroke(),e.restore()},xe=({ctx:e,row:t,col:r,deg:s,broken:o=!1})=>{e.save(),e.translate(100*(r-1)+50,100*(t-1)+50),e.rotate(Y(s)),e.lineWidth=3,e.strokeStyle="#52638a",e.beginPath(),z(e,o?[[0,-20,50],[1,-20,40],[1,-10,45],[1,0,35],[1,10,45],[1,20,40],[1,20,50]]:[[0,-20,50],[1,-20,0],[1,20,0],[1,20,50]]),e.stroke(),e.restore()},ke=(e={})=>{const t=e.width,r=e.height,s=e.tileWidth||32,o=e.tileHeight||32,i=t*s,a=r*o,n=e.context||kontra.context,l=n.canvas.width,c=n.canvas.height,h=document.createElement("canvas"),d=h.getContext("2d"),p=Math.max(0,i-l),u=Math.max(0,a-c);let m,g;const b=[],f={width:t,height:r,tileWidth:s,tileHeight:o,mapWidth:i,mapHeight:a,context:n,x:e.x||0,y:e.y||0,tilesets:[],layers:{},addTilesets:function(e){[].concat(e).forEach(e=>{const t=e.image;let r,i,a,n;if(`${t}`===t){let e=1/0;for(;e>=0;){const s=(e=t.lastIndexOf("/",e))<0?t:t.substr(e);if(kontra.assets.images[s]){r=kontra.assets.images[s];break}e--}}else r=t;i=e.firstGrid;const l=(r.width/s|0||1)*(r.height/o|0||1);i||(f.tilesets.length>0?(n=((a=f.tilesets[f.tilesets.length-1]).image.width/s|0)*(a.image.height/o|0),i=a.firstGrid+n):i=1),f.tilesets.push({firstGrid:i,lastGrid:i+l-1,image:r}),f.tilesets.sort((e,t)=>e.firstGrid-t.firstGrid)})},addLayers:function(e){[].concat(e).forEach(e=>{let r,s,o,i;if(e.render=void 0===e.render||e.render,Array.isArray(e.data[0])){r=[];for(let i=0;s=e.data[i];i++)for(o=0;o<t;o++)r.push(s[o]||0)}else r=e.data;f.layers[e.name]={data:r,zIndex:e.zIndex||0,render:e.render};for(const t in e.properties)if(e.properties.hasOwnProperty(t)){i=e.properties[t];try{i=JSON.parse(i)}catch(e){}f.layers[e.name][t]=i}f.layers[e.name].render&&(b.push(e.name),b.sort((e,t)=>f.layers[e].zIndex-f.layers[t].zIndex))}),function(){for(let e,t=0;e=f.layers[b[t]];t++)for(let t=0,r=e.data.length;t<r;t++)v(e,t)}()},changeTile(e,t,r){const s=w(t),o=f.layers[e];o.data[s]=r,v(o,s,!0)},tileAtLayer(e,t){const r=w(t);if(r>=0)return f.layers[e].data[r]},render(){f.context.drawImage(h,f.sx,f.sy,l,c,f.x,f.y,l,c)},renderLayer:function(e){const i=f.layers[e];let a=f.getRow();const n=f.getCol();let h=w({row:a,col:n});const d=n*s-f.sx,p=a*o-f.sy,u=Math.min(Math.ceil(l/s)+1,t),m=u*Math.min(Math.ceil(c/o)+1,r);let g,b,v,x,k,T,S,A,M,I=0;for(;I<m;)(v=i.data[h])&&(k=(x=y(v)).image,g=d+I%u*s,b=p+(I/u|0)*o,A=(T=v-x.firstGrid)%(S=k.width/s)*s,M=(T/S|0)*o,f.context.drawImage(k,A,M,s,o,g,b,s,o)),++I%u==0?h=n+ ++a*t:h++},getRowAndCol({x:e,y:t}){return{row:this.getRow(t),col:this.getCol(e)}},getXAndY:({row:e,col:t,mapX:r,mapY:i})=>({x:(t?t*s:r)-f.sx+s/2,y:(e?e*o:i)-f.sy+o/2}),getRow:(e=0)=>(f.sy+e)/o|0,getCol:(e=0)=>(f.sx+e)/s|0,get sx(){return m},get sy(){return g},set sx(e){m=Math.min(Math.max(0,e),p)},set sy(e){g=Math.min(Math.max(0,e),u)}};f.sx=e.sx||0,f.sy=e.sy||0,h.width=i,h.height=a;for(const t in e.properties)if(e.properties.hasOwnProperty(t)){let r=e.properties[t];try{r=JSON.parse(r)}catch(e){}f[t]=f[t]||r}function w(e){let s,o;return void 0!==e.x&&void 0!==e.y?(s=f.getRow(e.y),o=f.getCol(e.x)):(s=e.row,o=e.col),s<0||o<0||s>=r||o>=t?-1:o+s*t}function y(e){let t,r,s=0,o=f.tilesets.length-1;for(;s<=o;){if(t=(s+o)/2|0,e>=(r=f.tilesets[t]).firstGrid&&e<=r.lastGrid)return r;r.lastGrid<e?s=t+1:o=t-1}}function v(e,r,i=!1){const a=e.data[r];if(!a)return;const n=y(a),l=n.image,c=r%t*s,h=(r/t|0)*o,p=a-n.firstGrid,u=l.width/s,m=p%u*s,g=(p/u|0)*o;i&&d.clearRect(c,h,s,o),d.drawImage(l,m,g,s,o,c,h,s,o)}return e.tilesets&&f.addTilesets(e.tilesets),e.layers&&f.addLayers(e.layers),f},Te=async({data:e,width:t,height:r,col:s,row:o})=>{const{sx:i,sy:a}=k({col:s,row:o}),n=ke({tileWidth:100,tileHeight:100,width:t+8,height:r+8,sx:i,sy:a}),l=((e,t,r,s)=>{const o=[];let i=0;for(let a=0;a<r+2*s;a++)for(let n=0;n<t+2*s;n++)a<s||a>=s+r||n<s||n>=s+t?o.push(0):o.push(e[i++]);return o})(e,t,r,4),c=await(()=>{const e=document.createElement("canvas");e.width=800,e.height=800;const t=e.getContext("2d");fe({ctx:t,row:1,col:1,deg:0}),fe({ctx:t,row:1,col:2,deg:90}),fe({ctx:t,row:2,col:1,deg:270}),fe({ctx:t,row:2,col:2,deg:180}),we({ctx:t,row:1,col:3,deg:0}),we({ctx:t,row:2,col:3,deg:90}),ye({ctx:t,row:1,col:4,deg:0}),ye({ctx:t,row:1,col:5,deg:90}),ye({ctx:t,row:1,col:6,deg:180}),ye({ctx:t,row:2,col:5,deg:270}),ve({ctx:t,row:2,col:4}),xe({ctx:t,row:1,col:7,deg:0}),xe({ctx:t,row:1,col:8,deg:90}),xe({ctx:t,row:2,col:7,deg:180}),xe({ctx:t,row:2,col:8,deg:270}),fe({ctx:t,row:3,col:1,deg:0,broken:!0}),fe({ctx:t,row:3,col:2,deg:90,broken:!0}),fe({ctx:t,row:4,col:1,deg:270,broken:!0}),fe({ctx:t,row:4,col:2,deg:180,broken:!0}),we({ctx:t,row:3,col:3,deg:0,broken:!0}),we({ctx:t,row:4,col:3,deg:90,broken:!0}),ye({ctx:t,row:3,col:4,deg:0,broken:!0}),ye({ctx:t,row:3,col:5,deg:90,broken:!0}),ye({ctx:t,row:3,col:6,deg:180,broken:!0}),ye({ctx:t,row:4,col:5,deg:270,broken:!0}),ve({ctx:t,row:4,col:4,broken:!0}),xe({ctx:t,row:3,col:7,deg:0,broken:!0}),xe({ctx:t,row:3,col:8,deg:90,broken:!0}),xe({ctx:t,row:4,col:7,deg:180,broken:!0}),xe({ctx:t,row:4,col:8,deg:270,broken:!0});const r=new Image;return r.src=e.toDataURL("image/png"),new Promise(e=>setTimeout(()=>e(r),100))})();return n.addTilesets({image:c}),n.addLayers([{name:"main",data:l}]),n},Se=({map:r,direction:o,speed:i})=>{const a={context:kontra.context,x:g/2,y:b/2,collisionRadius:30,map:r,speed:i,infected:!1,gameInactive:!0,direction:o,nextDirection:null,dropBomb:!1,scale:1,dropping:!1,bombCoolingDown:!1,teleportToServer:!1,teleportCoolingDown:!1,update(){({nextDirection:this.nextDirection,direction:this.direction,dropBomb:this.dropBomb,scale:this.scale,bombCoolingDown:this.bombCoolingDown,teleportToServer:this.teleportToServer}=Me(this,e,B))},render(){Ae(this)},infect(r){P(r,[this]).length>0&&(this.infected=!0,this.gameInactive||(B.show("player infected<br>game over<br><br>press any key to start again"),e.publish(t)))},teleport(){if(this.teleportToServer&&!this.teleportCoolingDown){this.teleportCoolingDown=!0;const t=V.getNext();t?(({sx:this.map.sx,sy:this.map.sy}=k(t)),I(this.map,{x:this.x,y:this.y},this.direction)||(this.direction=C(this.map,{x:this.x,y:this.y},this.direction)),e.publish(10)):B.flash("all servers are destroyed or infected"),setTimeout(()=>{this.teleportCoolingDown=!1},600)}this.teleportToServer=!1},enableControls(){this.gameInactive=!1},canReachVirus(){const e={...this,...this.map.getRowAndCol(this)},t=O.getAllWithRowAndCol();if(0===t.length)return;const r=t.filter(t=>!oe.isReachable(e,t)),s=V.getAvailableServers(),o=[];r.forEach(e=>{s.forEach(t=>{oe.isReachable(t,e)&&o.push(e)})});const i=r.filter(e=>{return!o.find(t=>e.x===t.x&&e.y===t.y)});0!==i.length&&le.infectAllReachable(i)}};return e.subscribe(t,()=>a.gameInactive=!0),e.subscribe(n,()=>a.gameInactive=!0),e.subscribe(s,()=>a.dropping=!0),e.subscribe(3,()=>a.canReachVirus()),e.subscribe(l,()=>a.canReachVirus()),e.subscribe(c,()=>a.canReachVirus()),e.subscribe(10,()=>a.canReachVirus()),a},Ae=e=>{const{context:t,x:r,y:s,direction:o,infected:i,scale:a}=e;t.save(),t.translate(r,s),t.scale(a,a),t.rotate((e=>{switch(e){case T:return Y(0);case S:return Y(90);case A:return Y(180);case M:return Y(270);default:return null}})(o)),t.lineWidth=3,t.strokeStyle=i?"#cd3926":"#75a042",t.fillStyle=i?"#7a2431":"#365b1d",t.beginPath(),t.moveTo(-15,25),t.lineTo(0,-25),t.lineTo(15,25),t.closePath(),t.fill(),t.stroke(),t.restore()},Me=o=>{let{nextDirection:i,direction:a,dropBomb:n,scale:l,bombCoolingDown:c,teleportToServer:h}=o;const{dropping:d,map:p,gameInactive:u,x:m,y:g}=o;if(d)return l>0?l-=.01:(B.show("You fell into the abyss<br>Game over<br><br>press any key to start again"),e.publish(t)),{direction:a,nextDirection:i,dropBomb:n,scale:l,bombCoolingDown:c,teleportToServer:h};if(u||(({nextDirection:i,dropBomb:n,teleportToServer:h}=(e=>{let{nextDirection:t,dropBomb:r,teleportToServer:s}=e;return kontra.keys.pressed("right")&&(t=S),kontra.keys.pressed("left")&&(t=M),kontra.keys.pressed("up")&&(t=T),kontra.keys.pressed("down")&&(t=A),kontra.keys.pressed("space")&&(r=!0),kontra.keys.pressed("enter")&&(s=!0),{nextDirection:t,dropBomb:r,teleportToServer:s}})(o)),c&&(n=!1)),!(({x:e,y:t})=>(e-50)%100==0&&(t-50)%100==0)({x:p.sx,y:p.sy}))return{direction:a,nextDirection:i,dropBomb:n,scale:l,bombCoolingDown:c,teleportToServer:h};if(i&&I(p,{x:m,y:g},i))a=i,i=null;else try{a=C(p,{x:m,y:g},a)}catch({message:t}){"dropped"===t&&e.publish(s)}return n&&(e.publish(r,p.getRowAndCol({x:m,y:g})),n=!1,c=!0,setTimeout(()=>{o.bombCoolingDown=!1},100)),{direction:a,nextDirection:i,dropBomb:n,scale:l,bombCoolingDown:c,teleportToServer:h}},Ie=()=>{const e=document.createElement("canvas");e.width=g,e.height=b,e.style.cssText="\n        border: 4px solid #52638a;\n    ",document.getElementById("wrapper").appendChild(e)},Ce=[{player:{col:7,row:7,direction:T,speed:5},virus:{speed:2.5,max:1,interval:3e3},servers:[{row:7,col:4},{row:7,col:10}],map:{width:7,height:7,data:"   6      2 010aac03c2 0b9 24594aa989 2      e   "}},{player:{col:8,row:9,direction:A,speed:5},virus:{speed:2.5,max:2,interval:1e4},servers:[{row:9,col:8},{row:9,col:12},{row:15,col:15}],map:{width:20,height:20,data:" 6   6   6   6   6  f3a1031  4a5ac 0ab1  0a98ac  2 2 4ac 22  20a5a9 0318ac 8a92  22 2   20c  2    47 22 2 0a928a53a51 2  22 2 2  2  2  22 2  8c 4a9  20a9  22 2   2 2   039    24a37 0c 4a1 2 0aaaab9    22 2 4ac 8a1  2  07 89 4a9 8aaaba59  2     20a10aaa9 2 0a37f55a92 22   018aba1  22  2 220a122  2 2  431 4a922 4b3aac 47 2 4aba598592   8a9 f3ac 2 8aac 8a5a55a7   2 2    4aa12 22     e e    e  e8a9e  "}}];var Re=e=>{const t=Ce[e];return{...t,map:{...t.map,data:(e=>e.split("").map(e=>(function(e){const t=e.charCodeAt(0);return 32===t?0:t>=97?t-86:t-47})(e)))(t.map.data)}}},Ee=()=>new Promise(e=>setTimeout(()=>document.addEventListener("keydown",e,{once:!0}),1e3)),De=async()=>{B.show('welcome, <span class="grn">captain katamov!</span><br><br>Your shift as chief network security officer is about to begin… all users are online and happy. in case of virus intrusion, <span class="grn">cut them off</span> from the network to make sure they don\'t get infected!<br><br><table><tr><td class="grn">arrow keys</td><td>…</td><td>change direction</td></tr><tr><td class="grn">space bar</td><td>…</td><td>drop bomb</td></tr><tr><td class="grn">return</td><td>…</td><td>teleport to server</td></tr></table><br>press any key to begin!'),await Ee(),B.clear()};(new class{constructor(){Ie(),kontra.init(),ie(),e.subscribe(r,()=>m.play("drop-bomb"),!0),e.subscribe(i,()=>m.play("explode"),!0),e.subscribe(a,()=>m.play("infected"),!0),e.subscribe(s,()=>m.play("drop-ship"),!0),e.subscribe(n,()=>this.break(this.levelIndex+1),!0),e.subscribe(t,async()=>this.break(0),!0)}async break(t){e.reset(),O.reset(),this.loop.stop(),await Ee(),B.clear(),t!==Ce.length?(this.levelIndex=t,await this.initLevel(),0===t?ne.startGame():ne.initLevel(),await this.startLevel()):await this.finishGame()}async startGame(){this.levelIndex=0,ne.startGame(),await this.initLevel(),await De(),this.startLevel()}async finishGame(){B.show("All levels completed!<br>You are awesome!<br><br>Press any key to start again"),await Ee(),B.clear(),kontra.context.clearRect(0,0,g,b),this.startGame()}async initLevel(){const t=Re(this.levelIndex),r=await Te({...t.map,col:t.player.col,row:t.player.row});this.player=Se({map:r,...t.player});const s=new K(r);O.init(r,t.virus),oe.setDataFromMap(r,"main"),le.init(r),V.init(r,t.servers),this.loop=ge({map:r,player:this.player,bombs:s}),e.subscribe(o,()=>le.updateOnlineStatus()),r.render(),le.render(),V.render(),s.render(),this.player.render()}startLevel(){this.loop.start(),O.startSpawning(),setTimeout(()=>this.player.enableControls(),500)}}).startGame()}();
//# sourceMappingURL=game.js.map