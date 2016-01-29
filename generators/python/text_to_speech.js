Blockly.Python['text_to_speech'] = function(block) {
  var text_command = block.getFieldValue('command');

  var code = "";

  code += Blockly.readPythonFile("../blockly/generators/python/scripts/text_to_speech.py");

  return code;
};