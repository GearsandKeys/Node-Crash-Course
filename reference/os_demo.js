const os = require('os');

//Platform
console.log(os.platform());
//darwin for Mac
//win32 for Windows
//linux for Linux

// CPU Architecture
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free Memory
console.log(os.freemem());

// Total Memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());