import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import ShowUsers from './components/ShowUsers';
import ShowCereals from './components/ShowCereals'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cerealsList: [],
      userList: []
    }
  }
  componentDidMount() {
    this.getCereals();
  }

  getCereals = () => {
    fetch('/users/cereal')
      .then(res => res.json())
      .then(jsonData => {
        console.log(jsonData)
        this.setState({
          cerealsList: jsonData
        });
      });
  };
  // getUsers = () => {
  //   fetch('/users')
  //   .then(res => res.json())
  //   .then(jsonData => {
  //     console.log(jsonData)
  //     this.setState({
  //       userList: jsonData
  //     })
  //   })
  // }
 
 clickedCereals = (id) => {
   fetch(`users/cereal/${id}`)
    .then(res => res.json())
    .then(jsonData => {
      this.setState({
        userList: [...this.state.userList, jsonData]
      })
    })
  }

  render() {
    return (
      <div className="main">
        <Router>
          <Link to="/cereals">Cereal Connection</Link>
          <Switch>
            {/* <Route exact path="/" >
              <App />
            </Route> */}
            <Route path="/cereals">
              <ShowCereals cereals={this.state.cerealsList} clickedCereals={id => this.clickedCereals(id)}/>
            </Route>
            <Route path="/users">
              <ShowUsers userData={this.state.userList}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;