let amount = prompt("Vanaf hoe veel wil je gaan aftellen?");
alert("Top, dan beginnen we bij " + (amount) + ". Zie de console voor de aftelling.");
countdown = setInterval(Timer, 1000);

function Timer() {
    console.log(amount);

    if (amount < 1) {
        clearInterval(countdown);
        alert("BOOM");
    }

    amount--;
}