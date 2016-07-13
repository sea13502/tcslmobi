var React = require( "react" );
var DishCell = require( "../../components/dish/DishCell.js" );
var DishclassCell = require( "../../components/dish/DishclassCell.js" );
var Container = require( "amazeui-touch" ).Container;

var RightPart = React.createClass({
	handleScroll:function(e){
		console.log(e);
	},
	getInitialState:function() {
	    return {
	        crtClassName:this.props.data.alldish[0].name
	    };
	},
	render:function(){
		var allDish = this.props.data.alldish;

		var allDishArr = [];
		for( var i = 0 ; i < allDish.length ; i++ ){
			var dishInClass = [];
			dishInClass.push(
				<DishclassCell data={ allDish[i] }/>
			);
			for( var j = 0 ; j < allDish[i].items.length ; j++ ){
				dishInClass.push(
					<DishCell data={ allDish[i].items[j] }/>
				);
			}
			allDishArr.push( dishInClass );
		}

		return (
			<Container id="rightbox" scrollable className="right" onScroll={ this.handleScroll }>
				<div className="floatClassName">
					{ this.state.crtClassName }
				</div>
				{ allDishArr }
			</Container>
		);
	}
});

module.exports = RightPart;