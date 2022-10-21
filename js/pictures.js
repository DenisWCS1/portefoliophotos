function full_screenPicture(picture) {
  const imgViewer = document.querySelector("#img-viewer");

  if (imgViewer.style.display != "block") {
    console.log("affichage");
    //création de l'élement img qui va recevoir l'image en full screen
    const imgFullsize = document.createElement("img");
    imgFullsize.setAttribute("class", "modal-content");
    imgFullsize.setAttribute("id", "full-image");
    imgFullsize.addEventListener("click", function (img) {
      full_screenPicture(img);
    });
    imgViewer.appendChild(imgFullsize);

    //récupération du chemin de l'image selectionner et split du chemin en plusieurs parties
    let src = picture.parentElement
      .querySelector(".grid_picture")
      .getAttribute("src")
      .split("/");

    //construction du chemin vers l'image en grand format pour l'affichage en full screen
    let srcFinalpath = "./" + src[0] + "/large/" + src[2];

    //ajout de la balise img src=image large dans le div
    imgViewer.querySelector("img").setAttribute("src", srcFinalpath);

    //affichage du Div
    imgViewer.style.display = "block";
  } else {
    imgViewer.style.display = "none";
  }
}
