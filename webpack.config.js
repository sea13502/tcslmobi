var path = require("path");

module.exports = {
	entry:'./js/app.js',
	output:{
		path:path.join( __dirname,"js" ),
		filename:"bundle.js"
	},
	module:{
		loaders:[{
			test:/\.js|jsx$/,
			//loader:'jsx?harmony'
			loader:'jsx'
		},{
			test:/\.css$/,
			loaders:['style','css']
		}]
	}
}