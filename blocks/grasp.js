Blockly.Blocks['grasp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Grasp")
        .appendField(new Blockly.FieldDropdown([["Pack", "pack"], ["Open", "open"], ["Victory", "victory"]]), "grasp_name");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Interpolation time"), "time")
        .appendField("(s)")
        .appendField(new Blockly.FieldTextInput("Pause"), "pause")
        .appendField("(s)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(306);
    this.setTooltip('');
    this.setHelpUrl('http://www.shadowrobot.com/');
  }
};