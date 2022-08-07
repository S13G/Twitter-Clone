const signIn = document.querySelector(".sign-in");
const close = document.querySelector(".x");
const entireCover = document.querySelector(".entire-cover-login");
const overlay = document.querySelector(".overlay");

const toggle = function () {
    overlay.classList.toggle("show")

    // when modal is shown, page body is fixed
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;


    entireCover.style.opacity = 0;
    entireCover.style.display = "flex";
    (function fade() {
        let val = parseFloat(entireCover.style.opacity);
        if (!((val += .1) > 1)) {
            entireCover.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

const closeModal = function () {
    overlay.classList.toggle("show")

    // when modal is shown, page body is fixed
    document.body.style.position = "relative";

    entireCover.style.opacity = 1;
    (function fade() {
        if ((entireCover.style.opacity -= .1) < 0) {
            entireCover.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

signIn.addEventListener("click", toggle);
close.addEventListener("click", closeModal);

