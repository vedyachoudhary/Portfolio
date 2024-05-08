document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

$('.portfolio-button').mousedown(function() {
    timeout = setInterval(function() {
        window.scrollBy(0, -1);
    }, 0);

    return false;
});

$('.portfolio-button').mouseup(function() {
    clearInterval(timeout);
});