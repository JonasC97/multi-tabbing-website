const express = require('express');
const compression = require('compression')
var fs = require('fs');
const app = express();
const cors = require('cors');
const path = require('path');
const configtxt  = fs.readFileSync('server_config.json','utf8');
var util = require('util');
const dayjs = require('dayjs');

const config = JSON.parse(configtxt);
const port = config.port;

const bodyParser = require('body-parser');
app.use(compression());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(config.pathToProject));
app.use(cors({
  origin: '*'
}));

app.use('/cldr-data', express.static(path.join(__dirname, 'node_modules', 'cldr-data')));

app.get('/*', (req, res) => {
res.sendFile(__dirname+'/'+config.pathToProject+'/index.html');
});


console.log("path to angular index:"+__dirname+'/'+config.pathToProject+'/index.html');


//As http server
const HOST = '0.0.0.0';
app.listen(port, HOST);



console.log("App listening on port: "+ port);