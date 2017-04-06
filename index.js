function correr(input) {
    try {
        $("#alertError").removeClass("in");
        if (document) {
            document.querySelector('#output').innerText = '';
        }
        var resultado = cubeSummation(input);
        document.querySelector('#output').innerText += resultado + '\n';
    } catch (err) {
        console.error(err)
        if (document) {
            document.querySelector('#error').innerText = err;
            $("#alertError").addClass("in");
        }
    }
}
