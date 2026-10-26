const CARDS = [
{id:"saci",name:"Saci-Pererê",subtitle:"O redemoinho travesso",emoji:"🌪️",cost:1,attack:3,defense:1,color:"#a95f3c",ability:"Ao revelar: ganha +2 de poder se for a única carta sua aqui."},
{id:"iara",name:"Iara",subtitle:"A voz das águas",emoji:"🧜🏽‍♀️",cost:2,attack:2,defense:4,color:"#347f9b",ability:"Ao revelar: enfraquece em 2 o maior rival neste território."},
{id:"curupira",name:"Curupira",subtitle:"Guardião da mata",emoji:"🌿",cost:2,attack:3,defense:3,color:"#628e4e",ability:"Recebe +3 de poder na Floresta Encantada."},
{id:"cuca",name:"Cuca",subtitle:"Feitiço da noite",emoji:"🐊",cost:3,attack:5,defense:2,color:"#8d6ab0",ability:"Ao revelar: +2 de poder se houver rival neste território."},
{id:"boitata",name:"Boitatá",subtitle:"A chama protetora",emoji:"🐍",cost:3,attack:4,defense:4,color:"#c68e38",ability:"Recebe +2 de poder na Vila Assombrada."},
{id:"boto",name:"Boto-cor-de-rosa",subtitle:"Mistério dos rios",emoji:"🐬",cost:1,attack:2,defense:2,color:"#b9668c",ability:"Recebe +3 de poder no Rio das Iaras."},
{id:"mula",name:"Mula sem Cabeça",subtitle:"Lenda em chamas",emoji:"🔥",cost:4,attack:6,defense:3,color:"#b84c3b",ability:"Ao revelar: +2 de poder se você estiver perdendo aqui."},
{id:"vitoria",name:"Vitória-Régia",subtitle:"A beleza da lagoa",emoji:"🪷",cost:2,attack:1,defense:5,color:"#4c9a81",ability:"Ao revelar: compra uma carta se houver espaço na mão."},
{id:"mapinguari",name:"Mapinguari",subtitle:"O gigante da mata",emoji:"🦣",cost:5,attack:7,defense:4,color:"#8b6d4d",ability:"Poder bruto para virar uma disputa."},
{id:"corposeco",name:"Corpo-Seco",subtitle:"A maldição errante",emoji:"👻",cost:3,attack:3,defense:4,color:"#89939d",ability:"Ao revelar: +2 de poder para cada carta rival aqui (máximo +4)."},
{id:"maedagua",name:"Mãe-d'Água",subtitle:"Senhora das fontes",emoji:"🫧",cost:4,attack:4,defense:5,color:"#4b9eb4",ability:"Ao revelar: +2 de poder se você controlar outro território."},
{id:"negrinho",name:"Negrinho do Pastoreio",subtitle:"O guia das trilhas",emoji:"✨",cost:2,attack:2,defense:3,color:"#c69b5d",ability:"Ao revelar: +1 de poder para cada carta sua aqui (máximo +3)."}
];
const LOCATIONS = [
{id:"forest",name:"Floresta Encantada",desc:"Curupira recebe +3 de poder aqui.",emoji:"🌲",color:"#75b879"},
{id:"river",name:"Rio das Iaras",desc:"Boto-cor-de-rosa recebe +3 de poder aqui.",emoji:"🌊",color:"#6db5d8"},
{id:"village",name:"Vila Assombrada",desc:"Boitatá recebe +2 de poder aqui.",emoji:"🌙",color:"#bd8bd4"}
];
const $ = id => document.getElementById(id);
let state = null, toastTimer;
function shuffle(list){const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function makeDeck(){return shuffle(Array.from({length:3},()=>CARDS.map(c=>({...c})) ).flat().map((c,i)=>({...c,instanceId:"c"+i+"_"+Math.random().toString(36).slice(2,7)})));}
function freshState(){
 const playerDeck=makeDeck(), botDeck=makeDeck();
 return {round:1,energy:1,hand:playerDeck.splice(0,3),deck:playerDeck,botDeck,played:[],pending:[],selected:null,finished:false,uid:1,notice:"Escolha uma carta e um território. Suas jogadas serão reveladas ao encerrar a rodada.",history:[]};
}
function basePower(card,lane){let n=card.attack+card.defense;if(card.id==="curupira"&&lane==="forest")n+=3;if(card.id==="boto"&&lane==="river")n+=3;if(card.id==="boitata"&&lane==="village")n+=2;return n;}
function powerFor(entry){return Math.max(0,basePower(entry.card,entry.lane)+(entry.bonus||0));}
function laneCards(lane,side,includePending=true){return [...state.played,...(includePending?state.pending:[])].filter(p=>p.lane===lane&&p.side===side);}
function scoreList(){return LOCATIONS.map(location=>({location,you:state.played.filter(p=>p.lane===location.id&&p.side==="you").reduce((n,p)=>n+powerFor(p),0),bot:state.played.filter(p=>p.lane===location.id&&p.side==="bot").reduce((n,p)=>n+powerFor(p),0)}));}
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2300);}
function showScreen(name){$("home-screen").classList.toggle("hidden",name!=="home");$("collection-screen").classList.toggle("hidden",name!=="collection");$("game-screen").classList.toggle("hidden",name!=="game");window.scrollTo({top:0,behavior:"smooth"});}
function cardMarkup(card,classes=""){return `<button type="button" class="hand-card ${classes}" style="--card:${card.color}" data-card="${card.instanceId}" aria-label="Selecionar ${card.name}"><span class="hand-card-art"><span class="card-cost">${card.cost}</span><span class="card-emoji">${card.emoji}</span></span><span class="hand-card-info"><strong class="card-title">${card.name}</strong><span class="card-subtitle">${card.subtitle}</span><span class="card-ability">${card.ability}</span><span class="card-statline"><span>⚔ ${card.attack} ATQ</span><span>⬡ ${card.defense} DEF</span></span></span></button>`;}
function renderCollection(){$("collection-grid").innerHTML=CARDS.map(c=>`<article class="collection-card" style="--card:${c.color}"><div class="hand-card-art"><span class="card-cost">${c.cost}</span><span class="card-emoji">${c.emoji}</span></div><div class="hand-card-info"><h4>${c.name}</h4><div class="card-subtitle">${c.subtitle}</div><div class="card-ability">${c.ability}</div><div class="card-statline"><span>⚔ ${c.attack} ATQ</span><span>⬡ ${c.defense} DEF</span><span>✦ ${c.cost} EN.</span></div></div></article>`).join("");}
function renderGame(){
 $("round-number").textContent=state.round;$("energy-value").textContent=`${state.energy} / ${state.round}`;$("hand-count").textContent=state.hand.length;
 $("energy-pips").innerHTML=Array.from({length:6},(_,i)=>`<span class="energy-pip ${i<state.energy?"active":""}"></span>`).join("");$("turn-hint").textContent=state.notice;
 const totals=scoreList();
 $("locations").innerHTML=LOCATIONS.map((loc,i)=>{
  const s=totals.find(t=>t.location.id===loc.id);
  const youCount=laneCards(loc.id,"you").length,botCount=laneCards(loc.id,"bot").length;
  const sideCards=(side)=>{const cards=[...state.played,...state.pending].filter(p=>p.lane===loc.id&&p.side===side);return cards.length?cards.map(p=>`<div class="board-card ${side==="bot"?"bot":"you"} ${p.revealed?"":"queued"}" title="${p.card.name} — ${p.revealed?powerFor(p)+" poder":"aguardando revelação"}"><span class="mini-power">${p.revealed?powerFor(p):"?"}</span><span class="mini-art">${p.card.emoji}</span><span class="mini-name">${p.card.name}</span></div>`).join(""):'<span class="empty-slot">— espaço vazio —</span>';};
  return `<article class="location" style="--loc:${loc.color}"><div class="lane-side opponent-side"><div class="lane-side-label"><span>ADVERSÁRIO</span><b>${botCount}/4</b></div><div class="lane-card-row">${sideCards("bot")}</div></div><div class="scenario-center"><div class="scenario-art" aria-hidden="true">${loc.emoji}</div><div class="scenario-kicker">CENÁRIO 0${i+1}</div><h3>${loc.name}</h3><p>${loc.desc}</p><div class="score-row"><div class="score-side bot"><small>RIVAL</small><strong>${s.bot}</strong></div><span class="score-vs">VS</span><div class="score-side"><small>VOCÊ</small><strong>${s.you}</strong></div></div></div><div class="lane-side player-side"><div class="lane-side-label"><span>SUA ÁREA</span><b>${youCount}/4</b></div><div class="lane-card-row">${sideCards("you")}</div><button class="play-here" data-lane="${loc.id}" ${!state.selected||state.finished||youCount>=4||!state.hand.some(c=>c.instanceId===state.selected)||state.hand.find(c=>c.instanceId===state.selected)?.cost>state.energy?"disabled":""}>＋ Jogar carta aqui</button></div></article>`;
 }).join("");
 $("player-hand").innerHTML=state.hand.map(c=>cardMarkup(c,`${state.selected===c.instanceId?"selected":""} ${c.cost>state.energy?"unaffordable":""}`)).join("");
 $("player-hand").querySelectorAll("[data-card]").forEach(el=>el.addEventListener("click",()=>selectCard(el.dataset.card)));
 $("locations").querySelectorAll("[data-lane]").forEach(el=>el.addEventListener("click",()=>playCard(el.dataset.lane)));
 $("end-turn-button").disabled=state.finished;
 $("result-panel").classList.toggle("hidden",!state.finished);
 if(state.finished){
  const t=scoreList(),you=t.filter(s=>s.you>s.bot).length,bot=t.filter(s=>s.bot>s.you).length,ties=t.filter(s=>s.you===s.bot).length;
  $("result-panel").innerHTML=`<div><h3>${you>bot?"Vitória lendária!":you===bot?"Empate entre lendas":"O rival levou a melhor"}</h3><p>Territórios conquistados: você ${you} · rival ${bot} · empatados ${ties}.</p></div><button class="button gold" id="play-again">Jogar novamente ↻</button>`;
  $("play-again").addEventListener("click",startGame);
 }
}
function selectCard(instanceId){if(state.finished)return;const c=state.hand.find(x=>x.instanceId===instanceId);if(!c)return;if(state.selected===instanceId){state.selected=null;state.notice="Seleção cancelada.";}else{state.selected=instanceId;state.notice=c.cost>state.energy?`${c.name} custa ${c.cost} de energia; você tem ${state.energy}.`:`${c.name} selecionado: escolha um território livre (máximo 4 cartas por lado em cada local).`;}renderGame();if(c.cost>state.energy)toast(state.notice);}
function playCard(lane){
 if(!state.selected){toast("Escolha uma carta da sua mão primeiro.");return;}
 const idx=state.hand.findIndex(c=>c.instanceId===state.selected);if(idx<0)return;
 const card=state.hand[idx],count=laneCards(lane,"you").length;
 if(card.cost>state.energy){toast("Energia insuficiente para essa carta.");return;}
 if(count>=4){toast("Você já tem quatro cartas neste território.");return;}
 state.hand.splice(idx,1);state.energy-=card.cost;
 state.pending.push({uid:state.uid++,card,lane,side:"you",revealed:false,bonus:0});
 state.selected=null;state.notice=`${card.name} preparada em ${LOCATIONS.find(l=>l.id===lane).name}. Encerre a rodada para revelar as jogadas.`;renderGame();
}
function currentScoresIncludingPending(){return LOCATIONS.map(l=>({id:l.id,you:laneCards(l.id,"you").reduce((n,p)=>n+powerFor(p),0),bot:laneCards(l.id,"bot").reduce((n,p)=>n+powerFor(p),0)}));}
function botTurn(){
 let budget=state.round,plays=0;
 while(plays<4){
  const occupied=lane=>laneCards(lane,"bot").length;
  const choices=state.botDeck.filter(c=>c.cost<=budget&&LOCATIONS.some(l=>occupied(l.id)<4));
  if(!choices.length)break;
  const scores=currentScoresIncludingPending();
  const card=choices.sort((a,b)=>((b.attack+b.defense)/Math.max(1,b.cost))-((a.attack+a.defense)/Math.max(1,a.cost)))[0];
  const lanes=LOCATIONS.filter(l=>occupied(l.id)<4).sort((a,b)=>{
   const sa=scores.find(s=>s.id===a.id),sb=scores.find(s=>s.id===b.id);
   const deficitA=sa.you-sa.bot,deficitB=sb.you-sb.bot;
   return deficitB-deficitA;
  });
  const lane=lanes[0];state.botDeck.splice(state.botDeck.findIndex(c=>c.instanceId===card.instanceId),1);
  state.pending.push({uid:state.uid++,card,lane:lane.id,side:"bot",revealed:false,bonus:0});budget-=card.cost;plays++;
  if(budget<=0)break;
 }
}
function resolvePending(){
 const batch=shuffle(state.pending);state.pending=[];
 for(const p of batch){
  const lane=p.lane,side=p.side,enemy=side==="you"?"bot":"you";
  const ownBefore=state.played.filter(x=>x.lane===lane&&x.side===side);
  const enemyBefore=state.played.filter(x=>x.lane===lane&&x.side===enemy);
  if(p.card.id==="saci"&&ownBefore.length===0)p.bonus+=2;
  if(p.card.id==="cuca"&&enemyBefore.length>0)p.bonus+=2;
  if(p.card.id==="mula"){const scores=currentScoresIncludingPending().find(s=>s.id===lane);if((side==="you"?scores.you<scores.bot:scores.bot<scores.you))p.bonus+=2;}
  if(p.card.id==="corposeco")p.bonus+=Math.min(4,enemyBefore.length*2);
  if(p.card.id==="maedagua"){const controlled=LOCATIONS.some(l=>l.id!==lane&&state.played.filter(x=>x.lane===l.id&&x.side===side).reduce((n,x)=>n+powerFor(x),0)>state.played.filter(x=>x.lane===l.id&&x.side===enemy).reduce((n,x)=>n+powerFor(x),0));if(controlled)p.bonus+=2;}
  if(p.card.id==="negrinho")p.bonus+=Math.min(3,ownBefore.length);
  p.revealed=true;state.played.push(p);
  if(p.card.id==="iara"){
   const target=[...state.played].filter(x=>x.lane===lane&&x.side===enemy).sort((a,b)=>powerFor(b)-powerFor(a))[0];
   if(target)target.bonus-=2;
  }
  if(p.card.id==="vitoria"&&state.hand.length<7&&state.deck.length)state.hand.push(state.deck.shift());
  state.history.push(`${p.side==="you"?"Você":"Rival"} revelou ${p.card.name} em ${LOCATIONS.find(l=>l.id===lane).name}.`);
 }
}
function endTurn(){
 if(state.finished)return;
 botTurn();resolvePending();
 if(state.round>=6){state.finished=true;state.notice="A sexta rodada terminou. Confira o resultado final!";renderGame();$("result-panel").scrollIntoView({behavior:"smooth",block:"nearest"});return;}
 state.round++;state.energy=state.round;state.selected=null;
 if(state.deck.length&&state.hand.length<7)state.hand.push(state.deck.shift());
 state.notice=`Rodada ${state.round}: energia renovada para ${state.energy}. Escolha suas cartas; as jogadas serão reveladas ao fim da rodada.`;
 renderGame();
}
function startGame(){state=freshState();showScreen("game");renderGame();}
$("start-button").addEventListener("click",startGame);
$("collection-button").addEventListener("click",()=>{renderCollection();showScreen("collection");});
$("collection-back").addEventListener("click",()=>showScreen("home"));
$("brand-home").addEventListener("click",e=>{e.preventDefault();showScreen("home");});
$("restart-button").addEventListener("click",startGame);
$("end-turn-button").addEventListener("click",endTurn);
$("help-button").addEventListener("click",()=>$("help-dialog").showModal());
$("close-help").addEventListener("click",()=>$("help-dialog").close());
$("got-it").addEventListener("click",()=>{$("help-dialog").close();startGame();});
renderCollection();