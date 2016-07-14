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
		//DishActions.rightpartScroll();
		// console.log( "scrollTop",this._suchDom().menuContent.scrollTop );
		// console.log( "scrollHeight",this._suchDom().menuContent.scrollHeight );
		// console.log( "clientHeight",document.documentElement.clientHeight );
		// for( var i = 0 ; i < this._suchDom().foodCategory.length ; i++ ){
		// 	console.log( "position",this._suchDom().foodCategory[i].getBoundingClientRect().top );
		// }
		//var max = this._suchDom().foodCategory.length - 1;
		//var sTop = this._suchDom().menuContent.scrollTop;
		 
		for( var i = 0 , $category ; $category = this._suchDom().foodCategory[i] ; i++ ){
			if (!$category) {
                break;
            }
            var $categoryNext = this._suchDom().foodCategory[i+1];
            var pTop = $category.getBoundingClientRect().top;

            //var nTop = i < max ? this._suchDom().foodCategory[i+1].getBoundingClientRect().top : this._suchDom().menuContent.scrollHeight;
			//console.log( sTop,pTop );
			if( $categoryNext ){
				if( pTop < 0 && $categoryNext.getBoundingClientRect().top > 0 ){
					//console.log( this.props.data.alldish[i].name );
					DishActions.rightpartScroll( i );
				}
			}else if( pTop == 0 ){
				//console.log( this.props.data.alldish[ this.props.data.alldish.length-1 ].name );
				DishActions.rightpartScroll( i );
			}
			// else{
			// 	console.log( this.props.data.alldish[ this.props.data.alldish.length-1 ].name );
			// }

		}

	},
	getInitialState:function() {
	    return {
	        crtClassName:DishStore.getCrtclass().name
	    };
	},
	render:function(){
		var allDish = this.props.data.alldish;

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
			if( i == allDish.length-1 ){
				styleObj = { height:this._suchDom().clientHeight };		
			}
			allDishArr.push(
				<Container className="singleclassName" style={ styleObj }>
					{dishInClass} 
				</Container>
			);
		}

		return (
			<Container id="rightbox"  style={{ "position": "relative" }} scrollable className="right" onScroll={ this.handleScroll }>
				<div className="floatClassName">
					{ this.state.crtClassName }
				</div>
				{ allDishArr }
			</Container>
		);
	},
	_onChange:function(){
		//获取新的菜类名在浮动菜类上面显示 console.log(  "scrolling");
		//this.state.crtClassName = DishStore.getCrtclass().name;
		//console.log( DishStore.getCrtclass().name );
		this.setState( { crtClassName:DishStore.getCrtclass().name } );
	},
	_suchDom:function(){
		return{ 
			menuContent:document.getElementById( "rightbox" ),
			foodCategory:document.getElementsByClassName( "singleclassName" ),
			clientHeight:document.documentElement.clientHeight
		}
	}
});

module.exports = RightPart;