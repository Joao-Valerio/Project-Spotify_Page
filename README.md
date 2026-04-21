# Spotify Page

Aplicação front-end inspirada na experiência visual do Spotify Web, desenvolvida com React. O projeto apresenta navegação entre artistas e músicas, catálogo renderizado a partir de dados locais e um player com reprodução, pausa e avanço entre faixas.

## Visão Geral

Este projeto foi criado com foco em prática de desenvolvimento front-end, componentização e roteamento em aplicações React. A interface simula um ambiente de streaming musical com páginas dedicadas para artistas, listagem de músicas e tela de reprodução.

## Tecnologias Utilizadas

- React 19
- Vite 6
- React Router DOM 7
- JavaScript (ESModules)
- CSS3
- Font Awesome
- ESLint

## Funcionalidades

- Página inicial com destaques de artistas e músicas
- Navegação entre rotas com `React Router`
- Página individual de artista com banner e músicas populares
- Página individual de música com player funcional
- Controles de play, pause, faixa anterior e próxima faixa
- Reprodução automática ao acessar uma música a partir das listagens
- Interface moderna inspirada no layout do Spotify

## Pré-requisitos

Antes de executar o projeto, você precisa ter instalado:

- `Node.js` 18 ou superior
- `npm` 9 ou superior
- Git (opcional, apenas para clonagem do repositório)

## Instalação

Siga o passo a passo abaixo para rodar o projeto localmente:

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/spotify-page-clone.git
```

2. Acesse a pasta do projeto:

```bash
cd spotify-page-clone
```

3. Instale as dependências:

```bash
npm install
```

## Como Usar

1. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

2. Abra o navegador no endereço exibido no terminal, normalmente:

```bash
http://localhost:5173
```

3. Navegue pela aplicação:

- Acesse a página inicial para visualizar artistas e músicas em destaque
- Clique em `Mostrar tudo` para abrir as listagens completas
- Entre na página de um artista para ver as músicas populares
- Abra uma música para utilizar o player e navegar entre faixas

## Scripts Disponíveis

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Estrutura do Projeto

```bash
src/
  Components/   # Componentes reutilizáveis da interface
  pages/        # Páginas da aplicação
  assets/       # Base local de artistas e músicas
```

## Exemplos de Funcionamento

Adicione abaixo capturas de tela ou GIFs do projeto em execução para tornar a apresentação mais completa.

### Página Inicial

```md
![Preview da página inicial](./docs/images/home-preview.png)
```

### Página do Artista

```md
![Preview da página do artista](./docs/images/artist-preview.png)
```

### Player em Funcionamento

```md
![Demonstração do player](./docs/gifs/player-demo.gif)
```

Se preferir, substitua os caminhos acima pelos arquivos reais que você usar no repositório.

## Objetivos do Projeto

- Praticar componentização com React
- Trabalhar com navegação entre páginas
- Simular uma interface real de streaming musical
- Exercitar organização de código em aplicações front-end

## Contato

Para sugestões, melhorias ou dúvidas sobre o projeto, utilize as `Issues` deste repositório ou adicione aqui seus canais de contato:

- GitHub: `https://github.com/seu-usuario`
- LinkedIn: `https://www.linkedin.com/in/seu-usuario`
- E-mail: `seu-email@dominio.com`

## Licença

Este projeto ainda não possui uma licença definida. Se desejar publicá-lo de forma profissional, recomenda-se adicionar um arquivo `LICENSE`, como `MIT`.
