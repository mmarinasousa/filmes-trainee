# 🎬 CineTrainee — Lançamentos de Filmes

Projeto desenvolvido para a **Atividade Trainee de Projetos da Calang.io 2025.2**, consistindo em um site responsivo sobre **lançamentos de filmes**, com integração de API e back-end em Node.js.  
O objetivo é praticar conceitos fundamentais de desenvolvimento web: HTML, CSS, JavaScript, consumo de API, rotas de back-end e comunicação via fetch.

---

## 📁 Estrutura do Projeto
filmes-trainee/
│── backend/
│ └── server.js
│── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
└── README.md

---

## 🌐 Tecnologias Utilizadas

### **Front-end**
- HTML5  
- CSS3  
- JavaScript (ES6+)

### **Back-end**
- Node.js  
- Express  
- CORS  

### **API Externa**
- **TMDB (The Movie Database)**  
Usada para buscar os lançamentos mais recentes de filmes.

---

# 🧭 Seções do Site

### ✔ Navbar  
Barra de navegação com links âncora para todas as seções principais.

### ✔ Apresentação  
Inclui título, subtítulo e botão com rolagem suave para a seção de filmes.

### ✔ Hero  
Imagem de fundo em destaque com frase chamativa relacionada ao cinema.

### ✔ Seção “Lançamentos”  
Lista de filmes gerada dinamicamente a partir da API TMDB.  
Inclui:
- pôster  
- título  
- estrutura responsiva em grid  

### ✔ Contato  
Formulário com:
- Nome  
- Email  
- Mensagem  
- Validação no front-end  
- Envio para o back-end (rota POST)  
- Feedback visual para o usuário  

---

# 🚀 Funcionalidades Implementadas

| Funcionalidade | Status |
|----------------|--------|
| Navbar | ✔ |
| Hero | ✔ |
| Apresentação | ✔ |
| Seção extra (Lançamentos) | ✔ |
| Consumo de API externa (TMDB) | ✔ |
| Formulário funcional | ✔ |
| Rota GET no back-end | ✔ |
| Rota POST no back-end | ✔ |
| Responsividade | ✔ |
| Feedback visual | ✔ |

---

# 🔧 Rotas do Back-End (Node.js + Express)

### **POST `/contato`**
Recebe os dados do formulário.

**Body esperado:**
```json
{
  "nome": "Usuário",
  "email": "exemplo@email.com",
  "mensagem": "Texto da mensagem"
}

**Retorno:** 
{
  "sucesso": true,
  "mensagem": "Mensagem recebida!"
}

GET /mensagens

Retorna todas as mensagens enviadas pelo formulário.

Exemplo:

[
  {
    "nome": "Marina",
    "email": "teste@gmail.com",
    "mensagem": "Olá!"
  }
]

🛠 Como Rodar o Projeto

  🟩 1. Back-end (Node)

  No terminal:

  cd filmes-trainee
  node backend/server.js

  O servidor inicia em:

  http://localhost:3000

  🟦 2. Front-end

  Abra o arquivo index.html com o Live Server do VS Code.


