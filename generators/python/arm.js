Blockly.Python['arm'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');
  var value_axis = Blockly.Python.valueToCode(block, 'Axis', Blockly.Python.ORDER_ATOMIC);
  var text_displacement = block.getFieldValue('displacement');
  var value_displacement = Blockly.Python.valueToCode(block, 'displacement', Blockly.Python.ORDER_ATOMIC);

  var code = "";
  code += "dropdown_axis = \"" + dropdown_axis.toString() + "\"\n";
  code += "text_displacement = " + text_displacement.toString() + "\n";


  function readPythonFile(file)
  {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                code += rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
  }
  readPythonFile("../blockly/generators/python/scripts/arm.py");


  return code;
};