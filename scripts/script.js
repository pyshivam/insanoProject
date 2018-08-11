function move() {
    let elem = document.getElementById("prog");
    let width = 1;
    let id = setInterval(frame, 100);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
