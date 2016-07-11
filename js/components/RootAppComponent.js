var React = require( "react" );
var Container = require( "amazeui-touch" ).Container;

var RootAppComponent = React.createClass({
	render:function(){
		return (
			<div
          		transition='rfr'
        	>
				{ this.props.children }
			</div>	
		)
	}
});

module.exports = RootAppComponent;