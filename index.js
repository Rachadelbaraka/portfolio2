// Gestion du formulaire de contact
document.getElementById("formulairecontact").addEventListener("submit", function (event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("courriel").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nom && emailRegex.test(email) && message) {
        alert(`Merci ${nom} pour votre message ! Nous vous répondrons bientôt.`);
        this.reset();
    } else {
        alert("Veuillez remplir tous les champs avec des informations valides.");
    }
});

// Effet d'agrandissement sur les boutons
document.querySelectorAll("button").forEach(bouton => {
    bouton.addEventListener("mouseover", () => bouton.style.transform = "scale(1.1)");
    bouton.addEventListener("mouseout", () => bouton.style.transform = "scale(1)");
});

// Gestion des détails des compétences
document.querySelectorAll(".competence").forEach(comp => {
    comp.addEventListener("click", () => {
        const details = comp.querySelector(".details");
        if (details) {
            details.style.transition = "all 0.3s ease";
            details.style.display = details.style.display === "block" ? "none" : "block";
        }
    });
});

// Carousel Logic
let indexActuel = 0;
const images = document.querySelectorAll(".carousel .carteimage");
const totalImages = images.length;
let interval;

function afficherImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });
    indexActuel = index;
}

function demarrerAutoSlide() {
    interval = setInterval(() => {
        afficherImage((indexActuel + 1) % totalImages);
    }, 3000);
}

function arreterAutoSlide() {
    clearInterval(interval);
}

document.getElementById("next").addEventListener("click", () => {
    arreterAutoSlide();
    afficherImage((indexActuel + 1) % totalImages);
    demarrerAutoSlide();
});

document.getElementById("prev").addEventListener("click", () => {
    arreterAutoSlide();
    afficherImage((indexActuel - 1 + totalImages) % totalImages);
    demarrerAutoSlide();
});

// Initialisation du carrousel
if (totalImages > 0) {
    demarrerAutoSlide();
    afficherImage(indexActuel);
}

// Carrousel - Animation fluide pour les images (si applicable)
document.querySelectorAll(".carousel-container img").forEach(img => {
    img.style.transition = "opacity 0.5s ease";
});
