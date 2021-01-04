# gh-get-config
This module help you to get parameters from the config json file.
##### install
    npm install gh-get-config --save
    
##### Usage
    const getConfig = require('gh-get-config');
    
###### connect
    getConfig('connect', __dirname, './config.json');
here used exemple path: ./config.json, you can use else.

###### get parameters
    let port = getConfig('port');
you can not use 'connect' as parameter of function

###### exemple of config.json file
	{
		"host": "localhost",
		"port": "3000"
	}

