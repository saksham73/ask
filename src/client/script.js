function yesClicked() {
    document.getElementById('answer').classList.remove('hidden');
    document.getElementById('noVideo').pause();
    document.getElementById('yesVideo').play();
}

function noClicked() {
    playAudio();
}

function moveButton() {
    var noButton = document.getElementById('noButton');
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function playAudio() {
    document.getElementById('noVideo').play();
}

function openInstagram() {
    window.open('https://www.instagram.com/sakshamgupta73/');
}

// Move the "No" button to a random position on mouseenter
document.getElementById('noButton').addEventListener('mouseenter', moveButton);

