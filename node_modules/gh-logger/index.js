// add functions
const addLog = require('./functions/addLog');
const getFullLog = require('./functions/getFullLog');
// add modules
const path = require('path');
// path to the log file
let pathToLogFile;

// methods
exports.connect = (dirname, logPath) => pathToLogFile = path.join(dirname, logPath);
exports.addLog = (log) => addLog(pathToLogFile, log);
exports.getFullLog = () => {return getFullLog(pathToLogFile)};
