var React = require( "react" );
var DishStore = require( "../stores/DishStore.js" );

var BaseComponent = React.createClass({

	getInitialState:function(){
		return DishStore.getAllDishes();
	},

	componentDidMount:function(){
		document.getElementById("leftbox").style.height = document.documentElement.clientHeight + "px";
		document.getElementById("rightbox").style.height = document.documentElement.clientHeight + "px";
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
				<div className="dishGroupName">
					{ allDish[i].name }
				</div>
			);
			for( var j = 0 ; j < allDish[i].items.length ; j++ ){
				dishInClass.push(
					<div> { allDish[i].items[j].name }
						<div>22</div><div>22</div> <div>22</div>
					</div>
				);
			}
			allDishArr.push( dishInClass );
		}

		

		return(
			<div>
				<div id="leftbox" className="left">
					{ allDishClassArr }
				</div>
				<div id="rightbox" className="right">
					{ allDishArr }
				</div>
			</div>
		)
	}

});

module.exports = BaseComponent;