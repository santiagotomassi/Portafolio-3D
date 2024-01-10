document.addEventListener('keypress', function(event) {
    if (event.key === '1') {
        var link = document.getElementById('link1');
        link.click();
    } else if (event.key === '2') {
        var link = document.getElementById('link2');
        link.click();
    } else if (event.key === '3') {
        var link = document.getElementById('link3');
        link.click();
    }
});