     
// Définition de la fonction animateButton 
var animateButton = function(e) {
  // Empêche le comportement par défaut de l'événement 
  e.preventDefault();

  // Supprime la classe 'animate' de l'élément cible (si elle existe déjà)
  e.target.classList.remove('animate');

  // Ajoute la classe 'animate' à l'élément cible pour déclencher l'animation
  e.target.classList.add('animate');

  // Définit un délai pour supprimer la classe 'animate' après 700 millisecondes (0,7 seconde)
  setTimeout(function() {
    e.target.classList.remove('animate');
  }, 700);
};

// Sélectionne tous les éléments avec la classe 'bubbly-button'
var bubblyButtons = document.getElementsByClassName("bubbly-button");

// Parcourt tous les éléments avec la classe 'bubbly-button' et ajoute un écouteur d'événements 'click' à chacun d'eux
for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
