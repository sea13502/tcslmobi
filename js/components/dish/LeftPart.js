var React = require( "react" );
var BackButton = require( "../../components/BackButton.js" );
var Container = require( "amazeui-touch" ).Container;
var LeftdishClasscell = require( "../../components/dish/LeftdishClasscell.js" );

var LeftPart = React.createClass({
	render:function(){
		var allDish = this.props.data.alldish;

		var allDishClassArr = [];
		for( var i = 0 ; i < allDish.length ; i++ ){
			allDishClassArr.push( 
				<LeftdishClasscell singleClass={ allDish[i] } index={ i } />
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