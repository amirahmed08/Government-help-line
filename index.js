
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
        const coinIcon = parseInt(document.getElementById('coin-score').innerText);

        const subtraction= coinIcon - 20;
        document.getElementById('coin-score').innerText = subtraction;
        if(subtraction != 0||subtraction > 0){
            alert("Calling National Emergency Service 999...");
        }
        if (subtraction <= 0) {
            alert("You don't have enough coins to make a call. Please earn more coins.");
            document.getElementById('coin-score').innerText = 0;
        }
        const callHistory = document.getElementById('call-history');
        const currentTime = new Date().toLocaleTimeString();
        const historyEntry = document.createElement('p');
        historyEntry.textContent = `Called National Emergency Number 999 at        ${currentTime}`;
        callHistory.appendChild(historyEntry);
    });
});


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