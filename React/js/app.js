const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log(this.state.counter);
  };

  render() {
    return (
      <button className="btn btn-info" onClick={this.clickHandler}>
        `You have clicked ${this.state.counter} times`
      </button>
    );

  }

}

class ShoppingList extends React

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(e(App));
