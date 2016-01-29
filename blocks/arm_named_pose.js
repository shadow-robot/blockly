Blockly.Blocks['arm_named_pose'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move arm to named pose:")
        .appendField(new Blockly.FieldDropdown([["Home", "ra_home"], ["Up", "ra_up"], ["Start pose", "start_pose"], ["Face tools", "face_tools_pose"], ["Screwdriver pregrasp 1", "screwdriver_pregrasp"], ["Screwdriver pregrasp 2", "screwdriver_pregrasp_2"], ["Screwdriver pregrasp 3", "screwdriver_pregrasp_3"], ["Lift screwdriver", "screwdriver_up"], ["Remove screwdriver from hook", "screwdriver_free"], ["Place object", "wrench_down_1"], ["Drop object", "wrench_down_drop"], ["Washer pregrasp 1", "washer_pregrasp_1"], ["Washer pregrasp 2", "washer_pregrasp_2"], ["Grasp washer", "washer_grasp"], ["Remove washer", "move_from_washer"], ["Wrench pregrasp 1", "approach_hand_1"], ["Wrench pregrasp 2", "approach_hand_2"], ["Wrench pregrasp 3", "approach_hand_3"], ["Wrench pregrasp 4", "approach_hand_4"], ["Wrench pregrasp 5", "approach_wrench_2"], ["Wrench pregrasp 6", "approach_wrench_3"], ["Wrench pregrasp 7", "approach_wrench_4_b"]]), "arm_pose_name");
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