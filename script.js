const gridSize = 600
numOfSquares = 16

const sketchArea = document.querySelector("#sketch-area")
sketchArea.style.height = `${gridSize}px` 
sketchArea.style.width = `${gridSize}px` 
const slider = document.querySelector("#slider")
const sliderValue = document.querySelector("#slider-value")
sliderValue.textContent = `${numOfSquares} x ${numOfSquares} resolution`

function setBGcolor() {
    this.style.backgroundColor = "black"
}

function createGridCells(numOfSquares) {
for (let i = 0; i < numOfSquares * numOfSquares; i++) {
    const gridCell = document.createElement("div")
    gridCell.style.width = `${(gridSize / numOfSquares)-2}px`
    gridCell.style.height = `${(gridSize / numOfSquares)-2}px`
    gridCell.classList.add("cell")

    sketchArea.appendChild(gridCell)
    gridCell.addEventListener("mouseover", setBGcolor)
}
}

function removeGridCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild)
    }
}

slider.oninput = function() {
    let txt = `${this.value} x ${this.value} resolution`
    sliderValue.innerHTML = txt
    removeGridCells()
    createGridCells(this.value)
}

createGridCells(16)

