Blockly.Python['text_to_speech'] = function(block) {
  var text_command = block.getFieldValue('command');

  var code = "text_command = '" + text_command + "'\n" ;

  code += Blockly.readFile("../blockly/generators/python/scripts/text_to_speech.py");

  return code;
};
