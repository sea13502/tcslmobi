var React = require( "react" );
var ReactDom = require( "react-dom" );
var BaseComponent = require( "./components/BaseComponent.js" );
var css = require( "../css/text.css" );

ReactDom.render(<BaseComponent />,
	document.getElementById("container"));