Blockly.Python['initialise'] = function(block) {
  var dropdown_commander = block.getFieldValue('commander');
  var dropdown_side = block.getFieldValue('side');
  var code = "";

  code += "dropdown_commander = '" + dropdown_commander.toString() + "'" + "\n";
  code += "side = '" + dropdown_side.toString() + "'" + "\n";

  code += Blockly.readPythonFile("../blockly/generators/python/scripts/initialise.py");

  return code;
};