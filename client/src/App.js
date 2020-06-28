import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
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
      cereal_id: "1" 
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

  addUsers = (data) => {
    fetch('/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: data.name,
        cereal_id: data.cereal_id,
        city: data.city,
        photo: data.photo,
        dob: data.dob,
      })
    }) 
  }


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
          <Link to="/home">Cereal Connection</Link>
          <Switch>
            <Route path="/home">
              <Home newUsers={(data) => this.addUsers(data)} />
            </Route>
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