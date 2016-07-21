var React = require("react");

var TcCell = React.createClass({
	render:function(){
		var data = this.props.data;
		return(
			<div className="dishCan">
				<div className="dishImgPre">
					<img className="dishImg" 
						 id={ data.itemId } 
						 data-lazy-src={ data.taFileName } 
						 style={{ height:86 }} 
					/>
				</div>
				{ data.name }
			</div>
		)
	}
});

module.exports = TcCell;