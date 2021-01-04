const fs = require('fs');
const path = require('path');

let dirPath;
let configPath;

function fsReadJson(){
    let file = fs.readFileSync(path.join(dirPath, configPath), 'utf8');
    let parsedFile = JSON.parse(file);
    return parsedFile;
}

const getConfig = function(methodKey, dirname, path){
	if(methodKey == 'connect'){
		dirPath = dirname;
		configPath = path;
	}else{
		let file = fsReadJson();
		let answer = file[methodKey];
		return(answer);
	}
}

module.exports = getConfig;