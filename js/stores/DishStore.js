var AppDispatcher = require( '../dispatcher/AppDispatcher.js' );
var DishConstants = require( "../constants/DishConstants.js" );
var EventEmitter = require('events').EventEmitter;

var assign = require('object-assign');

var CHANGE_EVENT = "change";

var allDishes = JSON.parse( 
document.getElementById("dishdata").innerHTML );
var allTc = {};
if( document.getElementById("tcdata").innerHTML != "" ){
	allTc = JSON.parse( document.getElementById("tcdata").innerHTML );
}
var dishclassName = "";

var DishStore = assign({},EventEmitter.prototype,{
	getAllDishes:function(){
		return allDishes;
	},
	getAllTc:function(){
		return allTc;
	},
	getCrtclassname:function(){
		return dishclassName;
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
		case DishConstants.RIGHT_SCROLL:
			DishStore.emitChange();
			break;

		default:
	}
});

module.exports = DishStore;