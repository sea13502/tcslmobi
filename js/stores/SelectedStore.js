var AppDispatcher = require( '../dispatcher/AppDispatcher.js' );
var DishConstants = require( "../constants/DishConstants.js" );
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = "change";

//取到所有的菜品，然后生成已选菜品的数据结构
var allDishes = JSON.parse( 
document.getElementById("dishdata").innerHTML );
var allTc = {};
if( document.getElementById("tcdata").innerHTML != "" ){
	allTc = JSON.parse( document.getElementById("tcdata").innerHTML );
}
//已选菜品数据
var selectedDish = {};

var SelectedStore = assign({},EventEmitter.prototype,{

});

AppDispatcher.register(function( action ){
	switch( action.actionType ){

	}
});

module.exports = SelectedStore;