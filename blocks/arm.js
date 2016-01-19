
Blockly.Blocks['arm'] = {
  init: function() {
    this.appendValueInput("Axis")
        .setCheck("String")
        .appendField("Move arm:")
        .appendField(new Blockly.FieldDropdown([["X", "x_axis"], ["Y", "y_axis"], ["Z", "z_axis"]]), "axis")
        .appendField("axis");
    this.appendValueInput("displacement")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput("10"), "displacement")
        .appendField("cm");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(197);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};