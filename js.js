let hexButton = document.querySelector("#hex-change-button");
let hexCodeArray = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let hexTextField = document.querySelector(".hex-text");
let colorArray = ["red", "blue", "yellow", "green", "silver"];
let colorButton = document.querySelector("#color-change-button");
let colorTextField = document.querySelector(".color-text");

const randomizeNumber = (arrayLength) => {
  return Math.floor(Math.random() * arrayLength.length);
};

hexButton.addEventListener("click", () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexCodeArray[randomizeNumber(hexCodeArray)];
    hexTextField.innerHTML = hexCode;
  }
  document.body.style.background = hexCode;
});

colorButton.addEventListener("click", () => {
  let color = colorArray[randomizeNumber(colorArray)];
  let capitalize = color.charAt(0).toUpperCase() + color.slice(1);
  colorTextField.innerHTML = capitalize;
  document.body.style.background = color;
});
