
// heart button score

document.querySelectorAll('.heart-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        const heartIcon = parseInt(document.getElementById('heart-score').innerText);
        const sum = heartIcon + 1;
        document.getElementById('heart-score').innerText = sum;
    });
});


// coin score



document.querySelectorAll('.call-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        const coinElement = document.getElementById('coin-score');
        let coinValue = parseInt(coinElement.innerText, 10);
        coinValue = Math.max(0, coinValue - 10); // prevent negative
        coinElement.innerText = coinValue;
    });
});


// document.querySelectorAll('.call-btn').forEach(function(button) {
//     button.addEventListener('click', function() {
//         const heartIcon = parseInt(document.getElementById('coin-score').innerText);
//         const sum = heartIcon - 10;
//         document.getElementById('coin-score').innerText = sum;
//     });
// });


// copy button score

document.querySelectorAll('.copy-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        const heartIcon = parseInt(document.getElementById('copy-score').innerText);
        const sum = heartIcon + 1;
        document.getElementById('copy-score').innerText = sum;
    });
});





// document.getElementById('heart-btn').addEventListener('click', function() {
//     const heartIcon = parseInt(document.getElementById('heart-score').innerText);
//     const sum = heartIcon + 1;
//     document.getElementById('heart-score').innerText = sum;
// });