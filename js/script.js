const url = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let count = 0; // initalisation variable

window.onload = function () {
  // Chargement des blagues sauvegardées depuis le LocalStorage
  const blaguesExistants = JSON.parse(localStorage.getItem("blagues")) || [];

  // Boucle pour afficher les blagues sauvegardées dans le tableau
  for (let i = 0; i < blaguesExistants.length; i++) {
    const blague = blaguesExistants[i];

    // Création de la structure pour le tableau
    let addcolonne = "";
    addcolonne += `<tr id="id${i + 1}">`;
    addcolonne += "<td>" + blague.setup + "</td>";
    addcolonne += "<td>" + blague.delivery + "</td>";
    addcolonne += `<td><button onclick="byebye('id${i + 1}')">X</button></td>`; // création button supprimer de la ligne 
    addcolonne += "</tr>";

    // Ajout de la blague au tableau
    document.getElementById("tableau").innerHTML += addcolonne;
  }
};
// Pour stocker dans le localStorage 
function sauvegarderBlagueDansLocalStorage(blague) {
  const blaguesExistants = JSON.parse(localStorage.getItem("blagues")) || [];
  blaguesExistants.push(blague);
  localStorage.setItem("blagues", JSON.stringify(blaguesExistants));
}

// Génére une blague depuis l'url 
function blague() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      count = count + 1; // l'incrémentation permet de mettre une id a la blague
      let addcolonne = "";
      addcolonne += `<tr id="id${count}">`; // id de la blague 
      addcolonne += "<td>" + data.setup + "</td>";
      addcolonne += "<td>" + data.delivery + "</td>";
      addcolonne += `<td><button onclick="byebye('id${count}')">X</button></td>`;
      addcolonne += "</tr>";
      document.getElementById("tableau").innerHTML += addcolonne;

      // Sauvegarder la blague dans le LocalStorage
      sauvegarderBlagueDansLocalStorage(data);
    })
    .catch(error => console.error('Erreur lors de la récupération des données :', error));
}

// Fonction pour supprimer une ligne
function byebye(a) {
    const element = document.getElementById(a);
    if (element) {
      element.remove();
  
      // Mettre à jour le LocalStorage après la suppression
      const blaguesExistants = JSON.parse(localStorage.getItem("blagues")) || [];
      const index = parseInt(a.substring(2)) - 1;
      if (index >= 0 && index < blaguesExistants.length) {
        blaguesExistants.splice(index, 1);
        localStorage.setItem("blagues", JSON.stringify(blaguesExistants));
      }
    }
  }
  
  // Fonction pour supprimer toutes les lignes
  function deleteall() {
    // Supprimer toutes les lignes du tableau
    const tableau = document.getElementById("tableau");
    tableau.innerHTML = "";
  
    // Effacer également les données du LocalStorage
    localStorage.removeItem("blagues");
  }