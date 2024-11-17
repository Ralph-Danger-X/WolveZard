const timeDisplay = document.getElementById('time');
const setTimeInput = document.getElementById('setTime');
const setButton = document.getElementById('setButton');

let originalTime = new Date();

function updateClock() {
    const hours = String(originalTime.getHours()).padStart(2, '0');
    const minutes = String(originalTime.getMinutes()).padStart(2, '0');
    const seconds = String(originalTime.getSeconds()).padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    
    // Increment originalTime by one second
    originalTime.setSeconds(originalTime.getSeconds() + 1);
}

setButton.addEventListener('click', () => {
    const [hours, minutes] = setTimeInput.value.split(':');
    originalTime.setHours(hours);
    originalTime.setMinutes(minutes);
    originalTime.setSeconds(seconds);
    updateClock(); // Update immediately after setting the time
});

setInterval(updateClock, 1000);
