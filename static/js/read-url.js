document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav-link');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
            var pageName = this.getAttribute('data-page');
            redirectTo(pageName);
        });
    });

    function redirectTo(pageName) {
        window.location.href = pageName + '.html';
    }
});
