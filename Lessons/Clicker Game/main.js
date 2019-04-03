const stuffsText = document.getElementById("stuffs");
const makeStuff = document.getElementById("makeStuff");
const stuffPerSecondText = document.getElementById("stuffPerSecond");
const clickPlus = document.getElementById("clickPlus");
const buyStuffMaker = document.getElementById("buyStuffMaker");
let stuffs = 0;
let stuffPerClick = 1;
let stuffPerSecond = 0;
let stuffPerClickIncreaseCost = 10;
let stuffPerSecondIncreaseCost = 30;
let DOMInterval = setInterval(() => {
    stuffsText.innerHTML = `Stuffs: ${stuffs}`;
    stuffPerSecondText.innerHTML = `Stuffs Per Second: ${stuffPerSecond}`;
    clickPlus.innerHTML = `Increase stuff per click for ${stuffPerClickIncreaseCost} stuffs`;
    buyStuffMaker.innerHTML = `Increase stuff per second for ${stuffPerSecondIncreaseCost} stuffs`;
}, 100);

let updateInterval = setInterval(() => {
    stuffs += stuffPerSecond;
}, 1000);

makeStuff.addEventListener("click", e => {
    stuffs += stuffPerClick;
});

clickPlus.addEventListener("click", e => {
    if (stuffs >= stuffPerClickIncreaseCost) {
        stuffs -= stuffPerClickIncreaseCost;
        stuffPerClickIncreaseCost *= 1.2;
        stuffPerClick += 1;
    }
})
buyStuffMaker.addEventListener("click", e => {
    if (stuffs >= stuffPerSecondIncreaseCost) {
        stuffs -= stuffPerSecondIncreaseCost;
        stuffPerSecondIncreaseCost *= 1.2;
        stuffPerSecond += 1;
    }
})
