var React = require("react");

var DishclassCell = React.createClass({
	render:function(){
		var data = this.props.data;

		return(
			<div className="dishGroupName">
					{ data.name }
			</div>
		)
	}
});

module.exports = DishclassCell;