Blockly.Python['grasp'] = function(block) {
  var dropdown_grasp_name = block.getFieldValue('grasp_name');
  var text_time = block.getFieldValue('time');
  var text_pause = block.getFieldValue('pause');

  var code = "";
  code += "dropdown_grasp = '" + dropdown_grasp_name.toString() + "'" + "\n";
  code += "time = " + text_time.toString() + "\n";
  code += "pause = " + text_pause.toString() + "\n";

  code += Blockly.readPythonFile("../blockly/generators/python/scripts/grasp.py");

  return code;
};
