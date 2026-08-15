const container = document.querySelector(".container");
const button = document.querySelector("#squares");
const clear = document.querySelector("#clear");

function addBoxes(squares) {
    container.replaceChildren();
    const totalSquares = squares * squares
    for (let i = 1; i <= totalSquares; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }

    container.style.width = `${squares * 10}px`;
}
addBoxes(50);

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('box')) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = `#${randomColor.padStart(6, '0')}`;
    }
});

button.addEventListener('click', () => {
    let input = prompt("Size of Grid? (Ex: '16' for 16x16)");
    let squares = parseInt(input);

    if (input === null || input === "") {
        return;
    }

    if (0 < squares && squares <= 100) {
        addBoxes(squares);
    } else {
        alert("Please enter valid number between 1 and 100");
    }
})

clear.addEventListener('click', () => {
    const squares = Math.sqrt(container.childElementCount);
    container.replaceChildren();
    addBoxes(squares);
})