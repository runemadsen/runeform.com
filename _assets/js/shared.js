//= require shared/codemirror

var editors = document.getElementsByClassName("editor");
for(var i = 0; i < editors.length; i++) {
  var codemirror = CodeMirror.fromTextArea(editors[i], {});
}
