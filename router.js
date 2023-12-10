window.addEventListener('hashchange', function() {
    document.getElementById('content').innerHTML = location.hash.slice(1);
});