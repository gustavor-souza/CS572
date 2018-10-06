const fs = require("fs");

process.on("message", msg => {
  fs.readFile(msg, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
      process.send(data);
    } else {
      console.log(err);
    }
  });
});

