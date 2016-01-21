Blockly.Python['arm_named_pose'] = function(block) {
  var dropdown_named_pose = block.getFieldValue('arm_pose_name');
  var text_time = block.getFieldValue('time');
  var text_pause = block.getFieldValue('pause');

  var code = "";
  code += "dropdown_named_pose = '" + dropdown_named_pose.toString() + "'" + "\n";
  code += "time = " + text_time.toString() + "\n";
  code += "pause = " + text_pause.toString() + "\n";


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
  readPythonFile("../blockly/generators/python/scripts/arm_named_pose.py");

  return code;
};
