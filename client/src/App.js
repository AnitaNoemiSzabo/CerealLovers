import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import ShowUsers from './components/ShowUsers';
import ShowCereals from './components/ShowCereals'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "cereals",
      cerealsList: [],
      userList: [],
      isUsersShowing: false
    
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
  getUsers = () => {
    fetch('/users')
    .then(res => res.json())
    .then(jsonData => {
      console.log(jsonData)
      this.setState({
        userList: jsonData
      })
    })
  }
 
 clickedCereals = (id) => {
   fetch(`users/cereal/${id}`)
    .then(res => res.json())
    .then(jsonData => {
      console.log(jsonData);
      this.setState({
        userList: jsonData
      })
    })
  }

  // getPage = () => {
  //   const { page } = this.state;
  //   switch(page) {
  //     case "cereals":
  //       return <ShowCereals changeView={this.handleChangeRoute} cereals={this.state.cerealsList} clickedCereals={id => this.clickedCereals(id)}/>
  //     case "users":
  //       return <ShowUsers changeView={this.handleChangeRoute} userData={this.state.userList}/>
  //     default:
  //       return <App/>;
  //   }
  // }

  render() {
    return (
      <div className="main">
        <Router>
          <Link to="/cereals">Meet Other Cheerios?</Link>
          <Switch>
            <Route path="/cereals">
              <ShowCereals cereals={this.state.cerealsList} clickedCereals={id => this.clickedCereals(id)}/>
            </Route>
            <Route path="/users">
              <ShowUsers userData={this.state.userList}/>
            </Route>
          </Switch>
        </Router>
        <div>
          {/* {this.state.adminView ?
          <ShowCereals cereals={this.state.cerealsList} clickedCereals={id => this.clickedCereals(id)}/> :
          <ShowUsers userData={this.state.userList}/>
          } */}
        </div>
      </div>
    );
  }
}
export default App;