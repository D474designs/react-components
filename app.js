var GroceryList = (props) => (
  <ul>
    {props.items.map((item, i) =>
      <GroceryListItem key={i} item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		hover: false
  	};
  }

  onListItemHover() {
  	this.setState({
  		hover: !this.state.hover
  	});
  }

  render() {
    var style = {
    	fontWeight: this.state.hover ? 'bold' : 'normal'
    };

  	return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
  	);
  }
}

ReactDOM.render(<GroceryList items={['peanut butter', 'kit-kats', 'ice cream', 'waffles', 'wine', 'black & milds']}/>, document.getElementById('app'));

// var App = () => (
//
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );
//
// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//
//     // `state` is just an object literal
//     this.state = {
//       done: false
//     };
//   }
//
//   // When a list item is clicked, we will toggle the `done`
//   // boolean, and our component's `render` method will run again
//   onListItemClick() {
//     this.setState({
//       done: !this.state.done
//     });
//   }
//
//   render() {
//     // Making the style conditional on our `state` lets us
//     // update it based on user interactions.
//     var style = {
//       textDecoration: this.state.done ? 'line-through' : 'none'
//     };
//
//     // You can pass inline styles using React's `style` attribute to any component
//     // snake-cased css properties become camelCased this this object
//     return (
//       <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//     );
//   }
// }
//
// ReactDOM.render(<App />, document.getElementById("app"));
