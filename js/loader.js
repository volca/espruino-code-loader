function preload() {
    window.setTimeout(function() {
        console.log(window.Espruino)
        preload();
    }, 1000);
}

preload();

