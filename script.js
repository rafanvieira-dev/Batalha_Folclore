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
const DECK_SIZE=12,MAX_DECKS=5,DECK_STORAGE_KEY="batalhaFolcloreDeckProfiles";
const DEFAULT_DECK_IDS=CARDS.slice(0,DECK_SIZE).map(c=>c.id);
function normalizeDeck(ids){const clean=Array.isArray(ids)?ids.filter((id,i,a)=>CARDS.some(c=>c.id===id)&&a.indexOf(id)===i):[];for(const c of CARDS){if(clean.length>=DECK_SIZE)break;if(!clean.includes(c.id))clean.push(c.id);}return clean.slice(0,DECK_SIZE);}
function loadDeckProfiles(){
 try{
  const saved=JSON.parse(localStorage.getItem(DECK_STORAGE_KEY)||"null");
  if(saved&&Array.isArray(saved.decks)&&saved.decks.length){
   const decks=saved.decks.slice(0,MAX_DECKS).map((d,i)=>({id:d.id||"deck-"+(i+1),name:"Deck "+(i+1),cards:normalizeDeck(d.cards)}));
   const activeId=decks.some(d=>d.id===saved.activeId)?saved.activeId:decks[0].id;
   return {decks,activeId};
  }
  const legacy=JSON.parse(localStorage.getItem("batalhaFolcloreDeck")||"null");
  const cards=normalizeDeck(legacy);
  return {decks:[{id:"deck-1",name:"Deck 1",cards}],activeId:"deck-1"};
 }catch{return {decks:[{id:"deck-1",name:"Deck 1",cards:[...DEFAULT_DECK_IDS]}],activeId:"deck-1"};}
}
let deckProfiles=loadDeckProfiles();
function persistDeckProfiles(){try{localStorage.setItem(DECK_STORAGE_KEY,JSON.stringify(deckProfiles));}catch{toast("Não foi possível salvar neste navegador.");}}
let activeDeckIds=[...(deckProfiles.decks.find(d=>d.id===deckProfiles.activeId)||deckProfiles.decks[0]).cards],draftDeckIds=[...activeDeckIds];
function activeDeck(){return deckProfiles.decks.find(d=>d.id===deckProfiles.activeId)||deckProfiles.decks[0];}
function makeDeck(ids=CARDS.map(c=>c.id)){return shuffle(ids.map(id=>CARDS.find(c=>c.id===id)).filter(Boolean).map((c,i)=>({...c,instanceId:"c"+i+"_"+Math.random().toString(36).slice(2,7)})));}

function freshState(){
 const playerDeck=makeDeck(activeDeckIds), botDeck=makeDeck();
 return {round:1,energy:1,resolving:false,hand:playerDeck.splice(0,3),deck:playerDeck,botHand:botDeck.splice(0,3),botDeck,played:[],pending:[],selected:null,finished:false,uid:1,notice:"Escolha uma carta e um território. Suas jogadas serão reveladas ao encerrar a rodada.",history:[]};
}
function basePower(card,lane){let n=card.attack+card.defense;if(card.id==="curupira"&&lane==="forest")n+=3;if(card.id==="boto"&&lane==="river")n+=3;if(card.id==="boitata"&&lane==="village")n+=2;return n;}
function powerFor(entry){return Math.max(0,basePower(entry.card,entry.lane)+(entry.bonus||0));}
function laneCards(lane,side,includePending=true){return [...state.played,...(includePending?state.pending:[])].filter(p=>p.lane===lane&&p.side===side);}
function scoreList(){return LOCATIONS.map(location=>({location,you:state.played.filter(p=>p.lane===location.id&&p.side==="you").reduce((n,p)=>n+powerFor(p),0),bot:state.played.filter(p=>p.lane===location.id&&p.side==="bot").reduce((n,p)=>n+powerFor(p),0)}));}
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2300);}
function showScreen(name){$("home-screen").classList.toggle("hidden",name!=="home");$("collection-screen").classList.toggle("hidden",name!=="collection");$("game-screen").classList.toggle("hidden",name!=="game");const deckScreen=$("deck-screen");if(deckScreen)deckScreen.classList.toggle("hidden",name!=="deck");window.scrollTo({top:0,behavior:"smooth"});}
function cardArt(card){return card.image?'<img class="card-full-image" src="'+card.image+'" alt="'+card.name+'" loading="lazy" onerror="this.classList.add(\'image-missing\')">':'<span class="card-fallback">'+card.name+'</span>';}
function cardMarkup(card,classes=""){return `<button type="button" class="hand-card ${classes}" style="--card:${card.color}" data-card="${card.instanceId}" aria-label="Selecionar ${card.name}; custo ${card.cost}; poder ${card.attack}"><img class="card-full-image" src="${card.image}" alt="${card.name}" loading="lazy" onerror="this.classList.add('image-missing')"><span class="card-select-glow" aria-hidden="true"></span></button>`;}
let detailCardContext="collection", detailCardInstance=null, dragTimer=null, activeDrag=null, suppressCardClick=false;
function showCardDetails(card,context="collection"){
 detailCardContext=context;detailCardInstance=card.instanceId||null;
 const dialog=$("card-detail-dialog"),content=$("card-detail-content");
 if(!dialog||!content)return;
 content.innerHTML=`<div class="card-detail-art" style="--card:${card.color}"><img src="${card.image||""}" alt="${card.name}" onerror="this.classList.add('image-missing')"><span class="card-detail-cost">${card.cost}</span></div><div class="card-detail-info"><div class="eyebrow">${context==="collection"?"BESTIÁRIO DO FOLCLORE":"CARTA DA SUA MÃO"}</div><h2>${card.name}</h2><p class="card-detail-subtitle">${card.subtitle||"Uma lenda brasileira"}</p><div class="card-detail-stats"><span><small>CUSTO</small><strong>${card.cost}</strong></span><span><small>ATAQUE</small><strong>${card.attack}</strong></span><span><small>DEFESA</small><strong>${card.defense||0}</strong></span><span><small>PODER BASE</small><strong>${(card.attack||0)+(card.defense||0)}</strong></span></div><div class="card-detail-ability"><strong>Habilidade</strong><p>${card.ability||"Nenhuma habilidade especial."}</p></div></div>`;
 const choose=$("detail-select-card");choose.classList.toggle("hidden",context!=="hand");choose.textContent="Selecionar carta";
 if(!dialog.open)dialog.showModal();
}
function closeCardDetails(){const d=$("card-detail-dialog");if(d&&d.open)d.close();}
function deckCardMarkup(card,selected){return `<button type="button" class="deck-card ${selected?"is-selected":""}" data-deck-card="${card.id}" aria-pressed="${selected}" style="--card:${card.color}"><span class="deck-card-art"><img src="${card.image}" alt="" loading="lazy" onerror="this.classList.add('image-missing')"></span><span class="deck-card-meta"><strong>${card.name}</strong><small>Custo ${card.cost} · Poder ${card.attack+(card.defense||0)}</small></span><span class="deck-card-toggle">${selected?"✓ No deck":"＋ Adicionar"}</span><span class="deck-card-details-hint">ⓘ Ver detalhes</span></button>`;}
function renderDeckTabs(){
 const tabs=$("deck-tabs");if(!tabs)return;
 tabs.innerHTML=deckProfiles.decks.map((d,i)=>`<button type="button" role="tab" class="deck-tab ${d.id===deckProfiles.activeId?"active":""}" data-deck-tab="${d.id}" aria-selected="${d.id===deckProfiles.activeId}">Deck ${i+1}</button>`).join("");
 $("deck-slots").textContent=deckProfiles.decks.length+"/"+MAX_DECKS;
 $("add-deck-button").disabled=deckProfiles.decks.length>=MAX_DECKS;
 tabs.querySelectorAll("[data-deck-tab]").forEach(btn=>btn.addEventListener("click",()=>{
  const next=deckProfiles.decks.find(d=>d.id===btn.dataset.deckTab);if(!next)return;
  deckProfiles.activeId=next.id;activeDeckIds=[...next.cards];draftDeckIds=[...next.cards];persistDeckProfiles();renderDeckBuilder();
 }));
}
function renderDeckBuilder(){
 const selected=CARDS.filter(c=>draftDeckIds.includes(c.id));
 renderDeckTabs();
 $("deck-count").textContent=draftDeckIds.length+" / "+DECK_SIZE+" cartas";
 $("deck-status").textContent=draftDeckIds.length===DECK_SIZE?(draftDeckIds.join("|")===activeDeckIds.join("|")?"Deck salvo.":"Pronto para salvar suas alterações."):"Selecione mais "+(DECK_SIZE-draftDeckIds.length)+" carta(s).";
 $("deck-available-count").textContent=CARDS.length+" lendas";
 $("deck-selected-grid").innerHTML=selected.length?selected.map(c=>deckCardMarkup(c,true)).join(""):'<p class="deck-empty">Seu deck está vazio. Adicione cartas da coleção.</p>';
 $("deck-library-grid").innerHTML=CARDS.filter(c=>!draftDeckIds.includes(c.id)).map(c=>deckCardMarkup(c,false)).join("")||'<p class="deck-empty">Todas as lendas selecionadas.</p>';
 $("save-deck-button").disabled=draftDeckIds.length!==DECK_SIZE||draftDeckIds.join("|")===activeDeckIds.join("|");
 document.querySelectorAll("[data-deck-card]").forEach(el=>el.addEventListener("click",e=>{if(e.target.closest(".deck-card-details-hint")){const detail=CARDS.find(c=>c.id===el.dataset.deckCard);if(detail)showCardDetails(detail,"collection");return;}
  const id=el.dataset.deckCard;
  if(draftDeckIds.includes(id))draftDeckIds=draftDeckIds.filter(x=>x!==id);
  else if(draftDeckIds.length<DECK_SIZE)draftDeckIds.push(id);
  else {toast("Seu deck já tem 12 cartas. Remova uma antes de adicionar outra.");return;}
  renderDeckBuilder();
 }));
}
function renderCollection(){$("collection-grid").innerHTML=CARDS.map(c=>`<button type="button" class="collection-card" style="--card:${c.color}" data-collection-card="${c.id}" aria-label="Ver detalhes de ${c.name}"><img class="card-full-image" src="${c.image}" alt="${c.name}" loading="lazy" onerror="this.classList.add('image-missing')"><span class="collection-card-caption"><strong>${c.name}</strong><small>Custo ${c.cost} · Poder ${c.attack+(c.defense||0)}</small></span></button>`).join("");
 $("collection-grid").querySelectorAll("[data-collection-card]").forEach(el=>el.addEventListener("click",()=>{const card=CARDS.find(c=>c.id===el.dataset.collectionCard);if(card)showCardDetails(card,"collection");}));
}
function attachHandInteractions(){
 $("player-hand").querySelectorAll("[data-card]").forEach(el=>{
  el.addEventListener("click",()=>{if(suppressCardClick){suppressCardClick=false;return;}const card=state&&state.hand.find(c=>c.instanceId===el.dataset.card);if(card)showCardDetails(card,"hand");});
  el.addEventListener("pointerdown",e=>{
   if(e.button!==undefined&&e.button!==0)return;
   try{el.setPointerCapture(e.pointerId);}catch{}
   const id=el.dataset.card;
   clearTimeout(dragTimer);
   dragTimer=setTimeout(()=>{if(!state||state.finished||state.resolving)return;const card=state.hand.find(c=>c.instanceId===id);if(!card)return;activeDrag={id,card,ghost:el.cloneNode(true),lane:null};activeDrag.ghost.classList.add("card-drag-ghost");activeDrag.ghost.style.width="100px";activeDrag.ghost.style.height="145px";activeDrag.ghost.style.position="fixed";activeDrag.ghost.style.zIndex="9999";activeDrag.ghost.style.pointerEvents="none";document.body.appendChild(activeDrag.ghost);el.classList.add("dragging");suppressCardClick=true;moveDragGhost(e.clientX,e.clientY);},430);
  });
  el.addEventListener("pointermove",e=>{if(activeDrag&&activeDrag.id===el.dataset.card){e.preventDefault();moveDragGhost(e.clientX,e.clientY);}});
  const release=e=>{clearTimeout(dragTimer);if(!activeDrag||activeDrag.id!==el.dataset.card)return;const lane=activeDrag.lane;activeDrag.ghost.remove();activeDrag=null;el.classList.remove("dragging");document.querySelectorAll(".location.drop-target").forEach(n=>n.classList.remove("drop-target"));if(lane){const card=state&&state.hand.find(c=>c.instanceId===el.dataset.card);if(card){state.selected=card.instanceId;playCard(lane);}}setTimeout(()=>{suppressCardClick=false;},80);};
  el.addEventListener("pointerup",release);el.addEventListener("pointercancel",release);
 });
}
function moveDragGhost(x,y){if(!activeDrag)return;activeDrag.ghost.style.left=(x-50)+"px";activeDrag.ghost.style.top=(y-72)+"px";activeDrag.lane=null;document.querySelectorAll(".location.drop-target").forEach(n=>n.classList.remove("drop-target"));const target=document.elementFromPoint(x,y)?.closest("[data-lane]");if(target){activeDrag.lane=target.dataset.lane;target.classList.add("drop-target");}}
function renderGame(){
 $("round-number").textContent=state.round;$("battle-round-orb").textContent=state.round;$("energy-value").textContent=`${state.energy} / ${state.round}`;$("hand-count").textContent=state.hand.length;
 $("energy-pips").innerHTML=Array.from({length:6},(_,i)=>`<span class="energy-pip ${i<state.energy?"active":""}"></span>`).join("");$("turn-hint").textContent=state.notice;
 const totals=scoreList();
 $("locations").innerHTML=LOCATIONS.map((loc,i)=>{
  const s=totals.find(t=>t.location.id===loc.id);
  const youCount=laneCards(loc.id,"you").length,botCount=laneCards(loc.id,"bot").length;
  const sideCards=(side)=>{const cards=[...state.played,...state.pending].filter(p=>p.lane===loc.id&&p.side===side);return cards.length?cards.map(p=>{const face=p.revealed;return `<div class="board-card ${side==="bot"?"bot":"you"} ${face?"face-up":"face-down"} ${p.revealing?"revealing":""}" title="${face?p.card.name+" — "+powerFor(p)+" poder":"Carta oculta até encerrar a rodada"}" aria-label="${face?p.card.name:"Carta virada para baixo"}">${face?`<img class="card-full-image" src="${p.card.image}" alt="${p.card.name}" loading="lazy" onerror="this.classList.add('image-missing')">`:`<div class="card-back-design" aria-hidden="true"><span class="card-back-mark">✦</span><span class="card-back-title">BATALHA<br>DO FOLCLORE</span><span class="card-back-rune">ᛟ</span></div>`}</div>`;}).join(""):'<span class="empty-slot">— espaço vazio —</span>';};
  return `<article class="location" style="--loc:${loc.color}" data-lane="${loc.id}" aria-label="Território"><div class="lane-side opponent-side"><div class="lane-card-row">${sideCards("bot")}</div></div><div class="scenario-center"><div class="scenario-art" aria-hidden="true">${loc.emoji}</div><div class="score-row" aria-label="Pontuação do território"><div class="score-side bot"><strong>${s.bot}</strong></div><span class="score-vs">◆</span><div class="score-side"><strong>${s.you}</strong></div></div></div><div class="lane-side player-side"><div class="lane-card-row">${sideCards("you")}</div></div></article>`;
 }).join("");
 $("player-hand").innerHTML=state.hand.map(c=>cardMarkup(c,`${state.selected===c.instanceId?"selected":""} ${c.cost>state.energy?"unaffordable":""}`)).join("");
 attachHandInteractions();
 $("locations").querySelectorAll("[data-lane]").forEach(el=>el.addEventListener("click",()=>playCard(el.dataset.lane)));
 $("locations").querySelectorAll(".board-card.revealing").forEach(el=>el.addEventListener("animationend",()=>{el.classList.remove("revealing");const card=state.played.find(p=>String(p.uid)===el.dataset.uid);if(card)card.revealing=false;},{once:true}));
 $("end-turn-button").disabled=state.finished;
 $("result-panel").classList.toggle("hidden",!state.finished);
 if(state.finished){
  const t=scoreList(),you=t.filter(s=>s.you>s.bot).length,bot=t.filter(s=>s.bot>s.you).length,ties=t.filter(s=>s.you===s.bot).length;
  const headline=you>bot?"VITÓRIA!":you===bot?"EMPATE!":"DERROTA!";
  const message=you>bot?"Você dominou o folclore e venceu o duelo!":you===bot?"As lendas terminaram em equilíbrio. Que tal uma revanche?":"O rival conquistou mais territórios desta vez. Tente outra estratégia!";
  const breakdown=t.map(s=>`<div class="final-lane-score"><span>${s.location.emoji} ${s.location.name}</span><strong class="${s.you>s.bot?"lane-win-you":s.bot>s.you?"lane-win-bot":"lane-draw"}">${s.you} <i>×</i> ${s.bot}</strong><small>${s.you>s.bot?"Você venceu":s.bot>s.you?"Rival venceu":"Empate"}</small></div>`).join("");
  $("result-panel").innerHTML=`<div class="final-result-copy"><div class="eyebrow">FIM DE JOGO · 6 RODADAS</div><h3 class="${you>bot?"result-win":you===bot?"result-draw":"result-loss"}">${headline}</h3><p>${message}</p><p class="result-score">Cenários conquistados: você <strong>${you}</strong> · rival <strong>${bot}</strong> · empatados <strong>${ties}</strong>.</p><div class="final-lane-breakdown">${breakdown}</div></div><div class="result-actions"><button class="button gold" id="play-again">Jogar novamente ↻</button><button class="button quiet" id="exit-game">Sair para o início ⌂</button></div>`;
  $("play-again").addEventListener("click",startGame);
  $("exit-game").addEventListener("click",()=>{state=null;showScreen("home");});
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
  p.revealed=true;p.revealing=true;state.played.push(p);
  if(p.card.id==="iara"){
   const target=[...state.played].filter(x=>x.lane===lane&&x.side===enemy).sort((a,b)=>powerFor(b)-powerFor(a))[0];
   if(target)target.bonus-=2;
  }
  if(p.card.id==="vitoria"&&p.side==="you"&&state.hand.length<7&&state.deck.length)state.hand.push(state.deck.shift());
  state.history.push(`${p.side==="you"?"Você":"Rival"} revelou ${p.card.name} em ${LOCATIONS.find(l=>l.id===lane).name}.`);
 }
}
function finishGame(){
 if(!state)return;
 state.pending.forEach(p=>{p.revealed=true;p.revealing=false;state.played.push(p);});
 state.pending=[];
 state.finished=true;state.resolving=false;state.selected=null;
 state.notice="Fim da sexta rodada. Resultado final:";
 const totals=LOCATIONS.map(location=>{
  const you=state.played.filter(p=>p.lane===location.id&&p.side==="you").reduce((n,p)=>n+powerFor(p),0);
  const bot=state.played.filter(p=>p.lane===location.id&&p.side==="bot").reduce((n,p)=>n+powerFor(p),0);
  return {location,you,bot};
 });
 const you=totals.filter(s=>s.you>s.bot).length,bot=totals.filter(s=>s.bot>s.you).length,ties=totals.filter(s=>s.you===s.bot).length;
 const headline=you>bot?"VITÓRIA":you===bot?"EMPATE":"DERROTA";
 const message=you>bot?"Parabéns! Você venceu em mais territórios.":you===bot?"A partida terminou empatada.":"O rival venceu em mais territórios. Tente novamente!";
 const breakdown=totals.map(s=>'<div class="final-lane-score"><span>'+s.location.emoji+' '+s.location.name+'</span><strong class="'+(s.you>s.bot?"lane-win-you":s.bot>s.you?"lane-win-bot":"lane-draw")+'">'+s.you+' × '+s.bot+'</strong><small>'+(s.you>s.bot?"Você venceu":s.bot>s.you?"Rival venceu":"Empate")+'</small></div>').join("");
 const panel=$("result-panel");
 panel.classList.remove("hidden");
 panel.innerHTML='<div class="final-result-copy"><div class="eyebrow">FIM DE JOGO · 6 RODADAS</div><h3 class="'+(you>bot?"result-win":you===bot?"result-draw":"result-loss")+'">'+headline+'</h3><p>'+message+'</p><p class="result-score">Territórios vencidos: você <strong>'+you+'</strong> · rival <strong>'+bot+'</strong> · empatados <strong>'+ties+'</strong>.</p><div class="final-lane-breakdown">'+breakdown+'</div></div><div class="result-actions"><button class="button gold" id="play-again">Jogar novamente ↻</button><button class="button quiet" id="exit-game">Sair para o início ⌂</button></div>';
 $("play-again").addEventListener("click",startGame);
 $("exit-game").addEventListener("click",()=>{state=null;showScreen("home");});
 $("end-turn-button").disabled=true;
 panel.scrollIntoView({behavior:"smooth",block:"nearest"});
}
async function endTurn(){
 if(!state||state.finished||state.resolving)return;
 state.resolving=true;
 const button=$("end-turn-button");
 if(button)button.disabled=true;
 try{
  // O rival joga e todas as cartas preparadas são contabilizadas nesta rodada.
  botTurn();
  state.notice="Revelando as cartas e calculando os territórios...";
  renderGame();
  if(state.round<6) await new Promise(resolve=>setTimeout(resolve,650));
  resolvePending();
 }catch(error){
  console.error("Falha ao resolver rodada:",error);
  // Mesmo que uma habilidade tenha erro, não deixa a partida presa na rodada final.
  if(state.round>=6){
   state.pending.forEach(p=>{p.revealed=true;p.revealing=false;state.played.push(p);});
   state.pending=[];
  }
 }finally{
  if(state)state.resolving=false;
 }
 if(!state)return;
 if(state.round>=6){
  // Finalização síncrona: não avança para uma sétima rodada.
  finishGame();
  renderGame();
  const panel=$("result-panel");
  if(panel){panel.classList.remove("hidden");panel.style.display="flex";panel.scrollIntoView({behavior:"smooth",block:"start"});}
  const endButton=$("end-turn-button");
  if(endButton)endButton.disabled=true;
  return;
 }
 state.round++;
 state.energy=state.round;
 state.selected=null;
 if(state.deck.length&&state.hand.length<7)state.hand.push(state.deck.shift());
 if(state.botDeck.length&&state.botHand.length<7)state.botHand.push(state.botDeck.shift());
 state.notice=`Rodada ${state.round}: energia renovada para ${state.energy}. Escolha suas cartas; as jogadas serão reveladas ao fim da rodada.`;
 renderGame();
}
function startGame(){state=freshState();showScreen("game");renderGame();}
$("start-button").addEventListener("click",startGame);
$("collection-button").addEventListener("click",()=>{renderCollection();showScreen("collection");});
$("deck-button").addEventListener("click",()=>{draftDeckIds=[...activeDeckIds];renderDeckBuilder();showScreen("deck");});
$("deck-back").addEventListener("click",()=>showScreen("home"));
$("save-deck-button").addEventListener("click",()=>{if(draftDeckIds.length!==DECK_SIZE)return;activeDeckIds=[...draftDeckIds];const deck=activeDeck();deck.cards=[...activeDeckIds];persistDeckProfiles();renderDeckBuilder();toast(deck.name+" salvo! Será usado na próxima partida.");});
$("add-deck-button").addEventListener("click",()=>{if(deckProfiles.decks.length>=MAX_DECKS){toast("Você já criou o máximo de 5 decks.");return;}const n=deckProfiles.decks.length+1,id="deck-"+Date.now();const cards=[...DEFAULT_DECK_IDS];deckProfiles.decks.push({id,name:"Deck "+n,cards});deckProfiles.activeId=id;activeDeckIds=[...cards];draftDeckIds=[...cards];persistDeckProfiles();renderDeckBuilder();toast("Deck "+n+" criado. Personalize suas 12 cartas.");});

$("collection-back").addEventListener("click",()=>showScreen("home"));
$("brand-home").addEventListener("click",e=>{e.preventDefault();showScreen("home");});
$("restart-button").addEventListener("click",startGame);
$("end-turn-button").addEventListener("click",endTurn);
$("help-button").addEventListener("click",()=>$("help-dialog").showModal());
$("close-help").addEventListener("click",()=>$("help-dialog").close());
$("got-it").addEventListener("click",()=>{$("help-dialog").close();startGame();});
$("close-card-detail").addEventListener("click",closeCardDetails);
$("close-card-detail-action").addEventListener("click",closeCardDetails);
$("detail-select-card").addEventListener("click",()=>{if(detailCardContext==="hand"&&state&&detailCardInstance){selectCard(detailCardInstance);}closeCardDetails();});

renderCollection();