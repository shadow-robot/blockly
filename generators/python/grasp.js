
Blockly.Python['grasp'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ""
  code+="import rospy\n"
  code+="rospy.sleep(1.0)\n"
  code+="\n"

  return code;
};