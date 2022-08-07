const signIn = document.querySelector(".sign-in");
const close = document.querySelector(".x");
const entireCover = document.querySelector(".entire-cover-login");
const overlay = document.querySelector(".overlay");

const toggle = function () {
    // when modal is shown, page body is fixed
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;


    entireCover.style.opacity = -3;
    overlay.style.opacity = -3;
    entireCover.style.display = "flex";
    overlay.style.display = "flex";
    (function fade() {
        let val = parseFloat(entireCover.style.opacity);
        if (!((val += .1) > 1)) {
            entireCover.style.opacity = val;
            overlay.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

const closeModal = function () {
    // when modal is shown, page body is closed
    document.body.style.position = "relative";

    entireCover.style.opacity = 4;
    overlay.style.opacity = 1;
    (function fade() {
        if ((entireCover.style.opacity -= .1) < 0 && (overlay.style.opacity -= .1) < 0) {
            entireCover.style.display = "none";
            overlay.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

signIn.addEventListener("click", toggle);
close.addEventListener("click", closeModal);

