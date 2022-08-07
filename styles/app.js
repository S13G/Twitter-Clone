const signIn = document.querySelector(".sign-in");
const close = document.querySelector(".x");
const entireCover = document.querySelector(".entire-cover-login");
const overlay = document.querySelector(".overlay");

const toggle = function () {
    entireCover.classList.toggle("show")
    overlay.classList.toggle("show")

    // when modal is shown, page body is fixed
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;

};

signIn.addEventListener("click", toggle);
close.addEventListener("click", toggle);


const scroll = function () {
    entireCover.classList.toggle("close")
    // when modal is hidden, page body starts to scroll
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

