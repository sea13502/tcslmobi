var React = require( "react" );
var Container = require( "amazeui-touch" ).Container;

var RootAppComponent = React.createClass({
	render:function(){
		var transition = 'sfr';
		return (
			<Container direction="column">
				<Container transition={ transition }>
					{React.cloneElement(this.props.children, {key: this.props.location.key})}
				</Container>
			</Container>
			
		)
	}
});

module.exports = RootAppComponent;