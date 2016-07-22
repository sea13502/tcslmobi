var React = require( "react" );
var ReactDom = require( "react-dom" );
//var routes = require( "../routes.js" );
var Base = require( "../js/components/BaseComponent.js" );
var css = require( "../css/text.css" );

ReactDom.render(<Base />,
	document.getElementById("container"));