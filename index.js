//button click effect

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("btn-clicked");
        setTimeout(() => btn.classList.remove("btn-clicked"), 200);
    });
});

//toast message on click

function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast-message";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("toast-visible");
    }, 50);

    setTimeout(() => {
        toast.classList.remove("toast-visible");
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Add to specific buttons
const needHelpBtn = document.querySelector("button[onclick*='need-help']");
const giveHelpBtn = document.querySelector("button[onclick*='give-help']");

if (needHelpBtn) {
    needHelpBtn.addEventListener("click", () => {
        showToast("Redirecting to the Help Page...");
    });
}

if (giveHelpBtn) {
    giveHelpBtn.addEventListener("click", () => {
        showToast("Redirecting to the Volunteer Page...");
    });
}