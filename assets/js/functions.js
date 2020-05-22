"use strict";

// JQuery
// $(logInfo);

// JavaScript
// window.onload = logInfo;

function logInfo() {
  console.log("onload");
  console.log("Links:");
  let linksArr = document.links;
  for (let i = 0; i < linksArr.length; ++i) {
    console.log(linksArr[i].href);
  }
  console.log("Anchors:");
  let anchorsArr = document.anchors;
  for (let i = 0; i < anchorsArr.length; ++i) {
    console.log(anchorsArr[i].name);
  }
  console.log("Images:");
  let imagesArr = document.images;
  for (let i = 0; i < imagesArr.length; ++i) {
    console.log(imagesArr[i].src);
  }
}

function changeLogo() {
  let img = document.getElementById("logo");
  let firstLogo = "dist/bootstrap/icons/bootstrap-fill.svg";
  let secondLogo = "dist/bootstrap/icons/bootstrap.svg";
  let getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
  switch (getRandomInt(2)) {
    case 0:
      img.src = firstLogo;
      break;
    case 1:
      img.src = secondLogo;
      break;
  }

  let div = document.createElement("div");
  div.id = "imgDiv";
  let bigImg = document.createElement("img");
  bigImg.src = img.src;
  bigImg.setAttribute("height", document.body.clientHeight);
  bigImg.setAttribute("weight", document.body.clientHeight);
  div.append(bigImg);
  div.setAttribute('onclick', "this.remove()");
  document.body.prepend(div);

  console.log(`${event.pageX}, ${event.pageY}`); // координаты
}

document.getElementById("searchButton").onclick = () => console.log("Сlick on search button.");
document.getElementById("submitButton").onclick = () => console.log("Click on submit button.");
document.getElementById("logo").addEventListener("click", changeLogo, false);
document.getElementById("logo").addEventListener("click", () => console.log("Click on logo."), false);