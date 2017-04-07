/**
 * 
 * @authors zelong (you@example.org)
 * @date    2017-03-24 17:36:03
 * @version $Id$
 */

var express = require('express'),
	app = express(),
	hbs = require('hbs'),
	bodyParser = require('body-parser');
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.static('dist'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
require('./routes/index.js')(app);
app.listen('3000');