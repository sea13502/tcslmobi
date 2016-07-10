var path = require("path");

module.exports = {
	entry:'./js/app.js',
	output:{
		path:path.join( __dirname,"js" ),
		filename:"bundle.js"
	},
	module:{
		test:/\.js|jsx$/,
		loader:'jsx?harmony'
	}
}