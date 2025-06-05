const weddingTime = new Date("2025-08-17T12:00:00+05:30").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = weddingTime - now;

    if (gap <= 0) {
        document.getElementById("countdown").innerHTML = "<h3>🎉 It's Wedding Time! 🎉</h3>";
        return;
    }

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = `${days} Days`;
    document.getElementById('hours').innerText = `${hours} Hours`;
    document.getElementById('minutes').innerText = `${minutes} Minutes`;
    document.getElementById('seconds').innerText = `${seconds} Seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
