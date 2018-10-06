const os = require('os');
const Observable = require("events");

function checkSystem(){
  console.log('Checking your system...');
  const cpuCount = os.cpus().length;
  if(cpuCount <= 2){
    console.log('Processor is not supported');
    return;
  }
  const gigaByte = 1 / (Math.pow(1024, 3)); 
  const totalRam =  os.totalmem() * gigaByte;

  if(totalRam < 4){
    console.log('This app needs at least 4 GB of RAM') ;
    return;
  }
  console.log('System is checked sucessfuly');
}

checkSystem();


console.log('From observable');

class Check extends Observable {
  constructor() {
    super();
  }
}

const ck = new Check();
ck.on("ck", c => c);
ck.emit("ck", checkSystem());