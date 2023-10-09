
// localstorage 

// Définissez une clé et une valeur que vous souhaitez sauvegarder
var maCle = "nom";
var maValeur = "John Doe";

// Utilisez la méthode setItem pour stocker la valeur dans le LocalStorage
localStorage.setItem(maCle, maValeur);

// Récupérez la valeur en utilisant la clé
var maValeurRécupérée = localStorage.getItem("nom");

// Vérifiez si la valeur a été récupérée avec succès
if (maValeurRécupérée !== null) {
  console.log("La valeur est : " + maValeurRécupérée);
} else {
  console.log("La clé n'existe pas dans le LocalStorage.");
}