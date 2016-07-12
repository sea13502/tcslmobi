var React = require( "react" );
var Link = require( "react-router" ).Link;

var Container = require( "amazeui-touch" ).Container;
var List = require( "amazeui-touch" ).List;
var NavBar = require( "amazeui-touch" ).NavBar;
var Group = require( "amazeui-touch" ).Group;
var View = require( "amazeui-touch" ).View;

var pages = [
	"diancai","lianxi"
];

var HomeComponent = React.createClass({
	getDefaultProps() {
	    return {
	      transition: 'rfr'
	    };
	},

	render:function(){
		var items = pages.map(function( item,i ){
			return(
				<List.Item
		          linkComponent={Link}
		          linkProps={{to: '/' + item.toLowerCase() }}
		          title={item}
		          key={i}
		        />
			)
		});

		return (
			<View id="app-index">
		        <NavBar
		          amStyle="primary"
		          title="Amaze UI Touch"
		        />
		        <Container scrollable>
		          <Group
		            header="Amaze UI Touch Components"
		            noPadded
		          >
		            <List>
		              {items}
		            </List>
		          </Group>
		        </Container>
		    </View>
		)
	}
});

module.exports = HomeComponent;