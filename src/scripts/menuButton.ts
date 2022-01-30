const menuButton = () => {
    const button = document.querySelector(".burger");
    const menu = document.querySelector(".nav__list") as HTMLUListElement;
    button?.addEventListener("click", () => {
        button.classList.toggle("active");
        menu.classList.toggle("active");
        document.body.classList.toggle("locked");
    })
}

export { menuButton };