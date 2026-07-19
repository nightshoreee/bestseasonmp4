const bgMusic = new Audio("music.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.5;

const enterAudio = new Audio("enterpass.mp3");

// Start audio when user interacts with the page
document.addEventListener("click", function () {
    enterAudio.play().catch(() => {});
    bgMusic.play().catch(() => {});
}, { once: true });


function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "24022025") {

        // Fade out background music
        let fade = setInterval(() => {
            if (bgMusic.volume > 0.05) {
                bgMusic.volume -= 0.05;
            } else {
                clearInterval(fade);
                bgMusic.pause();
                window.location.href = "video.html";
            }
        }, 100);

    } else {
        document.getElementById("error").textContent = "Incorrect Password";
    }
}


// Press Enter key to continue
document.getElementById("password").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});