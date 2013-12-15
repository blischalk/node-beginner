exports.start = function(){
  console.log("Request handler 'start' was called.");
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }

  sleep(10000);
  return "Hello Start";
}

exports.upload = function(){
  console.log("Request handler 'upload' was called.");
  return "Hello Upload";
}
