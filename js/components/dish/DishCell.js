var React = require("react");

var DishCell = React.createClass({
	render:function(){
		var data = this.props.data;

		return(
			<div>
				{ data.name }
			</div>
		)
	}
});

module.exports = DishCell;