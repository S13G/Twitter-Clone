const signIn = document.querySelector("#sign-in");
const close = document.querySelector(".x");
const entireCover = document.querySelector(".entire-cover");
const overlay = document.querySelector(".overlay");

const toggle = function() {
    entireCover.classList.toggle("show")
    overlay.classList.toggle("show")
}

signIn.addEventListener('click', toggle);
close.addEventListener('click', toggle);