const container = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('box')) {
        e.target.style.backgroundColor = '#000';
    }
});