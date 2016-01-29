Blockly.Blocks['arm_named_pose'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move arm to named pose:")
        .appendField(new Blockly.FieldDropdown([["Home", "ra_home"], ["Up", "ra_up"], ["Start pose", "start_pose"], ["Face tools", "face_tools_pose"], ["Wrench approach 1", "approach_wrench_2"], ["Wrench approach 2", "approach_wrench_3"], ["Wrench approach 3", "approach_wrench_4"], ["Wrench approach 4", "approach_wrench_5"], ["Lift wrench", "lift_wrench"], ["Remove wrench from hook", "move_fron_wrench"], ["Screwdriver pregrasp 1", "screwdriver_pregrasp"], ["Screwdriver pregrasp 2", "screwdriver_pregrasp_2"], ["Screwdriver pregrasp 3", "screwdriver_pregrasp_3"], ["Lift screwdriver", "screwdriver_up"], ["Remove screwdriver from hook", "screwdriver_free"], ["Place object", "wrench_down_1"], ["Drop object", "wrench_down_drop"], ["Washer pregrasp 1", "washer_pregrasp_1"], ["Washer pregrasp 2", "washer_pregrasp_2"], ["Grasp washer", "washer_grasp"], ["Remove washer", "move_from_washer"]]), "arm_pose_name");
    this.appendDummyInput()
        .appendField("Interpolation time: ")
        .appendField(new Blockly.FieldTextInput("3"), "time")
        .appendField("s")
        .appendField("Pause: ")
        .appendField(new Blockly.FieldTextInput("0"), "pause")
        .appendField("s");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.shadowrobot.com/');
  }
};