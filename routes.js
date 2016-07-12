var Router = require( "react-router" ).Router;
var Route = require( "react-router" ).Route;
var IndexRoute = require( "react-router" ).IndexRoute;
var hashHistory = require( "react-router" ).hashHistory;

var BaseComponent = require( "./js/components/BaseComponent.js" );
var RootApp = require( "./js/components/RootAppComponent.js" );
var LianxiComponent = require( "./js/components/LianxiComponent.js" );
var Home = require( "./js/components/HomeComponent.js" );


var routes = (
	<Router history={ hashHistory }>
		<Route path="/" component={ RootApp }>
			<IndexRoute component={ Home }/>
			<Route path="/diancai" component={ BaseComponent }/>
			<Route path=":lianxi" component={ LianxiComponent }/>
		</Route>
	</Router>
);

module.exports = routes;