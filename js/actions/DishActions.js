var AppDispatcher = require("../dispatcher/AppDispatcher.js");
var DishConstants = require( "../constants/DishConstants.js" );

var DishActions = {
	rightpartScroll : function(){
		AppDispatcher.dispatch({
			actionType : DishConstants.RIGHT_SCROLL
		});
	}
};

module.exports = DishActions;