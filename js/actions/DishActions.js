var AppDispatcher = require("../dispatcher/AppDispatcher.js");
var DishConstants = require( "../constants/DishConstants.js" );

var DishActions = {
	rightpartScroll : function( dishIndex ){
		AppDispatcher.dispatch({
			actionType : DishConstants.RIGHT_SCROLL,
			dishIndex : dishIndex
		});
	},
	leftBtnClick : function( dishIndex ){
		AppDispatcher.dispatch({
			actionType : DishConstants.LFFT_CLICK,
			dishIndex : dishIndex
		});
	}
};

module.exports = DishActions;