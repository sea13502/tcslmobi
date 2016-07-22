var React = require("react");
//var LazyImage = require('lazyimage');
//console.log( LazyLoad );
var DishCell = React.createClass({

	render:function(){
		var data = this.props.data;
		return(
			<div className="dishCan">
				<div className="dishImgPre">
					 <img   className="dishImg" 
							id={ data.itemId } 
							data-lazy-src={ data.taFileName } 
							style={{ height:86 }} 
					  />
				</div>
				<div>
					{ data.name }
				</div>
				<div>
					<div className="dishbtn" onClick={ this.plusAction }>加</div>
					<div className="dishbtn" onClick={ this.minusAction }>减</div>
				</div>
			</div>
		)
	},

	plusAction:function(){
		console.log( "plus",this.props.data );
	},

	minusAction:function(){
		console.log( "minus",this.props.data );
	}

});

module.exports = DishCell;