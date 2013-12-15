exports.start = function(){
  console.log("Request handler 'start' was called.");
  return "Hello Start";
}

exports.upload = function(){
  console.log("Request handler 'upload' was called.");
  return "Hello Upload";
}
