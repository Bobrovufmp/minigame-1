const board = document.querySelector("#board");
const squaresNumbers = 483;
const colors = ['red', 'blue', 'azure', 'green', "yellow", "silver"]

for (let i = 0; i < squaresNumbers; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square))
  board.append(square);
  square.addEventListener("mouseleave", () => removeColor(square))
  board.append(square);
}

function setColor(el) {
    const color = getRandomColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    
}
function removeColor(el) {
    el.style.backgroundColor = "rgb(69, 65, 65)"
    el.style.boxShadow = `0 0 2px rgb(69, 65, 65)`
}
function getRandomColor() {
    const index = Math.floor((Math.random() * colors.length))
    return colors[index]

}
