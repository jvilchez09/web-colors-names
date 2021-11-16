"use strict";

console.log("Hey, didn't see you there 👀");

const colors = {
  "circuit-board-green": ["#193923", "link"],
  "cyber-space-orange": ["#c23b20", "link"],
  "floppy-yellow": ["#b16c24", "link"],
  "graphic-green": ["#172526", "link"],
  "green-com": ["#357739", "link"],
  "infra-red": ["#c43423", "link"],
  "megabyte-blue": ["#201e2c", "link"],
  "megahertz-maroon": ["#621b23", "link"],
  "online-orange": ["#d65128", "link"],
  "point-and-click-orange": ["#4c9830", "link"],
  "plug-and-play-pink": ["#c33429", "link"],
  "transistor-yellow": ["#dc6e2e", "link"],
  "ultra-violet": ["#3d0916", "link"],
  "web-surfing-blue": ["#192263", "link"],
  "world-wide-yellow": ["#c1a234", "link"],
  "www-purple": ["#282329", "link"],
};

console.log(colors);

const mainContainer = document.querySelector(".container");
console.log(mainContainer);

let colorContainer = document.createElement("div");
let textContainer = document.createElement("p");
let previewContainer = document.querySelector(".preview-container");
let previousClass = "white";
//classList.add("color-container");

// colors.forEach((element) => {});

// for (const [key, value] of colors) {
//   console.log(key);
// }

/**
 * Copy Color
 */

console.log(colorContainer);

const copyColor = (color, link) => {
  return console.log(color, link);
};

for (const key in colors) {
  colorContainer.className = "color-container";
  colorContainer.classList.add(key);

  //agregar nombre de color al color
  let colorNames = key.split("-").join(" ");
  // let colorName =
  //   colorNames[0].slice(0, 1).toUpperCase() + colorNames[0].slice(1);
  // colorNames.shift();
  // let colorName = colorNames;
  textContainer.textContent = colorNames;
  colorContainer.appendChild(textContainer);
  let newContainer = colorContainer.cloneNode(true);

  let [color, link] = colors[key];
  newContainer.addEventListener("click", function () {
    copyColor(...colors[key]);
  });

  newContainer.addEventListener("mouseover", function () {
    /**
     * Este es el contenedor donde se previsualiza el color
     */
    previewContainer.classList.remove(previousClass);
    previewContainer.classList.add(key);

    let parent = document.getElementsByClassName(`color-container  ${key}`);
    // let parent = document.querySelectorAll(`color-container ${key}`);
    // console.log(parent[0]);
    // let child = parent.getElementsByTagName("p")[0];
    let [hexColor, link] = colors[key];
    console.log(hexColor);
    // textContainer.textContent = "Copy";
    // let textContainer2 = document.createElement("p");
    parent[0].innerHTML = `<p>Copy<br>${hexColor}</p> `;
    // parent[0].appendChild(textContainer2);
    // classList.remove
    // copyColor(...colors[key]);
    previousClass = key;
  });

  newContainer.addEventListener("mouseout", function () {
    previewContainer.classList.remove(previousClass);
    previewContainer.classList.add("white");
    // textContainer.textContent = colorNames;

    // classList.remove
    // copyColor(...colors[key]);
  });
  // colorContainer.addEventListener("click", copyColor(...colors[key]));
  mainContainer.append(newContainer);
}
