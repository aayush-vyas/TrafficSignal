
const signals = document.querySelectorAll('.signal-box');
let currentSignalIndex = 0;
let timer = 20;

setInterval(() => {
    for (let i = 0; i < signals.length; i++) {
        let yellow = signals[i].getElementsByClassName("circle-yellow")[0];
        let red = signals[i].getElementsByClassName("circle-red")[0];
        let green = signals[i].getElementsByClassName("circle-green")[0];
        let timers = signals[i].getElementsByClassName("timer");
        // if (timers.length > 0) {
        //     timers[0].innerHTML = timer;

        // }
        console.log(timers);

        if (i === currentSignalIndex) {
            if (timer > 5) {
                yellow.style.backgroundColor = "black";
                red.style.backgroundColor = "black";
                green.style.backgroundColor = "green";
            } else if (timer <= 5 && timer > 0) {
                yellow.style.backgroundColor = "yellow";
                red.style.backgroundColor = "black";
                green.style.backgroundColor = "black";
            } else {
                yellow.style.backgroundColor = "black";
                red.style.backgroundColor = "red";
                green.style.backgroundColor = "black";
            }
        } else {
            yellow.style.backgroundColor = "black";
            red.style.backgroundColor = "red";
            green.style.backgroundColor = "black";
        }
    }

    timer--;

    if (timer === 0) {
        timer = 20;
        currentSignalIndex = (currentSignalIndex + 1) % signals.length;
    }

}, 1000);
