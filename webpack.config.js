var path = require("path");

module.exports = {
	entry:'./js/app.js',
	output:{
		path:path.join( __dirname,"js" ),
		filename:"bundle.js"
		,
		libraryTarget: "umd"
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
	,
	externals:{
		"react":"React",
		"react-dom":"ReactDOM",
		'amazeui-touch': 'AMUITouch',
  		'react-addons-css-transition-group':
    	['React', 'addons', 'CSSTransitionGroup']
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