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
  let firstLogo = "http://127.0.0.1:5500/web-practice/dist/bootstrap/icons/bootstrap-fill.svg";
  let secondLogo = "http://127.0.0.1:5500/web-practice/dist/bootstrap/icons/bootstrap.svg";
  let getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
  switch (getRandomInt(2)) {
    case 0:
      img.src = firstLogo;
      break;
    case 1:
      img.src = secondLogo;
      break;
  }
}

document.getElementById("searchButton").onclick = () => console.log("Сlick on search button.");
document.getElementById("submitButton").onclick = () => console.log("Click on submit button.");
document.getElementById("logo").addEventListener("click", changeLogo, false);
document.getElementById("logo").addEventListener("click", () => console.log("Click on logo."), false);