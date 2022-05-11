const logo = document.querySelectorAll(".logo");
const anime = document.querySelectorAll(".img");
const texte = document.querySelectorAll(".texte");
const reseau = document.querySelectorAll(".reseau");

window.addEventListener("load", () => {
    let TL = gsap.timeline({ paused: true });

    TL.staggerFrom(logo, 1, { transform: "scale(0)", ease: "power2.out" }, "-=2");
    TL.staggerFrom(
        anime,
        1, { transform: "scale(0)", opacity: 0, ease: "power2.out" },
        "-=2"
    );
    TL.staggerFrom(
        texte,
        1, { transform: "scale(0)", opacity: 0, ease: "power2.out" },
        "-=2"
    );
    TL.staggerFrom(
        reseau,
        1, { transform: "scale(0)", opacity: 0, ease: "power2.out" },
        "-=2"
    );

    TL.play();
});