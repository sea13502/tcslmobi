var AppDispatcher = require( '../dispatcher/AppDispatcher.js' );
var EventEmitter = require('events').EventEmitter;

var assign = require('object-assign');

var CHANGE_EVENT = "change";

var allDishes = JSON.parse( 
document.getElementById("dishdata").innerHTML );

var DishStore = assign({},EventEmitter.prototype,{
	getAllDishes:function(){
		return allDishes;
	},
	emitChange:function(){
		this.emit( CHANGE_EVENT );
	},
	addChangeListener:function( callback ){
		this.on( CHANGE_EVENT,callback );
	},
	removeChangeListener: function(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	}
});

AppDispatcher.register(function( action ){
	switch( action.actionType ){
		case "DISHBOX_RESIZE":
			DishStore.emitChange();
			break;

		default:
	}
});

module.exports = DishStore;