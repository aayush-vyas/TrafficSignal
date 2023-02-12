
const signals = document.querySelectorAll('.signal-box');
let currentSignalIndex = 0;
let timer = 20;

setInterval(function () {

    for (let i = 0; i < signals.length; i++) {
        if (i === currentSignalIndex) {
            let yellow = signals[i].getElementsByClassName("circle-yellow")[0];
            let red = signals[i].getElementsByClassName("circle-red")[0];
            let green = signals[i].getElementsByClassName("circle-green")[0];
            signals[i].getElementsByClassName("timer").innerHTML = timer;
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
            let yellow = signals[i].getElementsByClassName("circle-yellow")[0];
            let red = signals[i].getElementsByClassName("circle-red")[0];
            let green = signals[i].getElementsByClassName("circle-green")[0];
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