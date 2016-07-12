var React = require( "react" );
var View = require( "amazeui-touch" ).View;
//var pages = require( "../components/*" );
var pages = {};
pages["lianxi"] = require( "../components/LianxisonComponent.js" );

var LianxiComponent = React.createClass({

	render:function(){

		var component = this.props.params.lianxi;

		var Comp = pages[ component ];

		return (
			<View>
				<Comp />
			</View>
		)
	}
});

module.exports = LianxiComponent;