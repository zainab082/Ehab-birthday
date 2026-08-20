const startBtn = document.getElementById("startBtn");
const journey = document.getElementById("journey");

startBtn.addEventListener("click", () => {
    journey.scrollIntoView({
        behavior: "smooth"
    });
});


// SECRET BUTTON
const secretBtn = document.getElementById("secretBtn");
const secretText = document.getElementById("secretText");

secretBtn.addEventListener("click", () => {

    secretText.textContent =
        "Okay... you found the secret. You're officially Papa's favorite. 😂❤️";

    secretText.style.color = "#b00000";

    secretBtn.textContent = "🔓 SECRET UNLOCKED";

});


// CELEBRATE BUTTON
const celebrateBtn = document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click", () => {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }

    celebrateBtn.textContent =
        "🎂 HAPPY BIRTHDAY EHAB! ❤️";

});


// CAR POPUP
function openCar(car) {

    const popup = document.getElementById("carPopup");
    const image = document.getElementById("carImage");
    const label = document.getElementById("carLabel");

    if (car === "bmw") {

        image.src = "images/bmw.jpg";

        label.textContent =
            "BMW — Ehab's kind of speed. 🏎️🔥";

    }

    if (car === "rolls") {

        image.src = "images/rollsroyce.jpg";

        label.textContent =
            "ROLLS-ROYCE — Because apparently normal cars aren't enough. 😂";

    }

    popup.classList.add("show");
}


function closeCar() {

    document
        .getElementById("carPopup")
        .classList.remove("show");

}


// PARTY BUTTON
const partyBtn = document.getElementById("partyBtn");
const partyMessage = document.getElementById("partyMessage");

partyBtn.addEventListener("click", () => {

    partyMessage.classList.remove("show");

    void partyMessage.offsetWidth;

    partyMessage.classList.add("show");


    // Left + right party bursts
    for (let i = 0; i < 100; i++) {

        const particle = document.createElement("div");

        particle.classList.add("party-particle");

        const side = i % 2 === 0 ? -1 : 1;

        const x =
            side * (Math.random() * 50 + 20) + "vw";

        const y =
            (Math.random() * 90 - 45) + "vh";

        particle.style.setProperty("--x", x);
        particle.style.setProperty("--y", y);

        particle.style.left =
            side === -1 ? "5vw" : "95vw";

        particle.style.background =
            Math.random() > 0.5
                ? "#b00000"
                : "#ffffff";

        particle.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 3000);
    }

});


// BIRTHDAY SURPRISE
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");
const birthdayMusic = document.getElementById("birthdayMusic");

surpriseBtn.addEventListener("click", () => {

    // Show birthday message
    surpriseMessage.classList.add("show");

    // Play music
    birthdayMusic.play();

    // 🎉 Confetti
    for (let i = 0; i < 50; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "25px";
        confetti.style.zIndex = "9999";
        confetti.style.animation =
            "fall 3s linear forwards";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }

});
