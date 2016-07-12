var React = require( "react" );
var DishStore = require( "../stores/DishStore.js" );

var Container = require( "amazeui-touch" ).Container;
var Group = require( "amazeui-touch" ).Group;
var Grid = require( "amazeui-touch" ).Grid;
var Col = require( "amazeui-touch" ).Col;
var View = require( "amazeui-touch" ).View;

var BackButton = require( "../components/BackButton.js" );
var DishCell = require( "../components/dish/DishCell.js" );
var DishclassCell = require( "../components/dish/DishclassCell.js" );

var BaseComponent = React.createClass({

	getInitialState:function(){
		return DishStore.getAllDishes();
	},

	componentDidMount:function(){
		//document.getElementById("leftbox").style.height = document.documentElement.clientHeight + "px";
		//document.getElementById("rightbox").style.height = document.documentElement.clientHeight + "px";
	},

	render:function(){
		var allDish = this.state.alldish;

		var allDishClassArr = [];
		var allDishArr = [];
		for( var i = 0 ; i < allDish.length ; i++ ){
			allDishClassArr.push( 
				<div key={ allDish[i].itemClassId }>
					{ allDish[i].name }
				</div>
			);
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

		

		return(
			<View id="diancaican">
				<Container id="leftbox" scrollable className="left">
					{ allDishClassArr }
					<BackButton />
				</Container>
				<Container id="rightbox" scrollable className="right">
					{ allDishArr }
				</Container>
			</View>
		)
	}

});

module.exports = BaseComponent;