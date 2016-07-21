var React = require( "react" );
var DishCell = require( "../../components/dish/DishCell.js" );
var TcCell = require( "../../components/dish/TcCell.js" );
var DishclassCell = require( "../../components/dish/DishclassCell.js" );
var DishStore = require( "../../stores/DishStore.js" );
var DishActions = require( "../../actions/DishActions.js" );
var DishConstants = require( "../../constants/DishConstants.js" );
var Container = require( "amazeui-touch" ).Container;

//检测图片是不是显示出来了
function checkDishShow( dishImgGroup,dishes,canHeight ){
	var scrollTop = document.getElementById("rightBoxIn").scrollTop;
	for( var i = 0 ; i < dishes.length ; i++ ){
		if( dishes[i] - 45 > scrollTop && ( scrollTop + canHeight ) > ( dishes[i] - 45 ) ){
			//console.log( dishImgGroup[i] );
			dishImgGroup[i].setAttribute( "src" , dishImgGroup[i].getAttribute( "data-lazy-src" ) );
		}
	}
	//console.log( dishes );
}

var RightPart = React.createClass({
	componentDidMount:function(){
		document.getElementById( "rightBoxIn" ).style.height = document.documentElement.clientHeight - this._footerHeight - this._topbarHeight + "px";
		//document.getElementById( "main" ).style.height = document.documentElement.clientHeight - this._topbarHeight + "px";
	    DishStore.addChangeListener( this._onChange );

	    var wholeDis = [];
		for( 
			var i = 0 ;
			i < document.getElementsByClassName( "singleclassName" ).length ;
			i++	
		 ){
			wholeDis.push( 
				document.getElementsByClassName( "singleclassName" )[i].getBoundingClientRect().top
			)
		}
		this._wholeDisArr = wholeDis;
		//所有的菜品图距离上面的距离
		var wholedishDis = [];
		var dishImgGroup = document.getElementsByClassName("dishImg");

		var canHeight = Number( document.getElementById("rightBoxIn").style.height.slice(0,-2) );
		for(
			var j = 0 ;
			j < dishImgGroup.length ;
			j++
		){
			wholedishDis.push(
				dishImgGroup[j].offsetTop
			);
		}
		var _wholeDishDis = wholedishDis;

		setInterval( function(){
			checkDishShow( dishImgGroup,_wholeDishDis,canHeight );
		},1000 );
	},
	componentWillMount:function(){
	    DishStore.removeChangeListener( this._onChange );
	},
	handleScroll:function(e){
		for( var i = 0 , $category ; $category = this._suchDom().foodCategory[i] ; i++ ){
			if (!$category) {
                break;
            }
            var $categoryNext = this._suchDom().foodCategory[i+1];
            var pTop = $category.getBoundingClientRect().top;
			if( $categoryNext ){
				if( pTop <= this._topbarHeight && $categoryNext.getBoundingClientRect().top > this._topbarHeight ){
					DishActions.rightpartScroll( i );
				}
			}else if( pTop <= this._topbarHeight ){
				DishActions.rightpartScroll( i );
			}

		}
	},
	getInitialState:function() {
	    return {
	        crtClassName:DishStore.getCrtclass().name
	    };
	},
	render:function(){
		var allDish = this.props.data.alldish;
		var allTc = this.props.tcdata.alltc;

		var styleObj = {};
		
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
			//判断是不是最后一个，然后给对应的样式，让最后一个菜类能撑满
			if( allTc.length == 0 ){
				if( i == allDish.length-1 ){
					styleObj = { "minHeight":this._suchDom().clientHeight - this._topbarHeight - this._footerHeight };
				}
			}
			allDishArr.push(
				<Container className="singleclassName" style={ styleObj }>
					{dishInClass} 
				</Container>
			);
		}
		for( var k = 0 ; k < allTc.length ; k++ ){
			var tcInClass = [];
			tcInClass.push(
				<DishclassCell data={ allTc[k] }/>
			);
			for( var q = 0 ; q < allTc[k].tcItems.length ; q++ ){
				tcInClass.push(
					<TcCell data={ allTc[k].tcItems[q] }/>
				);
			}
			if( k == allTc.length-1 ){
				styleObj = { "minHeight":this._suchDom().clientHeight - this._topbarHeight - this._footerHeight };
			}
			allDishArr.push(
				<Container className="singleclassName" style={ styleObj }>
					{tcInClass} 
				</Container>
			);
		}


		return (
			<div id="rightbox" className="right">
				<div className="floatClassName">
					{ this.state.crtClassName }
				</div>
				<div id="rightBoxIn" 
					onTouchStart = { this.handleScroll }
					onTouchMove = { this.handleScroll } 
			  		onScroll = { this.handleScroll } 
			  		onTouchEnd = { this.handleScroll }
			  	>
					{ allDishArr }
				</div>
			</div>
		);
	},
	_onChange:function(){
		//获取新的菜类名在浮动菜类上面显示 console.log(  "scrolling");
		this.setState( { crtClassName:DishStore.getCrtclass().name } );
		if( DishStore.getCrtActionType() == DishConstants.LFFT_CLICK ){
			document.getElementById( "rightBoxIn" ).scrollTop = this._wholeDisArr[ DishStore.getCrtclassIndex() ] - this._topbarHeight;
			//console.log( this._wholeDisArr );
		}
	
	},
	_suchDom:function(){
		return{ 
			menuContent:document.getElementById( "rightbox" ),
			foodCategory:document.getElementsByClassName( "singleclassName" ),
			clientHeight:document.documentElement.clientHeight
		}
	},
	_topbarHeight:45,
	_footerHeight:45
});

module.exports = RightPart;