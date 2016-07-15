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
var dishCrtclass = allDishes.alldish[0];
var dishCrtclassIndex = 0;

function updateDishCrtclass( dishIndex ){
	dishCrtclass = allDishes.alldish[ dishIndex ];
	dishCrtclassIndex = dishIndex;
}

var DishStore = assign({},EventEmitter.prototype,{
	getAllDishes:function(){
		return allDishes;
	},
	getAllTc:function(){
		return allTc;
	},
	getCrtclass:function(){
		return dishCrtclass;
	},
	getCrtclassIndex:function(){
		return dishCrtclassIndex;
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
			//更新数据
			updateDishCrtclass( action.dishIndex );
			DishStore.emitChange();
			break;
		case DishConstants.LFFT_CLICK:
			updateDishCrtclass( action.dishIndex );
			DishStore.emitChange();
		default:
	}
});

module.exports = DishStore;