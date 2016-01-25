Blockly.Python['pose'] = function(block) {
  var dropdown_wait = block.getFieldValue('wait');
  var text_x = block.getFieldValue('x');
  var text_y = block.getFieldValue('y');
  var text_z = block.getFieldValue('z');

  var code = "";
  code += "wait = \"" + dropdown_wait.toString() + "\"\n";
  code += "x_displacement = " + text_x.toString() + "\n";
  code += "y_displacement = " + text_y.toString() + "\n";
  code += "z_displacement = " + text_z.toString() + "\n";

  code += Blockly.readPythonFile("../blockly/generators/python/scripts/pose.py");

  return code;
};