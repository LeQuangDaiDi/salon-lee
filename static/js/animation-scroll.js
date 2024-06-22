document.addEventListener("scroll", function () {
    var headers = document.getElementsByClassName('scroll-loading');
    Array.from(headers).forEach(function (header) {
        var position = header.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            header.style.animation = 'scroll 0.5s ease-in 0.1s 1 normal forwards';
        }
    });
});
