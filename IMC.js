// IMC = Poids / Taille2
var poids
var taille
var imc
var imcround
var error = "error";

function controleP(poids) {
  var poids = document.poids.input.value;
  alert(poids + " kg");
}
function controleT(taille) {
  var taille = document.taille.input.value;
  alert(taille + " cm");
}
function IMC() {
    try {
  var poids = document.poids.input.value;
  var taille = document.taille.input.value;
  var imc = poids / (taille/100 * taille/100);
  var imcround = Math.round(imc*10)/10;
  if (poids <=0 || taille <=0) {
    document.getElementById("IMC").innerHTML = error;
    throw "Veuillez choisir des valeurs non nules et positives.";
  }

  document.getElementById("IMC").innerHTML = imcround;

//   if (poids==0 || taille==0) {
//     alert("Error!");
//     alert("Veuilliez choisir des valeurs entières");
// }
  if (imcround < 16.5) {
    document.getElementById("alert").innerHTML = "Dénutrition";
}
  else if (imcround >= 16.5 && imcround < 18.5) {
    document.getElementById("alert").innerHTML = "État de maigreur";
}
  else if (imcround >= 18.5 && imcround <25) {
    document.getElementById("alert").innerHTML = "Corpulence normale";
}
  else if (imcround >= 25 && imcround <30){
    document.getElementById("alert").innerHTML = "Surpoids";
}
else if (imcround >= 30 && imcround <35){
  document.getElementById("alert").innerHTML = "Obèsité modérée";
}
else if (imcround >= 35 && imcround <40){
  document.getElementById("alert").innerHTML = "Obèsité sévère";
}
else if (imcround >= 40){
  document.getElementById("alert").innerHTML = "Obèsité morbide";
}
}
catch (e) {
  alert(e);
}
}
