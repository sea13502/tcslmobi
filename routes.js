var Router = require( "react-router" ).Router;
var Route = require( "react-router" ).Route;
var hashHistory = require( "react-router" ).hashHistory;

var BaseComponent = require( "./js/components/BaseComponent.js" );

var routes = (
	<Router history={ hashHistory }>
		<Route path="/aaass" component={ BaseComponent }/>
	</Router>
);

module.exports = routes;