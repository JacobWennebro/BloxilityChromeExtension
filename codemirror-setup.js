window.onmessage = function(e){
    let myCodeMirror = CodeMirror(document.getElementById('css'), {
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