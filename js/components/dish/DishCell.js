var React = require("react");
//var LazyImage = require('lazyimage');
//console.log( LazyLoad );
var DishCell = React.createClass({
	render:function(){
		var data = this.props.data;

		return(
			<div>
				
				<img className="dishImg" id={ data.itemId } data-lazy-src={ data.taFileName } style={{ height:86 }} />

				{ data.name }
			</div>
		)
	}
});

module.exports = DishCell;