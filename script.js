// 24 Hour Countdown Timer

const countdown = document.getElementById("countdown");

// Set timer duration (24 hours)
const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance <= 0) {
        countdown.innerHTML = "00:00:00";
        return;
    }

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    countdown.innerHTML =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);