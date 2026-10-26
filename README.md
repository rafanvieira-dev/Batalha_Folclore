# Batalha do Folclore

Jogo de cartas estratégico 2D inspirado nas lendas brasileiras. Esta versão usa HTML, CSS e JavaScript puro, sem React, instalação de dependências ou servidor próprio.

## Como jogar
1. Abra o site e escolha **Jogar agora**.
2. Selecione uma carta na mão.
3. Escolha um dos três territórios para colocá-la.
4. Administre sua energia; ela aumenta a cada rodada.
5. Jogue seis rodadas. Vence quem controlar mais territórios pela soma de ataque e defesa.

## Publicação
O workflow em `.github/workflows/deploy-pages.yml` publica o conteúdo estático pelo GitHub Pages quando há alterações na branch `main`. Nas configurações do repositório, em **Settings → Pages**, selecione **GitHub Actions** como origem, se ainda não estiver selecionado.

## Arquivos
- `index.html`: estrutura da página.
- `style.css`: layout e design responsivo das cartas 2D.
- `script.js`: cartas, energia, turnos, rival e pontuação.

Protótipo local, sem login, banco de dados ou multiplayer online.