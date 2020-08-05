import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'  //took out NavLink
import './App.css';
import ShowUsers from './components/ShowUsers';
import ShowFilter from './components/ShowFilter';
import Home from './components/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';


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
      cereal_id: "", 
      gender_id: null,
      genderList: []
    }
  }

  componentDidMount() {
    this.getCereals();
    this.getGender();
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


  getGender = () => {
    fetch('/users/gender')
      .then(res => res.json())
      .then(jsonData => {
        console.log(jsonData)
        this.setState({
          genderList: jsonData
        });
      });
  };


  updateUsers = (newUser) => {
    this.setState({
      name: newUser.name,
      city: newUser.city,
      profile: newUser.profile,
      dob: newUser.dob,
      cereal_id: newUser.cereal_id,
      gender_id: newUser.gender_id
    })
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
              <ShowFilter cereals={this.state.cerealsList} gender={this.state.genderList} selectedUsers={(newList) => this.selectedUsers(newList)}/>
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