function loadGallery(keyword) {
    fetch(`./galeria/galeria${keyword}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('mainContent').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Load Gallery One initially
document.addEventListener('DOMContentLoaded', function() {
    loadGallery('1');
});

document.getElementById('galeryOneLink').addEventListener('click', function(event) {
    event.preventDefault();
    // Do nothing if it's already active
    if (!this.classList.contains('active')) {
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        loadGallery('1');
    }
});

document.getElementById('galeryTwoLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    loadGallery('2');
});

document.getElementById('galeryThreeLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    loadGallery('3');
});

document.addEventListener('keydown', function(event) {
    if (event.key === '1' || event.key === '2' || event.key === '3') {
        event.preventDefault();
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        document.getElementById(`galery${event.key}Link`).classList.add('active');
        loadGallery(event.key);
    }
});


document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case '1':
            loadGallery('1');
            break;
        case '2':
            loadGallery('2');
            break;
        case '3':
            loadGallery('3');
            break;
        default:
            break;
    }
});

var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


