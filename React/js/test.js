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

  const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(e(App));



const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return(
      <ShoppingList/>
    )
  }


}

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          label: 'Buy a dog',
          isDone: false
        },
        {
          label: 'Buy a cat',
          isDone: false
        },
        {
          label: 'Buy a catfish',
          isDone: false
        }
      ]
    }
  }

  onChangeHandler = (index) => {
    console.log(index);
  }

  renderList = () => {
    const list = this.state.list.map(el, index => {
      return (
        <label className="form-check-label">
            <input onChange = {this.onChangeHandler} className="form-check-input" type="checkbox" value="" checked = {el.isDone}/>
               {el.label}
        </label>
      
      )
    });

    return list;
  }

  render() {
    return(
      <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
      {this.renderList()}
      <div>
        <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" checked = {el.isDone} />
        <label className="btn btn-outline-primary" for="btncheck1">{el.label}</label>
      </div>
      
  </div>
    )
  }
  
}



const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(e(App));
