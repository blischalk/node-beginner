var exec = require("child_process").exec;

exports.start = function(){
  console.log("Request handler 'start' was called.");
  var content = "empty";
  exec("ls -lah", function(err, stdout, stderr) {
    content = stdout;
  });

  return content;
}

exports.upload = function(){
  console.log("Request handler 'upload' was called.");
  return "Hello Upload";
}
