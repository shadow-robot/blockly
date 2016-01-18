
Blockly.Python['grasp'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = "";

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
                code = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}
    readPythonFile("../blockly/generators/python/scripts/grasp.py");

  return code;
};