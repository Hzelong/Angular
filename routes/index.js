/**
 * 
 * @authors zelong (you@example.org)
 * @date    2017-03-24 17:45:46
 * @version $Id$
 */
function returnData(con){
	return require("../controllers/"+con+".js");
}
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index',returnData('index'));
    });
    app.post('/index',function(req, res) {
		console.log(req.body);
		res.send(req.body);
    });
};