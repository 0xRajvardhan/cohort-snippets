function formatTime(date) {
    // Extract hours, minutes, and seconds
    const hours24 = date.getHours();
    const hours12 = hours24 % 12 || 12; // Convert to 12-hour format
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours24 >= 12 ? 'PM' : 'AM';

    // Pad minutes and seconds with leading zeros
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');
    const paddedHours24 = String(hours24).padStart(2, '0');
    const paddedHours12 = String(hours12).padStart(2, '0');

    // Return formatted time strings
    return {
        hhmmss24: `${paddedHours24}:${paddedMinutes}:${paddedSeconds}`,
        hhmmss12: `${paddedHours12}:${paddedMinutes}:${paddedSeconds} ${ampm}`
    };
}

function updateClock() {
    const now = new Date();
    const timeFormats = formatTime(now);

    // Log the time formats
    console.clear(); // Clear console for a clean clock display
    console.log('24-hour format:', timeFormats.hhmmss24);
    console.log('12-hour format:', timeFormats.hhmmss12);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
