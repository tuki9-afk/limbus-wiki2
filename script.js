const search = document.getElementById("search");

if (search) {
  search.addEventListener("keyup", function () {
    const filtro = search.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const texto = card.innerText.toLowerCase();
      card.style.display = texto.includes(filtro) ? "block" : "none";
    });
  });
}
