// Desclaración de constantes
const button = document.querySelector("button");
const result = document.querySelector("#result");

// Evento click para cambiar de color el fondo, se generan con random
button.addEventListener("click", () => {
    let randomNum1 = Math.floor(Math.random() * 256);
    let randomNum2 = Math.floor(Math.random() * 256);
    let randomNum3 = Math.floor(Math.random() * 256);
    let rgb = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`
    document.body.style.backgroundColor = rgb;
    result.innerText = rgb;
})

