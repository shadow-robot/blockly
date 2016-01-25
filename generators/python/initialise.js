Blockly.Python['initialise'] = function(block) {
  var dropdown_commander = block.getFieldValue('commander');
  var dropdown_side = block.getFieldValue('side');
  var code = "";

  code += "dropdown_commander = '" + dropdown_commander.toString() + "'" + "\n";
  code += "side = '" + dropdown_side.toString() + "'" + "\n";

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
  readPythonFile("../blockly/generators/python/scripts/initialise.py");
  return code;
};