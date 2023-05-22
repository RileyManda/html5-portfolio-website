const openNav = function openNavHandler () {
    document.querySelector(".mobile-menu").style.display = "block";
}

const closeNav = function closeNavHandler () {
    document.querySelector(".mobile-menu").style.display = "none";
}

document.querySelector("#open-nav").addEventListener('click', openNav);
document.querySelector("#close-nav").addEventListener('click', closeNav);
