# Batalha do Folclore

Jogo de estratégia em arena 3D inspirado na dinâmica de batalhas com cartas, com personagens originais baseados no folclore brasileiro.

## Stack inicial
- Vite + React + TypeScript
- Three.js / React Three Fiber / Drei
- Vitest para testes
- Primeiro protótipo: arena 3D, torres, cartas e simulação de batalha local contra bot
- Firebase fica para uma etapa posterior; nenhuma chave secreta deve ser versionada

## Desenvolvimento local
```bash
npm install
npm run dev
```

## Roteiro
1. Construir uma arena 3D leve com câmera isométrica, terreno, rio, pontes e torres.
2. Implementar unidades, movimentação, alvo, ataque, vida e vitória/derrota.
3. Adicionar energia regenerativa, baralho de 8 cartas e invocação.
4. Desenvolver os 30 personagens e balancear atributos.
5. Adicionar persistência e autenticação somente quando o núcleo de jogo estiver estável.

A identidade visual pode se inspirar em convenções gerais do gênero (arena inclinada, partidas curtas, tropas automáticas e cartas), mas deve usar arte, UI e personagens originais, sem copiar ativos proprietários de outros jogos.
