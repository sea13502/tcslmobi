var React = require( "react" );
var BackButton = require( "../../components/BackButton.js" );
var Container = require( "amazeui-touch" ).Container;
var LeftdishClasscell = require( "../../components/dish/LeftdishClasscell.js" );

var LeftPart = React.createClass({
	componentDidMount:function(){
		document.getElementById( "leftbox" ).style.height = document.documentElement.clientHeight - 90 + "px";
	},
	render:function(){
		var allDish = this.props.data.alldish;
		var allTc = this.props.tcdata.alltc;

		var allDishClassArr = [];
		for( var i = 0 ; i < allDish.length ; i++ ){
			allDishClassArr.push( 
				<LeftdishClasscell singleClass={ allDish[i] } index={ i } />
			);
		}
		for( var j = 0 ; j < allTc.length ; j++ ){
			var index = j + allDish.length;
			allDishClassArr.push( 
				<LeftdishClasscell singleClass={ allTc[j] } index={ index } />
			);	
		}

		return (
			<div id="leftbox" className="left">
				{ allDishClassArr }
				<BackButton />
			</div>
		)
	}
});

module.exports = LeftPart;