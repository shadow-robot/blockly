Blockly.Blocks['initialise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Load Commander")
        .appendField(new Blockly.FieldDropdown([["Arm Commander", "arm_commander"], ["Hand Commander", "hand_commander"], ["Hand and Arm", "hand_and_arm"]]), "Commander")
        .appendField(new Blockly.FieldDropdown([["Right", "right"], ["Left", "left"]]), "Side");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.shadowrobot.com/');
  }
};