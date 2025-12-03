//button click effect

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("btn-clicked");
        setTimeout(() => btn.classList.remove("btn-clicked"), 200);
    });
});
