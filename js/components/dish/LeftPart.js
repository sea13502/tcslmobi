var React = require( "react" );
var BackButton = require( "../../components/BackButton.js" );
var Container = require( "amazeui-touch" ).Container;

var LeftPart = React.createClass({
	render:function(){
		var allDish = this.props.data.alldish;

		var allDishClassArr = [];
		for( var i = 0 ; i < allDish.length ; i++ ){
			allDishClassArr.push( 
				<div key={ allDish[i].itemClassId }>
					{ allDish[i].name }
				</div>
			);
		}

		return (
			<Container id="leftbox" scrollable className="left">
				{ allDishClassArr }
				<BackButton />
			</Container>
		)
	}
});

module.exports = LeftPart;