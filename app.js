const container =
  document.getElementById("container");

const colorsOne = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
];

// const colorsTwo = [
//   "#E6B333",
//   "#3366E6",
//   "#999966",
//   "#99FF99",
//   "#B34D4D",
// ];

// const colorsThree = [
//   "#80B300",
//   "#809900",
//   "#E6B3B3",
//   "#6680B3",
//   "#66991A",
// ];

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
  return colorsOne[
    Math.floor(Math.random() * colorsOne.length)
  ];
}

function removeColor(element) {
  element.style.backgroundColor = `#28282b`;
  element.style.boxShadow = `0 0 5px 2px #28282b40`;
}
