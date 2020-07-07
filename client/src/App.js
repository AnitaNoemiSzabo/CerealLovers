import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'  //took out NavLink
import './App.css';
import ShowUsers from './components/ShowUsers';
import ShowFilter from './components/ShowFilter';
import Home from './components/Home';
// eslint-disable-next-line 
import { library } from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line 
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

  //SHOWING CHECKBOXES
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

//ANITA
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

  //utolso pillanatban kiveve, mert bekavart valahol mashol. Megnezni, hogy visszarakhato
  addUsers = () => {
    // fetch('/users', {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       name: this.state.name,
    //       cereal_id: this.state.cereal_id,
    //       city: this.state.city,
    //       photo: this.state.profile,
    //       dob: this.state.dob,
    //       gender_id: this.state.gender_id
    //     }) 
    //   })            

    // .then(response => {                                                                                                                  
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   } else {
    //     return response;
    //   }
    // })

    // .catch(e => {
    //   console.log('There has been a problem with your fetch operation: ' + e.message);
    // });
}


//I change the state of the list
selectedUsers = (newList) => {
  this.setState({
    userList: [newList]
  })
}



//<ShowUsers userData={this.state.userList}/>  : when I update the user on line, the result will be passed automaticaly to showUser to render in showuser.js

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
            {/* <Route path="/gender">
              <ShowGender gender={this.state.genderList} selectedUsers={(newList) => this.selectedUsers(newList)}/>
            </Route> */}
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