var a = document.querySelectorAll.bind(document);
a('input[type="password"]').forEach(function(b) {
    b.type = 'text';
});
