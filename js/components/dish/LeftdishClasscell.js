var React = require( "react" );
var DishStore = require( "../../stores/DishStore.js" );
var DishActions = require( "../../actions/DishActions.js" );

var LeftdishClasscell = React.createClass({
	getInitialState:function(){
	    return {
	          dishClassStyle:""
	    };
	},
	componentDidMount:function() {
	    DishStore.addChangeListener( this._onChange );
	},
	componentWillMount:function(){
	    DishStore.removeChangeListener( this._onChange );
	},
	render:function(){
		var singleClass = this.props.singleClass;
		var index = this.props.index;

		return(
			<div key={ singleClass.itemClassId } 
				 onClick={ this.clickHandler }
				 className={ this.state.dishClassStyle }
			>
				{ singleClass.name }
			</div>
		)
	},
	clickHandler:function(){
		//console.log( this.props.singleClass );
		DishActions.leftBtnClick( this.props.index );
	},
	_onChange:function(){
		if(DishStore.getCrtclassIndex() == this.props.index){
			this.setState( { dishClassStyle : "active" } );
		}else{
			this.setState( { dishClassStyle : "" } );
		}
	}
});

module.exports = LeftdishClasscell;