let hexButton = document.querySelector("#hex-change-button");
let color = ["red", "blue", "yellow", "green", "silver"];
let hexCodeArray = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

hexButton.addEventListener("click", () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexCodeArray[randomizeNumber()];
    console.log(hexCode);
  }
  document.body.style.background = hexCode;
});

const randomizeNumber = () => {
  return Math.floor(Math.random() * hexCodeArray.length);
};

console.log(randomizeNumber());
