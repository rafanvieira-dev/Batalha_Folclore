(() => {
  "use strict";
  const CARDS = [
    {id:"saci",name:"Saci-Pererê",title:"O redemoinho",art:"🌪️",cost:1,attack:3,defense:1,ability:"Quando entra, ganha +1 de poder se você estiver perdendo neste território.",colors:["#75503b","#c27b42"],bio:"O travesso guardião dos redemoinhos."},
    {id:"iara",name:"Iara",title:"A voz das águas",art:"🧜‍♀️",cost:2,attack:2,defense:4,ability:"No Rio das Iaras, recebe +2 de poder.",colors:["#205d68","#42a9aa"],bio:"A encantadora que protege os rios."},
    {id:"curupira",name:"Curupira",title:"Guardião da mata",art:"🌿",cost:2,attack:3,defense:3,ability:"Na Floresta Encantada, recebe +2 de poder.",colors:["#31573a","#7caa56"],bio:"Os pés virados confundem quem ameaça a floresta."},
    {id:"cuca",name:"Cuca",title:"A feiticeira",art:"🐊",cost:3,attack:5,defense:2,ability:"Se jogada na Vila Assombrada, recebe +2 de poder.",colors:["#49325e","#9670b9"],bio:"Uma feiticeira temida nas histórias populares."},
    {id:"boitata",name:"Boitatá",title:"A serpente de fogo",art:"🐍",cost:3,attack:4,defense:4,ability:"Recebe +1 de poder em qualquer território.",colors:["#765327","#d8a83e"],bio:"A chama viva que protege os campos."},
    {id:"boto",name:"Boto-cor-de-rosa",title:"O encantador",art:"🐬",cost:1,attack:2,defense:2,ability:"Ao entrar, compre uma carta extra ao fim da rodada.",colors:["#773f57","#d982a7"],bio:"O misterioso visitante das festas ribeirinhas."},
    {id:"mula",name:"Mula sem Cabeça",title:"A cavalgada",art:"🔥",cost:4,attack:6,defense:3,ability:"Grande poder para surpreender no fim da partida.",colors:["#71362d","#d56b43"],bio:"O estrondo de cascos anuncia sua chegada."},
    {id:"vitoria",name:"Vitória-Régia",title:"Flor da lua",art:"🪷",cost:2,attack:1,defense:5,ability:"Recebe +2 de poder no Rio das Iaras.",colors:["#315e52","#80c5a0"],bio:"A flor que nasceu de uma história de amor pela lua."},
    {id:"mapinguari",name:"Mapinguari",title:"O gigante da mata",art:"🦍",cost:4,attack:5,defense:5,ability:"Se for a única carta sua no território, recebe +2 de poder.",colors:["#554631","#9a7950"],bio:"Um gigante lendário que habita a floresta."},
    {id:"corposeco",name:"Corpo-Seco",title:"A alma errante",art:"👻",cost:2,attack:4,defense:1,ability:"Na Vila Assombrada, recebe +2 de poder.",colors:["#48484a","#a0a0a4"],bio:"Uma presença sombria das estradas antigas."},
    {id:"negrinho",name:"Negrinho do Pastoreio",title:"O guia",art:"🐎",cost:3,attack:3,defense:4,ability:"Ao ser jogado, recebe +1 de poder por cada território que você controla.",colors:["#59412e","#b58c56"],bio:"A figura lendária que ajuda a encontrar o que se perdeu."},
    {id:"maedagua",name:"Mãe-d'Água",title:"Senhora das fontes",art:"💧",cost:3,attack:3,defense:4,ability:"No Rio das Iaras, recebe +2 de poder.",colors:["#2d4b70","#72b8dc"],bio:"Espírito das águas doces e profundas."}
  ];
  const LOCATIONS = [
    {id:"forest",name:"Floresta Encantada",description:"A mata guarda seus segredos.",art:"🌳",bg:"#2b432b",glow:"#7c9c4b",kind:"forest"},
    {id:"river",name:"Rio das Iaras",description:"As águas mudam o destino.",art:"🌊",bg:"#1c3d4b",glow:"#50a7b0",kind:"river"},
    {id:"village",name:"Vila Assombrada",description:"A noite pertence às lendas.",art:"🏚️",bg:"#40302f",glow:"#ad7153",kind:"village"}
  ];
  const $ = id => document.getElementById(id);
  const state = {screen:"home",round:1,energy:1,hand:[],deck:[],played:[],selected:null,finished:false,sound:false,nextId:1};
  const shuffle = list => [...list].sort(()=>Math.random()-.5);
  const total = (card,lane,side,board) => {
    let power=card.attack+card.defense;
    if(card.id==="boitata") power+=1;
    if((card.id==="iara"||card.id==="vitoria"||card.id==="maedagua")&&lane==="river") power+=2;
    if(card.id==="curupira"&&lane==="forest") power+=2;
    if((card.id==="cuca"||card.id==="corposeco")&&lane==="village") power+=2;
    if(card.id==="mapinguari"&&board.filter(p=>p.lane===lane&&p.side===side).length===0) power+=2;
    if(card.id==="negrinho"&&side==="you"){
      const controlled=LOCATIONS.filter(l=>board.filter(p=>p.lane===l.id&&p.side==="you").reduce((n,p)=>n+p.card.attack+p.card.defense,0)>board.filter(p=>p.lane===l.id&&p.side==="bot").reduce((n,p)=>n+p.card.attack+p.card.defense,0)).length;
      power+=controlled;
    }
    if(card.id==="saci"){
      const you=board.filter(p=>p.lane===lane&&p.side==="you").reduce((n,p)=>n+p.card.attack+p.card.defense,0);
      const bot=board.filter(p=>p.lane===lane&&p.side==="bot").reduce((n,p)=>n+p.card.attack+p.card.defense,0);
      if(you<bot)power+=1;
    }
    return power;
  };
  const score = (lane,side) => state.played.filter(p=>p.lane===lane&&p.side===side).reduce((n,p)=>n+total(p.card,lane,side,state.played.filter(x=>x.uid!==p.uid)),0);
  const setMessage = text => { $("gameMessage").textContent=text; };
  function showScreen(name){
    state.screen=name;
    $("homeScreen").classList.toggle("hidden",name!=="home");
    $("gameScreen").classList.toggle("hidden",name!=="game");
    $("collectionScreen").classList.toggle("hidden",name!=="collection");
    if(name==="collection")renderCollection();
  }
  function startGame(){
    state.round=1;state.energy=1;state.selected=null;state.finished=false;state.played=[];state.deck=shuffle(CARDS);state.hand=state.deck.splice(0,4);state.nextId=1;
    showScreen("game");$("resultPanel").classList.add("hidden");$("endTurn").disabled=false;setMessage("Selecione uma carta e depois toque em um território para jogá-la.");renderGame();
  }
  function cardMarkup(card,handIndex=null,side="you",lane=null){
    const power=lane?total(card,lane,side,state.played.filter(p=>p.uid!==null)):card.attack+card.defense;
    const colors=card.colors;
    if(handIndex!==null){
      const selected=state.selected===handIndex;
      const disabled=card.cost>state.energy||state.finished;
      return `<button class="hand-card ${selected?"selected":""}" data-hand="${handIndex}" ${disabled?"disabled":""} aria-pressed="${selected}">
        <span class="card-top">${card.cost}</span><div class="card-art" style="--c1:${colors[0]};--c2:${colors[1]}"><span class="creature">${card.art}</span><span class="card-rune">✦</span></div>
        <div class="card-name">${card.name}</div><div class="card-subtitle">${card.title}</div><div class="card-stats"><span class="card-stat">⚔<b>${card.attack}</b></span><span class="card-stat">🛡<b>${card.defense}</b></span><span class="card-stat">✦<b>${card.attack+card.defense}</b></span></div><div class="card-ability">${card.ability}</div>
      </button>`;
    }
    return `<div class="board-card ${side==="bot"?"bot":""}" style="--c1:${colors[0]};--c2:${colors[1]}" title="${card.name}: ${card.ability}"><div class="board-art">${card.art}</div><div class="board-name">${card.name}</div><div class="board-power">${power} PODER</div></div>`;
  }
  function renderGame(){
    $("roundLabel").textContent=`RODADA ${state.round} / 6`;
    $("roundProgress").style.width=`${state.round/6*100}%`;
    $("energyValue").textContent=state.energy;$("energyMax").textContent=`/ ${state.round}`;
    $("energyDots").innerHTML=Array.from({length:6},(_,i)=>`<i class="${i<state.energy?"on":""}"></i>`).join("");
    $("hand").innerHTML=state.hand.map((c,i)=>cardMarkup(c,i)).join("");
    $("locations").innerHTML=LOCATIONS.map(l=>{
      const you=score(l.id,"you"),bot=score(l.id,"bot");
      const playedHere=state.played.filter(p=>p.lane===l.id);
      return `<article class="location"><div class="location-art" style="--loc-bg:${l.bg};--loc-glow:${l.glow}"><span>${l.art}</span></div><div class="location-head"><h3>${l.name}</h3><p>${l.description}</p></div><div class="score-row"><div class="score-side you"><small>VOCÊ</small><b>${you}</b></div><span class="score-vs">VS</span><div class="score-side"><small>RIVAL</small><b>${bot}</b></div></div><div class="lane-cards">${playedHere.map(p=>cardMarkup(p.card,null,p.side,p.lane)).join("")}</div><button class="location-play" data-lane="${l.id}" ${state.selected===null||state.finished?"disabled":""}>${state.selected===null?"ESCOLHA UMA CARTA":"JOGAR CARTA AQUI"}</button></article>`;
    }).join("");
    $("handHint").textContent=state.selected===null?"Selecione uma carta para jogar.":`Selecionada: ${state.hand[state.selected]?.name||"carta"} — escolha um território.`;
    $("endTurn").disabled=state.finished;
    $("hand").querySelectorAll("[data-hand]").forEach(btn=>btn.addEventListener("click",()=>selectCard(Number(btn.dataset.hand))));
    $("locations").querySelectorAll("[data-lane]").forEach(btn=>btn.addEventListener("click",()=>playCard(btn.dataset.lane)));
  }
  function selectCard(index){
    if(state.finished)return;
    const card=state.hand[index];if(!card)return;
    if(card.cost>state.energy){setMessage("Você não tem energia suficiente para essa carta. Termine a rodada para recuperar energia.");return;}
    state.selected=state.selected===index?null:index;
    setMessage(state.selected===null?"Seleção cancelada.":`${card.name} selecionado. Agora escolha um território.`);
    renderGame();
  }
  function playCard(lane){
    if(state.finished||state.selected===null)return;
    const card=state.hand[state.selected];if(!card)return;
    if(card.cost>state.energy){setMessage("Energia insuficiente.");return;}
    const beforeYou=score(lane,"you"),beforeBot=score(lane,"bot");
    state.played.push({uid:state.nextId++,card,lane,side:"you"});
    state.energy-=card.cost;state.hand.splice(state.selected,1);state.selected=null;
    // The computer takes a legal turn using the same energy budget. It prefers a lane it is losing.
    const botBudget=Math.min(state.round,Math.max(1,state.round));
    const candidates=state.deck.filter(c=>c.cost<=botBudget);
    if(candidates.length){
      const laneScores=LOCATIONS.map(l=>({id:l.id,diff:score(l.id,"you")-score(l.id,"bot")})).sort((a,b)=>b.diff-a.diff);
      const target=laneScores[0]?.id||lane;
      const botCard=shuffle(candidates).sort((a,b)=>b.attack+b.defense-(a.attack+a.defense))[0];
      if(botCard){state.deck=state.deck.filter(c=>c.id!==botCard.id);state.played.push({uid:state.nextId++,card:botCard,lane:target,side:"bot"});}
    }
    const diff=score(lane,"you")-score(lane,"bot");
    setMessage(`${card.name} entrou em ${LOCATIONS.find(l=>l.id===lane).name}. ${diff>=0?"Você está na frente neste território!":"O rival ainda domina este território."}`);
    renderGame();
  }
  function endTurn(){
    if(state.finished)return;
    if(state.round>=6){finishGame();return;}
    state.round++;state.energy=state.round;state.selected=null;
    if(state.deck.length){const next=state.deck.shift();state.hand.push(next);}
    if(state.deck.length&&state.hand.length<6&&Math.random()>.5)state.hand.push(state.deck.shift());
    setMessage(`Rodada ${state.round}: sua energia foi recarregada para ${state.energy}. Uma nova carta chegou à sua mão.`);
    renderGame();
  }
  function finishGame(){
    state.finished=true;state.selected=null;
    const lanes=LOCATIONS.map(l=>({name:l.name,you:score(l.id,"you"),bot:score(l.id,"bot")}));
    const won=lanes.filter(l=>l.you>l.bot).length,lost=lanes.filter(l=>l.bot>l.you).length;
    const tie=lanes.filter(l=>l.you===l.bot).length;
    const title=won>lost?"Você venceu!":lost>won?"O rival venceu!":"Empate lendário!";
    $("resultTitle").textContent=title;
    $("resultText").textContent=`Você conquistou ${won} território(s); o rival conquistou ${lost}. ${tie} território(s) terminaram empatados.`;
    $("resultPanel").classList.remove("hidden");setMessage("Partida encerrada. Confira a pontuação final de cada território.");renderGame();
    $("resultPanel").scrollIntoView({behavior:"smooth",block:"center"});
  }
  function renderCollection(){
    $("collectionGrid").innerHTML=CARDS.map(card=>`<article class="collection-card"><div class="card-art" style="--c1:${card.colors[0]};--c2:${card.colors[1]}"><span class="creature">${card.art}</span></div><div class="card-name">${card.name}</div><div class="card-subtitle">${card.title}</div><div class="card-stats"><span class="card-stat">⚔<b>${card.attack}</b></span><span class="card-stat">🛡<b>${card.defense}</b></span><span class="card-stat">✦<b>${card.attack+card.defense}</b></span></div><div class="card-ability">${card.ability}</div></article>`).join("");
  }
  $("startGame").addEventListener("click",startGame);
  $("openCollection").addEventListener("click",()=>showScreen("collection"));
  $("backHome").addEventListener("click",()=>showScreen("home"));
  $("collectionBack").addEventListener("click",()=>showScreen("home"));
  $("endTurn").addEventListener("click",endTurn);
  $("playAgain").addEventListener("click",startGame);
  $("soundToggle").addEventListener("click",()=>{state.sound=!state.sound;$("soundToggle").classList.toggle("active",state.sound);$("soundToggle").title=state.sound?"Efeito visual ativado":"Som desligado";setMessage(state.sound?"Efeitos visuais ativados.":"Efeitos visuais desativados.");});
  // Keep all game interaction local: no login, API key, or server required.
})();