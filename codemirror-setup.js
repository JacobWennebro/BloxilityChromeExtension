let myCodeMirror;

window.onmessage = function(e){
    myCodeMirror = CodeMirror(document.getElementById('css'), {
        value: e.data,
        mode:  "css",
        lineNumbers: true,
        theme: "base16-dark"
    });

    CodeMirror.on(myCodeMirror, "change", (e) => {
        console.log(e);
        window.top.postMessage({ id:"bloxility-post-protocol", css: myCodeMirror.getValue()}, '*')
    });
};

document.getElementById('setStyle').onclick = (e) => {
    let value = document.getElementById('stylesheetSrc').value;
    try {

        const link = new URL(value);

        fetch(link.href).then(res => res.text())
        .then(css => {
            console.log(myCodeMirror.setValue(css));
            window.top.postMessage({ id:"bloxility-post-protocol", css: css}, '*')
        });

    }
    catch {
        return;
    }
}