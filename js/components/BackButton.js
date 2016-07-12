var React = require( "react" );
var Button = require( "amazeui-touch" ).Button;

var Link = require( "react-router" ).Link;

var BackButton = React.createClass({
	render:function(){
		return(
			<Button>
				<Link to="/">返回</Link>
			</Button>
		)
	}
});

module.exports = BackButton;