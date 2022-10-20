// Déclaration des constantes DOM
const resultDiv = document.querySelector(".formresult");
const formContact = document.querySelector(".contact");

function submit() {
  const formName = document.getElementById("idname").value;
  const formemail = document.getElementById("idemailAddress").value;
  const formmessage = document.getElementById("idmessage").value;

  /*
    La sous-expression \w+([.-]?\w+)* est utilisée pour faire correspondre le nom d'utilisateur dans l'e-mail, avant le signe @. Il commence par au moins un caractère de mot (a-z, A-Z, 0-9 et trait de soulignement), suivi de plusieurs caractères de mot ou . ou -. Cependant, un . ou - doit être suivi d'un mot (a-z, A-Z, 0-9 et trait de soulignement). Autrement dit, la chaîne ne peut pas contenir "..", "--", ".-" ou "-.". Un exemple de chaîne valide est "a.1-2-3"
    Encore une fois, la sous-expression \w+([.-]?\w+)* est utilisée pour faire correspondre le nom de domaine de messagerie, avec le même modèle que le nom d'utilisateur décrit ci-dessus.
     ^ et $, représentent, comme leur nom l'indique, le début et la fin de la chaîne.
    */
  const formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(formatEmail.test(formemail));
  if (formName == "") {
    alert("Le champ nom ne peut pas être vide");
  } else if (formemail == "") {
    alert("Le champ email ne peut pas être vide");
  } else if (!formatEmail.test(formemail)) {
    alert("Erreur dans le format de votre email");
  } else if (formmessage == "") {
    alert("Le champ message ne peut pas être vide");
  } else {
    //affichage du résultats du formulaire
    resultDiv.style.display = "block";
    //Masquage du formulaire
    formContact.style.display = "none";

    /*********************Block Titre ***************************/
    const blockTitle = document.createElement("div");
    blockTitle.classList.add("blockResulttitle");
    blockTitle.innerHTML = "<h2> Votre message a bien été envoyé</h2>";
    resultDiv.appendChild(blockTitle);

    /*********************Block Votre nom ***************************/
    const DivNomtitle = document.createElement("div");
    DivNomtitle.classList.add("Divtitle");
    resultDiv.appendChild(DivNomtitle);

    const blockNomtitle = document.createElement("div");
    blockNomtitle.classList.add("blockElementtitle");
    blockNomtitle.innerHTML = "Votre nom :";
    DivNomtitle.appendChild(blockNomtitle);

    const blockNom = document.createElement("div");
    blockNom.classList.add("blockElement");
    blockNom.innerHTML = formName;
    DivNomtitle.appendChild(blockNom);

    /*********************Block Votre email ***************************/
    const DivEmailtitle = document.createElement("div");
    DivEmailtitle.classList.add("Divtitle");
    resultDiv.appendChild(DivEmailtitle);

    const blockEmailtitle = document.createElement("div");
    blockEmailtitle.classList.add("blockElementtitle");
    blockEmailtitle.innerHTML = "Votre email :";
    DivEmailtitle.appendChild(blockEmailtitle);

    const blockEmail = document.createElement("div");
    blockEmail.classList.add("blockElement");
    blockEmail.innerHTML = formemail;
    DivEmailtitle.appendChild(blockEmail);

    /*********************Block Votre message ***************************/
    const DivMessagetitle = document.createElement("div");
    DivMessagetitle.classList.add("Divtitle");
    resultDiv.appendChild(DivMessagetitle);

    const blockMessagetitle = document.createElement("div");
    blockMessagetitle.classList.add("blockElementtitle");
    blockMessagetitle.innerHTML = "Votre message: ";
    DivMessagetitle.appendChild(blockMessagetitle);

    const blockMessage = document.createElement("div");
    blockMessage.classList.add("blockElement");
    blockMessage.innerHTML = formmessage;
    DivMessagetitle.appendChild(blockMessage);

    /*********************Block button retour ***************************/
    const DivBtnretour = document.createElement("div");
    DivBtnretour.classList.add("DivBtnretour");
    resultDiv.appendChild(DivBtnretour);

    const btnRetour = document.createElement("button");
    btnRetour.classList.add("btnretour");
    btnRetour.innerText = "Retour";
    btnRetour.setAttribute("onclick", "retour()");
    DivBtnretour.appendChild(btnRetour);
  }
}
function retour() {
  // Masquage du résultats du formulaire
  resultDiv.style.display = "none";
  document.getElementById("idname").value = "";
  document.getElementById("idemailAddress").value = "";
  document.getElementById("idmessage").value = "";
  // Affichage du formulaire
  formContact.style.display = "block";
}
