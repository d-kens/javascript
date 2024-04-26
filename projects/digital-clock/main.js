// DIGITAL CLOCK
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Logical OR operator - Returns the value of its first operand if the operand is truthy, otherwise it return the value of its second operand

    hours = hours.toString().padStart(2, 0);
    
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);


    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000)