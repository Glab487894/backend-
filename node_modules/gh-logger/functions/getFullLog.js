//add modules
const fs = require('fs');

const getFullLog = (pathToLogFile) => {
// read and parse log file
    let file = fs.readFileSync(pathToLogFile, 'utf8');
    return JSON.parse(file);
}

module.exports = getFullLog;