const gridSize = 600
numOfSquares = 16

const sketchArea = document.querySelector("#sketch-area")
sketchArea.style.height = `${gridSize}px` 
sketchArea.style.width = `${gridSize}px` 

const slider = document.querySelector("#slider")
const sliderValue = document.querySelector("#slider-value")
sliderValue.textContent = `${numOfSquares} x ${numOfSquares} resolution`

const btn = document.querySelector("#btn")

function setBGcolor() {
    this.style.backgroundColor = "rebeccapurple"
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

function promptResolution() {
    resValue = prompt(
        "Select Resolution"
    )
    if (resValue > 100) {
        alert("100 is the max boss")
    }
    else {
    let txt2 = `${resValue} x ${resValue} resolution`
    sliderValue.textContent = txt2
    removeGridCells()
    createGridCells(resValue)
    }
}

slider.oninput = function() {
    let txt = `${this.value} x ${this.value} resolution`
    sliderValue.textContent = txt
    removeGridCells()
    createGridCells(this.value)
}

btn.addEventListener("click", promptResolution)
createGridCells(16)

