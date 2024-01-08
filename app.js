const container =
  document.getElementById("container");

const colorsOne = [
  "#FF6633",
  "#FFB399",
  "#2c786c",
  "#FFFF99",
  "#00B3E6",
];

const colorsTwo = [
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
];

const colorsThree = [
  "#80b300",
  "#ff3380",
  "#e6b3b3",
  "#6680b3",
  "#9900b3",
];

let selectedColors = colorsOne;
const SQUARES = 506;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () =>
    changeColor(square)
  );
  square.addEventListener("mouseout", () =>
    removeColor(square)
  );
  container.appendChild(square);
}

function changeColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 5px 2px ${color}40`;
}

function getRandomColor() {
  return selectedColors[
    Math.floor(
      Math.random() * selectedColors.length
    )
  ];
}

document
  .getElementById("buttonOne")
  .addEventListener("click", () => {
    selectedColors = colorsOne;
  });

document
  .getElementById("buttonTwo")
  .addEventListener("click", () => {
    selectedColors = colorsTwo;
  });

document
  .getElementById("buttonThree")
  .addEventListener("click", () => {
    selectedColors = colorsThree;
  });

function removeColor(element) {
  element.style.backgroundColor = `#28282b`;
  element.style.boxShadow = `0 0 5px 2px #28282b40`;
}

const deleteBtn = document.getElementById(
  "deletebutton"
);

deleteBtn.addEventListener("click", () => {
  const squares =
    document.querySelectorAll(".square");

  squares.forEach((square) => {
    removeColor(square);
    square.style.transition = "none";
  });

  selectedColors = colorsOne;
  setTimeout(() => {
    squares.forEach((square) => {
      square.style.transition = "";
    });
  }, 200);
});
