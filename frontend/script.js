// Rolagem
function scrollToFilmes() {
    document.getElementById("filmes").scrollIntoView({ behavior: "smooth" });
}

// API TMDB
const API_KEY = "66505caf082677a36185c8e2af91abff";
const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-BR`;

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const lista = document.getElementById("lista-filmes");
        lista.innerHTML = "";

        data.results.forEach(filme => {
            lista.innerHTML += `
                <div class="card-filme">
                    <img src="https://image.tmdb.org/t/p/w200${filme.poster_path}">
                    <h4>${filme.title}</h4>
                </div>
            `;
        });
    });

document.getElementById("formContato").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const resposta = await fetch("http://localhost:3000/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem })
    });

    const dados = await resposta.json();

    const feedback = document.getElementById("feedback");

    if (dados.sucesso) {
        feedback.innerText = "Mensagem enviada com sucesso!";
        feedback.style.color = "lightgreen";
    } else {
        feedback.innerText = dados.erro;
        feedback.style.color = "red";
    }
});

