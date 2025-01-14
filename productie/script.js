// script.js

let personnes = []; // Tableau pour stocker les données

// Charger les données
document.getElementById('loadButton').addEventListener('click', async () => {
  const response = await fetch('/data');
  personnes = await response.json();
  afficherPersonnes(personnes);

  // Activer les boutons de tri
  document.getElementById('sortAgeButton').disabled = false;
  document.getElementById('sortNameButton').disabled = false;
});

// Trier par âge
document.getElementById('sortAgeButton').addEventListener('click', () => {
  const sorted = [...personnes].sort((a, b) => a.age - b.age);
  afficherPersonnes(sorted);
});

// Trier par nom
document.getElementById('sortNameButton').addEventListener('click', () => {
  const sorted = [...personnes].sort((a, b) => a.nom.localeCompare(b.nom));
  afficherPersonnes(sorted);
});

// Afficher les données dans le DOM
function afficherPersonnes(data) {
  const dataDiv = document.getElementById('data');
  dataDiv.innerHTML = data.map((person, index) =>
    `<p>${index + 1}. ${person.nom}, âge : ${person.age}</p>`
  ).join('');
}
