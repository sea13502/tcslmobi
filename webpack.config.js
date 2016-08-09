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
	//压缩代码用
	// plugins:[
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		compressor:{
	// 			warnings:false
	// 		}
	// 	})
	// ],
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
	},
	// 下面的这句话可以生成sorcemap，找不到那个文件，但是可以定位错误位置
	// devtool: 'eval-source-map'
	// ,
	// resolve: {
	//     alias: {
	//         "react": "react/dist/react.min.js"
	//         ,
	//         "react_dom":"react-dom/dist/react-dom.min.js"
	//     }
	// }
}