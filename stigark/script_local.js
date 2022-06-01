let tellerContainer = document.querySelector(".teller");
let nullstillKnapp = document.querySelector(".nullstill");
let antallBesok = localStorage.getItem("page_view");

if (antallBesok) {
  antallBesok = Number(antallBesok) + 1;
  localStorage.setItem("page_view", antallBesok);
} else {
  antallBesok = 1;
  localStorage.setItem("page_view", 1);
}

tellerContainer.innerHTML = "Dette er ditt " + antallBesok + ". besøk på denne nettsiden"

nullstillKnapp.addEventListener("click", () => {
  antallBesok = 1;
  localStorage.setItem("page_view", 1);
  tellerContainer.innerHTML = "Dette er ditt " + antallBesok + ". besøk på denne nettsiden"
});

