document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "a3906c9bdd5a2532c87f7eb54d323e4e";

  const params = new URLSearchParams(window.location.search);
  const filmId = params.get("id");

  async function fetchFilm(id) {
    const url = `https://hp-api.lainocs.fr/characters`;
    const response = await fetch(url);
    const data = await response.json();
    displayFilm(data);
  }

  function displayCard(card) {
    const template = document.getElementById("film-details");

    template.style.display = "block"; // Rend la carte visible
    template.id = ""; // Enlève l'id pour éviter les doublons
    template.querySelector(".card-title").textContent = card.name;
    template.querySelector(".card-description").textContent = card.overview;
  }

  fetchcard(cardId);
});
