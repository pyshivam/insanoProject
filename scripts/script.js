let flag_t = false;
let flag_d = false;

function move(name) {

    function work(elem, type) {
        let width = 1;
        let id = setInterval(frame, 100);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                if (type === "drive") {
                    flag_d = false;
                } else if (type === "torrent") {
                    flag_t = false;
                }
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }

    if (name === "drive") {
        if (flag_d === false) {
            var elem = document.getElementById("prog");
            work(elem, "drive");
            flag_d = true;
        }
    } else if (name === "torrent") {
        if (flag_t === false) {
            elem = document.getElementById("m-prog");
            work(elem, "torrent");
            flag_t = true;
        }
    }


}
