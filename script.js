const bgMusic = new Audio("music.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.5;

const enterAudio = new Audio("enterpass.mp3");

// Start audio on first interaction
document.addEventListener("click", function () {
    enterAudio.play().catch(() => {});
    bgMusic.play().catch(() => {});
}, { once: true });

function checkPassword() {
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (password === "24022025") {

        error.textContent = "";

        const fade = setInterval(() => {
            if (bgMusic.volume > 0.05) {
                bgMusic.volume -= 0.05;
            } else {
                clearInterval(fade);
                bgMusic.pause();
                bgMusic.currentTime = 0;
                window.location.href = "video.html";
            }
        }, 100);

    } else {
        error.textContent = "Incorrect Password";
    }
}

// Press Enter to continue
document.getElementById("password").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkPassword();
    }
});


// ------------------------------
// Rotate screen overlay (INDEX PAGE)
// ------------------------------

const rotateOverlay = document.getElementById("rotateOverlay");

function checkOrientation() {

    const isTouchDevice =
        ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (isTouchDevice) {

        if (window.matchMedia("(orientation: portrait)").matches) {
            rotateOverlay.style.display = "flex";
        } else {
            rotateOverlay.style.display = "none";
        }

    } else {
        // Desktop/Laptop
        rotateOverlay.style.display = "none";
    }
}

checkOrientation();

window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);

checkOrientation();

window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);