
function update()
{
    var idoc = document.getElementById('iframe').contentWindow.document;

    idoc.open();
    idoc.write(editor.getValue());
    idoc.close();
}

function setupEditor()
{
window.editor = ace.edit("editor");
editor.setTheme("ace/theme/kr_theme");
editor.getSession().setMode("ace/mode/html");
editor.setValue(`<!DOCTYPE html>
<html>
<head>
</head>

<body>
</body>

</html>`,1); //1 = moves cursor to end
    
editor.getSession().on('change', function() {
    update();
});

editor.focus();

editor.setOptions({
    fontSize: "12pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:false,
    enableBasicAutocompletion: true, enableLiveAutocompletion: false
});

editor.setShowPrintMargin(false);
editor.setBehavioursEnabled(false);
}

setupEditor();
update();