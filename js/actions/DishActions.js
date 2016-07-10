var AppDispatcher = require("../dispatcher/AppDispatcher.js");

var DishActions = {
	resizeBox : function(){
		AppDispatcher.dispatch({
			actionType : "DISHBOX_RESIZE"
		});
	}
};

module.exports = DishActions;