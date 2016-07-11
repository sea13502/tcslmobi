var React = require( "react" );
var ReactDom = require( "react-dom" );
var routes = require( "../routes.js" );
var css = require( "../css/text.css" );

ReactDom.render(routes,
	document.getElementById("container"));