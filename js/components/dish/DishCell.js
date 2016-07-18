var React = require("react");

var DishCell = React.createClass({
	render:function(){
		var data = this.props.data;

		return(
			<div>
				<div>
					<img src={ data.taFileName } alt={ data.name } style={{ height:"86px" }}/>
				</div>
				{ data.name }
			</div>
		)
	}
});

module.exports = DishCell;