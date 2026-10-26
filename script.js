const CARDS = [
{id:"saci",name:"Saci-Pererê",image:"assets/cartas/saci.png",subtitle:"O redemoinho travesso",emoji:"🌪️",cost:1,attack:2,defense:0,color:"#a95f3c",ability:"Depois que você jogar outra carta aqui, ela recebe +1 de Poder."},
{id:"iara",name:"Iara",image:"assets/cartas/iara.png",subtitle:"A voz das águas",emoji:"🧜🏽‍♀️",cost:2,attack:3,defense:0,color:"#347f9b",ability:"Ao revelar: enfraquece em 2 o maior rival neste território."},
{id:"curupira",name:"Curupira",image:"assets/cartas/curupira.png",subtitle:"Guardião da mata",emoji:"🌿",cost:3,attack:4,defense:0,color:"#628e4e",ability:"Quando uma carta inimiga é jogada aqui, ela volta para a mão do adversário."},
{id:"cuca",name:"Cuca",image:"assets/cartas/cuca.png",subtitle:"Feitiço da noite",emoji:"🐊",cost:4,attack:5,defense:0,color:"#8d6ab0",ability:"Escolha uma carta inimiga neste cenário. Ela perde 2 de Poder até o final do turno."},
{id:"boitata",name:"Boitatá",image:"assets/cartas/boitata.png",subtitle:"A chama protetora",emoji:"🐍",cost:4,attack:6,defense:0,color:"#c68e38",ability:"Escolha uma carta inimiga neste cenário. Ela não pode atacar até o final do próximo turno."},
{id:"boto",name:"Boto-cor-de-rosa",image:"assets/cartas/boto.png",subtitle:"Mistério dos rios",emoji:"🐬",cost:3,attack:4,defense:0,color:"#b9668c",ability:"Escolha uma carta inimiga neste cenário. Ela fica confusa e não pode atacar até o final do próximo turno."},
{id:"mula",name:"Mula sem Cabeça",image:"assets/cartas/mula.png",subtitle:"Lenda em chamas",emoji:"🔥",cost:5,attack:7,defense:0,color:"#b84c3b",ability:"Quando esta carta é atacada, causa 2 de dano ao inimigo que a atacou."},
{id:"vitoria",name:"Vitória-Régia",image:"assets/cartas/vitoria-regia.png",subtitle:"A beleza da lagoa",emoji:"🪷",cost:4,attack:6,defense:0,color:"#4c9a81",ability:"Ao entrar em jogo, cure 3 de vida de um aliado. Se for noite, cure 5 em vez de 3."},
{id:"mapinguari",name:"Mapinguari",image:"assets/cartas/mapinguari.png",subtitle:"O gigante da mata",emoji:"🦣",cost:5,attack:7,defense:0,color:"#8b6d4d",ability:"Ao entrar em jogo, descarte uma carta aleatória da mão do oponente."},
{id:"corposeco",name:"Corpo-Seco",image:"assets/cartas/corpo-seco.png",subtitle:"A maldição errante",emoji:"👻",cost:4,attack:6,defense:0,color:"#89939d",ability:"Ao jogar, escolha uma carta do cemitério e coloque-a no topo do seu deck."},
{id:"maedagua",name:"Mãe-d'Água",image:"assets/cartas/mae-dagua.png",subtitle:"Senhora das fontes",emoji:"🫧",cost:5,attack:7,defense:0,color:"#4b9eb4",ability:"Ao jogar, escolha uma carta do seu deck e coloque-a na sua mão."},
{id:"negrinho",name:"Negrinho do Pastoreio",image:"assets/cartas/negrinho-do-pastoreio.png",subtitle:"O guia das trilhas",emoji:"✨",cost:5,attack:7,defense:0,color:"#c69b5d",ability:"Ao entrar, devolva uma carta sua de outro cenário à mão; ela custa 1 a menos."},
{id:"boitata-guardiao",name:"Boiúna",image:"assets/cartas/boiuna.png",subtitle:"A serpente dos rios",emoji:"🐉",cost:2,attack:3,defense:0,color:"#417e9a",ability:"Cartas inimigas aqui têm −1 de Poder."},
{id:"matinta",name:"Matinta-Pereira",image:"assets/cartas/matinta-pereira.png",subtitle:"O assobio da noite",emoji:"🦉",cost:4,attack:6,defense:0,color:"#7764a7",ability:"Ao entrar em jogo, escolha uma carta da mão do oponente e embaralhe-a no deck dele."},
{id:"caipora",name:"Caipora",image:"assets/cartas/caipora.png",subtitle:"Protetora dos animais",emoji:"🏹",cost:4,attack:5,defense:0,color:"#4e9a62",ability:"Ao revelar, impede que cartas inimigas sejam jogadas aqui no próximo turno."},
{id:"caboclo",name:"Caboclo-d'Água",image:"assets/cartas/caboclo-dagua.png",subtitle:"O guardião do igarapé",emoji:"🛶",cost:4,attack:5,defense:0,color:"#438fa6",ability:"Ao entrar, mova uma carta sua para outro cenário e ela ganha +1 de Poder."},
{id:"mulaouro",name:"Mãe do Ouro",image:"assets/cartas/mula-ouro.png",subtitle:"Luz que protege tesouros",emoji:"🌟",cost:3,attack:3,defense:3,color:"#c49a39",ability:"Ao revelar: +2 de poder se você estiver vencendo aqui."},
{id:"onca",name:"Onça da Mão Torta",image:"assets/cartas/onca-da-mao-torta.png",subtitle:"A fera encantada",emoji:"🐆",cost:4,attack:5,defense:3,color:"#bd783d",ability:"Ao revelar: +1 de poder por carta sua aqui (máximo +3)."},
{id:"pisadeira",name:"Pisadeira",image:"assets/cartas/pisadeira.png",subtitle:"O terror da madrugada",emoji:"🌑",cost:5,attack:8,defense:0,color:"#8c526b",ability:"Ao final do jogo, cartas inimigas aqui têm −2 de Poder."},
{id:"sereia",name:"Sereia do Rio",image:"assets/cartas/sereia-do-rio.png",subtitle:"O canto profundo",emoji:"🧜‍♀️",cost:4,attack:4,defense:4,color:"#4d8fc2",ability:"Ao revelar: +2 de poder se o rival tiver mais poder aqui."},
{id:"sao-saci",name:"Romãozinho",image:"assets/cartas/romaozinho.png",subtitle:"O menino travesso",emoji:"🧒",cost:1,attack:2,defense:1,color:"#b66b49",ability:"Ao revelar: +1 de poder para cada outra carta sua aqui (máximo +2)."},
{id:"estrela",name:"Estrela do Mar",image:"assets/cartas/estrela-do-mar.png",subtitle:"Encanto das águas",emoji:"⭐",cost:1,attack:1,defense:2,color:"#d28bba",ability:"Recebe +2 de poder no Rio das Iaras."},
{id:"guardiao",name:"Anhangá",image:"assets/cartas/anhanga.png",subtitle:"O espírito protetor",emoji:"🦌",cost:5,attack:6,defense:0,color:"#d1d1a2",ability:"Cartas inimigas aqui não revelam seus efeitos no próximo turno."},
{id:"tutu",name:"Tutu Marambá",image:"assets/cartas/tutameia.png",subtitle:"O vulto das histórias",emoji:"🐗",cost:4,attack:5,defense:0,color:"#85634c",ability:"Enquanto esta carta estiver aqui, suas cartas de custo 3 ou mais ganham +2 de Poder."},
{id:"lobisomem",name:"Lobisomem",subtitle:"A fera da lua cheia",emoji:"🐺",image:"assets/cartas/lobisomem.png",cost:4,attack:6,defense:0,color:"#786b8f",ability:"Ao revelar, escolha uma carta inimiga. Ela perde 3 de Poder até o final do turno."},
{id:"boto-tucuxi",name:"Boto Tucuxi",subtitle:"O guardião das águas",emoji:"🐬",image:"assets/cartas/boto-tucuxi.png",cost:1,attack:1,defense:0,color:"#528ca9",ability:"Quando outra carta é jogada aqui, esta carta ganha +1 de Poder."},
{id:"capelobo",name:"Capelobo",subtitle:"O caçador das sombras",emoji:"🐾",image:"assets/cartas/capelobo.png",cost:2,attack:2,defense:0,color:"#8d6e54",ability:"Cartas inimigas aqui custam 1 a mais."},
{id:"comadre-fulozinha",name:"Comadre Fulozinha",subtitle:"A protetora da mata",emoji:"🍃",image:"assets/cartas/comadre-fulozinha.png",cost:2,attack:3,defense:0,color:"#5f9b66",ability:"Ao entrar, destrua uma carta de custo 1 aqui."},
{id:"ioty",name:"Ioty",subtitle:"O mistério ancestral",emoji:"🔮",image:"assets/cartas/ioty.png",cost:3,attack:3,defense:0,color:"#9275b9",ability:"Ao revelar, dá +1 de Poder a cada carta sua nos outros cenários."},
{id:"jurupari",name:"Jurupari",subtitle:"O espírito da noite",emoji:"🌘",image:"assets/cartas/jurupari.png",cost:5,attack:6,defense:0,color:"#685b88",ability:"Enquanto esta carta estiver aqui, cartas inimigas não podem usar habilidades."}
];
const LOCATIONS = [
{id:"forest",name:"Floresta Encantada",desc:"Curupira recebe +3 de poder aqui.",emoji:"🌲",color:"#75b879"},
{id:"river",name:"Rio das Iaras",desc:"Boto-cor-de-rosa recebe +3 de poder aqui.",emoji:"🌊",color:"#6db5d8"},
{id:"village",name:"Vila Assombrada",desc:"Boitatá recebe +2 de poder aqui.",emoji:"🌙",color:"#bd8bd4"}
];
const $ = id => document.getElementById(id);
let state = null, toastTimer;
function shuffle(list){const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function makeDeck(){return shuffle(CARDS.map((c,i)=>({...c,instanceId:"c"+i+"_"+Math.random().toString(36).slice(2,7)})));}
function freshState(){
 const playerDeck=makeDeck(), botDeck=makeDeck();
 return {round:1,energy:1,hand:playerDeck.splice(0,3),deck:playerDeck,botHand:botDeck.splice(0,3),botDeck,played:[],pending:[],selected:null,finished:false,uid:1,notice:"Escolha uma carta e um território. Suas jogadas serão reveladas ao encerrar a rodada.",history:[]};
}
function basePower(card,lane){let n=card.attack+card.defense;if(card.id==="curupira"&&lane==="forest")n+=3;if(card.id==="boto"&&lane==="river")n+=3;if(card.id==="boitata"&&lane==="village")n+=2;return n;}
function powerFor(entry){return Math.max(0,basePower(entry.card,entry.lane)+(entry.bonus||0));}
function laneCards(lane,side,includePending=true){return [...state.played,...(includePending?state.pending:[])].filter(p=>p.lane===lane&&p.side===side);}
function scoreList(){return LOCATIONS.map(location=>({location,you:state.played.filter(p=>p.lane===location.id&&p.side==="you").reduce((n,p)=>n+powerFor(p),0),bot:state.played.filter(p=>p.lane===location.id&&p.side==="bot").reduce((n,p)=>n+powerFor(p),0)}));}
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2300);}
function showScreen(name){$("home-screen").classList.toggle("hidden",name!=="home");$("collection-screen").classList.toggle("hidden",name!=="collection");$("game-screen").classList.toggle("hidden",name!=="game");window.scrollTo({top:0,behavior:"smooth"});}
function cardArt(card){const image=card.image?'<img class="card-art-image" src="'+card.image+'" alt="'+card.name+'" loading="lazy" onload="this.parentElement.classList.add(\'has-card-image\')" onerror="this.remove();this.parentElement.classList.remove(\'has-card-image\')">':"";return image+'<span class="card-cost">'+card.cost+'</span><span class="card-emoji">'+card.emoji+'</span>';}
function cardMarkup(card,classes=""){return `<button type="button" class="hand-card ${classes}" style="--card:${card.color}" data-card="${card.instanceId}" aria-label="Selecionar ${card.name}"><span class="hand-card-art">${cardArt(card)}</span><span class="hand-card-info"><strong class="card-title">${card.name}</strong><span class="card-subtitle">${card.subtitle}</span><span class="card-ability">${card.ability}</span><span class="card-statline"><span>✦ ${card.attack} PODER</span></span></span></button>`;}
function renderCollection(){$("collection-grid").innerHTML=CARDS.map(c=>`<article class="collection-card" style="--card:${c.color}"><div class="hand-card-art">${cardArt(c)}</div><div class="hand-card-info"><h4>${c.name}</h4><div class="card-subtitle">${c.subtitle}</div><div class="card-ability">${c.ability}</div><div class="card-statline"><span>✦ ${c.attack} PODER</span><span>✦ ${c.cost} EN.</span></div></div></article>`).join("");}
function renderGame(){
 $("round-number").textContent=state.round;$("energy-value").textContent=`${state.energy} / ${state.round}`;$("hand-count").textContent=state.hand.length;
 $("energy-pips").innerHTML=Array.from({length:6},(_,i)=>`<span class="energy-pip ${i<state.energy?"active":""}"></span>`).join("");$("turn-hint").textContent=state.notice;
 const totals=scoreList();
 $("locations").innerHTML=LOCATIONS.map((loc,i)=>{
  const s=totals.find(t=>t.location.id===loc.id);
  const youCount=laneCards(loc.id,"you").length,botCount=laneCards(loc.id,"bot").length;
  const sideCards=(side)=>{const cards=[...state.played,...state.pending].filter(p=>p.lane===loc.id&&p.side===side);return cards.length?cards.map(p=>`<div class="board-card ${side==="bot"?"bot":"you"} ${p.revealed?"":"queued"}" title="${p.card.name} — ${p.revealed?powerFor(p)+" poder":"aguardando revelação"}"><span class="mini-power">${p.revealed?powerFor(p):"?"}</span><span class="mini-art">${p.card.image?`<img class="mini-art-image" src="${p.card.image}" alt="${p.card.name}" loading="lazy" onerror="this.remove()">`:p.card.emoji}</span><span class="mini-name">${p.card.name}</span></div>`).join(""):'<span class="empty-slot">— espaço vazio —</span>';};
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
  const choices=state.botHand.filter(c=>c.cost<=budget&&LOCATIONS.some(l=>occupied(l.id)<4));
  if(!choices.length)break;
  const scores=currentScoresIncludingPending();
  const card=choices.sort((a,b)=>((b.attack+b.defense)/Math.max(1,b.cost))-((a.attack+a.defense)/Math.max(1,a.cost)))[0];
  const lanes=LOCATIONS.filter(l=>occupied(l.id)<4).sort((a,b)=>{
   const sa=scores.find(s=>s.id===a.id),sb=scores.find(s=>s.id===b.id);
   return ((sa.you-sa.bot)-(sb.you-sb.bot));
  });
  const lane=lanes[0];state.botHand.splice(state.botHand.findIndex(c=>c.instanceId===card.instanceId),1);
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
  const scoreNow=currentScoresIncludingPending().find(x=>x.id===lane)||{you:0,bot:0};
  if(p.card.id==="saci"&&ownBefore.length===0)p.bonus+=2;
  if(p.card.id==="cuca"&&enemyBefore.length>0)p.bonus+=2;
  if(p.card.id==="mula"&&(side==="you"?scoreNow.you<scoreNow.bot:scoreNow.bot<scoreNow.you))p.bonus+=2;
  if(p.card.id==="corposeco")p.bonus+=Math.min(4,enemyBefore.length*2);
  if(p.card.id==="maedagua"){const controlled=LOCATIONS.some(l=>l.id!==lane&&state.played.filter(x=>x.lane===l.id&&x.side===side).reduce((n,x)=>n+powerFor(x),0)>state.played.filter(x=>x.lane===l.id&&x.side===enemy).reduce((n,x)=>n+powerFor(x),0));if(controlled)p.bonus+=2;}
  if(p.card.id==="negrinho")p.bonus+=Math.min(2,ownBefore.length);
  if(p.card.id==="matinta"&&enemyBefore.length>=2)p.bonus+=2;
  if((p.card.id==="caipora"||p.card.id==="comadre-fulozinha")&&lane==="forest")p.bonus+=2;
  if((p.card.id==="boto-tucuxi"||p.card.id==="estrela")&&lane==="river")p.bonus+=2;
  if(p.card.id==="boitata-guardiao"&&lane==="river")p.bonus+=2;
  if(p.card.id==="caboclo"&&ownBefore.length<enemyBefore.length)p.bonus+=2;
  if(p.card.id==="onca")p.bonus+=Math.min(3,ownBefore.length);
  if(p.card.id==="sao-saci")p.bonus+=Math.min(2,ownBefore.length);
  if(p.card.id==="sereia"&&(side==="you"?scoreNow.you<scoreNow.bot:scoreNow.bot<scoreNow.you))p.bonus+=2;
  if(p.card.id==="mulaouro"&&(side==="you"?scoreNow.you>scoreNow.bot:scoreNow.bot>scoreNow.you))p.bonus+=2;
  if(p.card.id==="guardiao"){const losing=currentScoresIncludingPending().filter(x=>side==="you"?x.you<x.bot:x.bot<x.you).length;if(losing>=2)p.bonus+=2;}
  if(p.card.id==="tutu"&&state.played.filter(x=>x.lane===lane).length+1>=3)p.bonus+=2;
  if(p.card.id==="lobisomem"&&enemyBefore.length>0)p.bonus+=2;
  if(p.card.id==="capelobo"&&ownBefore.length<enemyBefore.length)p.bonus+=2;
  if(p.card.id==="ioty")p.bonus+=Math.min(2,ownBefore.length);
  if(p.card.id==="jurupari"&&enemyBefore.length>0)p.bonus+=2;
  if(p.card.id==="pisadeira"){const target=enemyBefore.slice().sort((a,b)=>powerFor(b)-powerFor(a))[0];if(target)target.bonus-=2;}
  p.revealed=true;state.played.push(p);
  if(p.card.id==="iara"){
   const target=[...state.played].filter(x=>x.lane===lane&&x.side===enemy).sort((a,b)=>powerFor(b)-powerFor(a))[0];
   if(target)target.bonus-=2;
  }
  if(p.card.id==="vitoria"&&p.side==="you"&&state.hand.length<7&&state.deck.length)state.hand.push(state.deck.shift());
  state.history.push(`${p.side==="you"?"Você":"Rival"} revelou ${p.card.name} em ${LOCATIONS.find(l=>l.id===lane).name}.`);
 }
}
function endTurn(){
 if(state.finished)return;
 botTurn();resolvePending();
 if(state.round>=6){state.finished=true;state.notice="A sexta rodada terminou. Confira o resultado final!";renderGame();$("result-panel").scrollIntoView({behavior:"smooth",block:"nearest"});return;}
 state.round++;state.energy=state.round;state.selected=null;
 if(state.deck.length&&state.hand.length<7)state.hand.push(state.deck.shift());
 if(state.botDeck.length&&state.botHand.length<7)state.botHand.push(state.botDeck.shift());
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