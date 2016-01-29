Blockly.Blocks['grasp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Grasp")
        .appendField(new Blockly.FieldDropdown([["Pack", "pack"], ["Open", "open"], ["Fingers packed, open thumb", "fingers_pack_thumb_open"], ["Start pose", "start_pose"], ["Open hand for wrench", "approach_wrench_5"], ["Grasp wrench", "grasp_wrench_script_pose"], ["Screwdriver pregrasp 1", "screwdriver_pregrasp"], ["Screwdriver pregrasp 2", "screwdriver_pregrasp_2"], ["Screwdriver pregrasp 3", "screwdriver_pregrasp_3"], ["Grasp screwdriver", "screwdriver_grasp"], ["Remove screwdriver from hook", "screwdriver_free"], ["Place object", "wrench_down_1"], ["Drop object", "wrench_down_drop"]]), "grasp_name");
    this.appendDummyInput()
        .appendField("Interpolation time: ")
        .appendField(new Blockly.FieldTextInput("3"), "time")
        .appendField("s")
        .appendField("Pause: ")
        .appendField(new Blockly.FieldTextInput("1"), "pause")
        .appendField("s");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(306);
    this.setTooltip('');
    this.setHelpUrl('http://www.shadowrobot.com/');
  }
};