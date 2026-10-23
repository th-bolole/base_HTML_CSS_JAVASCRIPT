/*Le champ  */
const champ = document.getElementById("champ");

/*Affichage */
const produit = document.getElementById("produit");
const somme = document.getElementById("somme");
const division = document.getElementById("division");
const soustraction = document.getElementById("soustraction");

const nbr =5;


champ.addEventListener("keydown",(event)=>
{
    if(event.key ==="Enter")
    {
        produit.textContent = "produit = "+(Number(champ.value)*nbr);
        somme.textContent = "somme = "+(Number(champ.value)+nbr);
        division.textContent = "division = "+(Number(champ.value)/nbr);
        soustraction.textContent = "soustraction = "+(Number(champ.value)-nbr);
    }
});




/*
  const formulaire = document.getElementById("monformulaire");
  const nom = document.(getElementById("nom");
  const message = document.getElementById("message");

  formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
    message.textContent = "Bonjour " + nom.value + " !";
  });*/


/* 
const inputName = document.getElementById('input-name');
const btnDemo = document.getElementById('btn-demo');

btnDemo.addEventListener('click',function()
{
    const name = inputName.value;
    mes.textContent = "Bonjour " + name.value + " !";
    console.log('Bonjour '+ name);
});*/