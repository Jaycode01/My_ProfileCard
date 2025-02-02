function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    setInterval(() => {
        const now = new Date();
        const utcTime = now.toUTCString();
        utcTimeElement.textContent = utcTime;
    }, 1000);
}

document.addEventListener("DOMContentLoaded", updateUTCTime);