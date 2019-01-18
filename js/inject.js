function loadCode() {
    var lastCode = "";
    let interval = setInterval(function() {
        var fileElement = $("#codeFileLoader").get(0);
        if (typeof fileElement == "undefined") {
            return;
        }   
        var currentCodeFile = fileElement.files[0];
        if (typeof currentCodeFile == "undefined") {
            return;
        }   
        
        var reader = new FileReader();
        reader.onload = function(e) {
            if (lastCode != reader.result) {
                Espruino.Core.EditorJavaScript.setCode(reader.result);
            }
            lastCode = reader.result;
        };  
        reader.readAsText(currentCodeFile);
    }, 3 * 1000);
}

loadCode();
