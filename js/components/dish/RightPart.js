var React = require( "react" );
var DishCell = require( "../../components/dish/DishCell.js" );
var DishclassCell = require( "../../components/dish/DishclassCell.js" );
var DishStore = require( "../../stores/DishStore.js" );
var DishActions = require( "../../actions/DishActions.js" );

var Container = require( "amazeui-touch" ).Container;

var RightPart = React.createClass({
	// componentDidUpdate:function(prevProps, prevState) {
	//   	// var node = document.getElementById( "rightbox" );
 //  		// node.scrollTop = node.scrollHeight;
 //  		console.log( "componentDidUpdate" );
	// },
	// componentWillUpdate:function(){
	// 	console.log( "componentWillUpdate" );	
	// },
	componentDidMount:function(){
	    DishStore.addChangeListener( this._onChange );
	},
	componentWillMount:function(){
	    DishStore.removeChangeListener( this._onChange );
	},
	handleScroll:function(e){
		//console.log(e);
		DishActions.rightpartScroll();
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
	},
	_onChange:function(){
		console.log(  "scrolling");
	}
});

module.exports = RightPart;