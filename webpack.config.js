var path = require("path");
var webpack = require( "webpack" );

module.exports = {
	entry:'./js/app.js',
	output:{
		path:path.join( __dirname,"js" ),
		filename:"bundle.js"
		,
		libraryTarget: "umd"
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin({
			compressor:{
				warnings:false
			}
		})
	],
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
	,
	externals:{
		"react":"React",
		"react-dom":"ReactDOM",
		'amazeui-touch': 'AMUITouch',
  		'react-addons-css-transition-group':
    	['React', 'addons', 'CSSTransitionGroup'],
    	'react-router':'ReactRouter'
	}
	// ,
	// resolve: {
	//     alias: {
	//         "react": "react/dist/react.min.js"
	//         ,
	//         "react_dom":"react-dom/dist/react-dom.min.js"
	//     }
	// }
}