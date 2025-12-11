const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let mensagens = [];

app.post("/contato", (req, res) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
        return res.status(400).json({ erro: "Preencha todos os campos!" });
    }

    mensagens.push({ nome, email, mensagem });

    res.json({ sucesso: true, mensagem: "Mensagem recebida!" });
});

app.get("/mensagens", (req, res) => {
    res.json(mensagens);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
