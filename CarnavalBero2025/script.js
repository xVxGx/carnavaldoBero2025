document.addEventListener("DOMContentLoaded", function () {
    let carnavalSound = new Audio("carnaval.mp3"); 
    carnavalSound.loop = true;

    setTimeout(() => {
        carnavalSound.play().catch(error => console.log("Som bloqueado pelo navegador!"));
    }, 2000);

    // Glitter infinito
    document.body.addEventListener("click", () => {
        let glitter = document.createElement("div");
        glitter.classList.add("glitter");
        glitter.style.left = Math.random() * window.innerWidth + "px";
        glitter.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(glitter);

        setTimeout(() => glitter.remove(), 2000);
    });
});