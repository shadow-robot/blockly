Blockly.Blocks['grasp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Grasp")
        .appendField(new Blockly.FieldDropdown([["Pack", "pack"], ["Open", "open"], ["Fingers packed, open thumb", "fingers_pack_thumb_open"], ["Start pose", "start_pose"], ["Screwdriver pregrasp 1", "screwdriver_pregrasp"], ["Screwdriver pregrasp 2", "screwdriver_pregrasp_2"], ["Screwdriver pregrasp 3", "screwdriver_pregrasp_3"], ["Grasp screwdriver", "screwdriver_grasp"], ["Remove screwdriver from hook", "screwdriver_free"], ["Washer pregrasp 1", "washer_pregrasp_1"], ["Washer pregrasp 2", "washer_pregrasp_2"], ["Grasp washer", "washer_grasp"], ["Wrench pregrasp 1", "approach_hand_grasp_1"], ["Wrench pregrasp 2", "approach_hand_grasp_2"], ["Wrench pregrasp 3", "approach_hand_grasp_3"], ["Wrench pregrasp 4", "approach_hand_grasp_4"], ["Wrench pregrasp 5", "approach_wrench_2"], ["Wrench pregrasp 6", "approach_wrench_3"], ["Wrench pregrasp 7", "approach_wrench_4_b"], ["Place object", "wrench_down_1"], ["Drop object", "wrench_down_drop"]]), "grasp_name");
    this.appendDummyInput()
        .appendField("Interpolation time: ")
        .appendField(new Blockly.FieldTextInput("3"), "time")
        .appendField("s")
        .appendField("Pause: ")
        .appendField(new Blockly.FieldTextInput("0"), "pause")
        .appendField("s");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(306);
    this.setTooltip('');
    this.setHelpUrl('http://www.shadowrobot.com/');
  }
};
