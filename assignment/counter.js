let counter = 0;

function updateCounter() {
    console.log(counter);
    counter++;
}

setInterval(updateCounter, 1000);