// ===============================
// START ENGINE
// ===============================

const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", () => {

        const journey = document.getElementById("journey");

        if (journey) {
            journey.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
}


// ===============================
// BIRTHDAY SURPRISE + MUSIC
// ===============================

const surpriseBtn = document.getElementById("surpriseBtn");
const birthdayMusic = document.getElementById("birthdayMusic");
const surpriseMessage = document.getElementById("surpriseMessage");

if (surpriseBtn) {

    surpriseBtn.addEventListener("click", () => {

        // Show birthday message
        if (surpriseMessage) {
            surpriseMessage.classList.add("show");
        }

        // Play birthday music
        if (birthdayMusic) {

            birthdayMusic.currentTime = 0;

            birthdayMusic.play().catch(() => {
                console.log("Music could not autoplay.");
            });

        }

        // Small celebration
        createConfetti();

    });

}


// ===============================
// SECRET MESSAGE
// ===============================

const secretBtn = document.getElementById("secretBtn");
const secretText = document.getElementById("secretText");

if (secretBtn) {

    secretBtn.addEventListener("click", () => {

        if (secretText) {

            secretText.classList.toggle("show");

            if (secretText.classList.contains("show")) {
                secretText.textContent =
                    "🔓 CLASSIFIED: Ehab is officially the best little brother! ❤️😂";
            } else {
                secretText.textContent =
                    "Some things are better left classified...";
            }

        }

    });

}


// ===============================
// CAR GARAGE
// ===============================

function openCar(car) {

    const popup = document.getElementById("carPopup");
    const image = document.getElementById("carImage");
    const label = document.getElementById("carLabel");

    if (!popup || !image || !label) {
        return;
    }


    if (car === "bmw") {

        // IMPORTANT:
        // GitHub file is named Bmw.jpg
        image.src = "Bmw.jpg";

        label.textContent = "🏎️ BMW — EHAB'S DREAM RIDE";

    }


    if (car === "rolls") {

        // GitHub file is named rollsroyce.jpg
        image.src = "rollsroyce.jpg";

        label.textContent = "👑 ROLLS-ROYCE — THE LUXURY MODEL";

    }


    popup.classList.add("show");

}


// ===============================
// CLOSE CAR POPUP
// ===============================

function closeCar() {

    const popup = document.getElementById("carPopup");

    if (popup) {
        popup.classList.remove("show");
    }

}


// Close popup when clicking outside the car image

const carPopup = document.getElementById("carPopup");

if (carPopup) {

    carPopup.addEventListener("click", (event) => {

        if (event.target === carPopup) {
            closeCar();
        }

    });

}


// ===============================
// CELEBRATE EHAB
// ===============================

const celebrateBtn = document.getElementById("celebrateBtn");
const celebration = document.getElementById("celebration");

if (celebrateBtn) {

    celebrateBtn.addEventListener("click", () => {

        createConfetti();

        createConfetti();

        if (celebration) {

            celebration.innerHTML =
                "🎉 🎂 ❤️ HAPPY 14TH BIRTHDAY EHAB! ❤️ 🎂 🎉";

            celebration.classList.add("show");

        }

    });

}


// ===============================
// PARTY BUTTON
// ===============================

const partyBtn = document.getElementById("partyBtn");
const partyMessage = document.getElementById("partyMessage");

if (partyBtn) {

    partyBtn.addEventListener("click", () => {

        if (partyMessage) {
            partyMessage.classList.add("show");
        }

        createConfetti();
        createConfetti();
        createConfetti();

    });

}


// ===============================
// CONFETTI EFFECT
// ===============================

function createConfetti() {

    const emojis = [
        "🎉",
        "🎊",
        "🎂",
        "❤️",
        "💖",
        "✨",
        "🎈",
        "🏎️"
    ];


    for (let i = 0; i < 35; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];


        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-40px";

        confetti.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        confetti.style.zIndex = "99999";

        confetti.style.pointerEvents = "none";


        const duration =
            Math.random() * 3 + 2;


        confetti.style.transition =
            `transform ${duration}s linear, opacity ${duration}s linear`;


        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.style.transform =
                `translateY(110vh) rotate(${Math.random() * 720}deg)`;

            confetti.style.opacity = "0";

        }, 50);


        setTimeout(() => {

            confetti.remove();

        }, duration * 1000 + 500);

    }

}


// ===============================
// AUTO IMAGE ERROR HANDLER
// ===============================

document.querySelectorAll("img").forEach((img) => {

    img.addEventListener("error", () => {

        console.log(
            "Image not found:",
            img.getAttribute("src")
        );

    });

});


// ===============================
// PAGE LOADED
// ===============================

console.log("🎉 Ehab Birthday Website Loaded Successfully!");
