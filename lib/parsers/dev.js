(function(){
	var $=require('../$');
	var parserPack=require('../parser');
	var parser=parserPack.dev;
	
	exports.handler=function(req, res, next, options){
	
		var text=parser.parse(req);
		res.end(text);
	};
}).call(this);