
Blockly.Blocks['grasp'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField(new Blockly.FieldTextInput("grasp_name"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(306);
    this.setTooltip('');
    this.setHelpUrl('http://www.shadowrobot.com/');
  }
};