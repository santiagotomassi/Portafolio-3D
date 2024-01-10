function loadGallery(keyword) {
    fetch(`./galeria/galeria${keyword}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('mainContent3').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Load Gallery Three initially
document.addEventListener('DOMContentLoaded', function() {
    loadGallery('3');
});

document.getElementById('galery3OneLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    loadGallery('1');
});

document.getElementById('galery3TwoLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    loadGallery('2');
});

document.getElementById('galery3ThreeLink').addEventListener('click', function(event) {
    event.preventDefault();
    // Do nothing if it's already active
    if (!this.classList.contains('active')) {
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        loadGallery('3');
    }
});

// Existing code...

document.addEventListener('DOMContentLoaded', function() {
    loadGallery('3');
});

// Function to load gallery based on key press
document.addEventListener('keydown', function(event) {
    if (event.key === '1') {
        loadGallery('1');
    } else if (event.key === '2') {
        loadGallery('2');
    } else if (event.key === '3') {
        loadGallery('3');
    }
});

// Existing code...


var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
