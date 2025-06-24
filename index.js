function updateClock(){

    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12 || 12).toString().padStart(2, 0); // Convert to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);