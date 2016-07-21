var React = require( "react" );
var DishStore = require( "../stores/DishStore.js" );

var View = require( "amazeui-touch" ).View;

var RightPart = require( "../components/dish/RightPart.js" );
var LeftPart = require( "../components/dish/LeftPart.js" );

var BaseComponent = React.createClass({

	// getInitialState:function(){
	// 	return DishStore.getAllDishes();
	// },

	// componentDidMount:function(){
	// 	document.getElementById("leftbox").style.height = document.documentElement.clientHeight + "px";
	// 	document.getElementById("rightbox").style.height = document.documentElement.clientHeight + "px";
	// },

	render:function(){
		var allDish = DishStore.getAllDishes();
		var allTc = DishStore.getAllTc();

		//console.log( allTc );

		return(
			<div id="diancaican">
				<div style={{ height:"45px" }}>
					topbar
				</div>
				<div id="main">
					<LeftPart data={allDish} />
					<RightPart data={allDish} />				
				</div>
				<div style={{ height:"45px" }}>
					footer
				</div>
			</div>
		)
	}

});

module.exports = BaseComponent;