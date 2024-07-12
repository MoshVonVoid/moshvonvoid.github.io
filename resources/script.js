function changeColor() {

    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    Array.from(document.getElementsByClassName("skill-container")).forEach( c => {
        c.style.backgroundColor = randomColor;
    })
}

window.onload = function() {
    document.getElementById("randomColor").addEventListener('click', changeColor);
}