import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'
import './App.css';
import ShowUsers from './components/ShowUsers';
import ShowCereals from './components/ShowCereals';
import Home from './components/Home';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cerealsList: [],
      userList: [],
      name: "",
      city: "",
      profile: "",
      dob: "",
      cereal_id: "" 
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
  updateUsers = (newUser) => {
    this.setState({
      name: newUser.name,
      city: newUser.city,
      profile: newUser.profile,
      dob: newUser.dob,
      cereal_id: newUser.cereal_id
    })
  }
  addUsers = () => {
    fetch('/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          cereal_id: this.state.cereal_id,
          city: this.state.city,
          photo: this.state.profile,
          dob: this.state.dob
        }) 
      })                                                                                                                                                                                                       
    .then(response => {   
        // console.log(response)                                                                                                                                                            
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        return response;
      }
    })
    .catch(e => {
      console.log('There has been a problem with your fetch operation: ' + e.message);
    });
}
selectedUsers = (newList) => {
  this.setState({
    userList: [newList]
  })
}


  render() {
    return (
      <div className="main">
        <Router>
          <div className="linkTag">
            {this.addUsers()}
            <Link to="/home" className="nav_home" style={{ textShadow: '2px 2px 2px #000000', padding: '10px', fontSize: '24px', fontWeight: 'bold', color: 'pink', textDecoration: "none"}}>Cereal Connection</Link>
          </div>
          <Switch>
            <Route path="/home">
              <Home updateUsers={(newUser) => this.updateUsers(newUser)} />
            </Route>
            <Route path="/cereals">
              <ShowCereals cereals={this.state.cerealsList} selectedUsers={(newList) => this.selectedUsers(newList)}/>
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