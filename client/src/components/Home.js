import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        city: "",
        profile: "",
        dob: "",
        cereal_id: null,
        gender_id: null
      }
    }
    
    addName = (e) => {
      const newName = e.target.value;
      this.setState({
        name: newName
      })
    }

    addCity = (e) => {
      const newCity = e.target.value;
      this.setState({
        city: newCity
      })
    }

    addPhoto =(e) => {
      const newPhoto = e.target.value;
      this.setState({
        profile: newPhoto
      })
    }

    addDob = (e) => {
      const newDob = e.target.value;
      this.setState({
        dob: newDob
      })
    }

    addCereals = (e) => {
      const newCereals = e.target.value;
      console.log(newCereals)
      this.setState({
        cereal_id: newCereals
      })
    }

    //ANITA
    addGender = (e) => {
      const newGender = e.target.value;
      console.log(newGender)
      this.setState({
        gender_id: newGender
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const newUser = this.state;
      this.props.updateUsers({
        name: this.state.name,
        city: this.state.city,
        profile: this.state.profile,
        dob: this.state.dob,
        cereal_id: this.state.cereal_id, 
        gender_id: this.state.gender_id 
      });
    }
    
    //ANITA - SELECT GENDER OPTIONS
    render() {
      return (
          <div className="form-container"> 
            <div className="form">
              <p>What is your name?</p>
              <input type="text" onChange={(e)=> this.addName(e)}></input>
              <p>Where do you live?</p>
              <input type="text" onChange={(e)=> this.addCity(e)}></input>
              <p>Please upload your profile photo</p>
              <input type="text" onChange={(e)=> this.addPhoto(e)}></input>
              <p>Your date of birth?</p>
              <input type="text" onChange={(e)=> this.addDob(e)} placeholder="date/month/year"></input>
              <p>Which cereals do you like?</p>
              <select onChange={(e) => this.addCereals(e)} id="cereals" value={this.state.value}>
                <option value="1">Frosted Flakes</option>
                <option value="2">Fruity Pebbles</option>
                <option value="3">Corn Pops</option>
                <option value="4">Cookie Crisp</option>
                <option value="5">Froot Loops</option>
                <option value="6">Raisin Bran</option>
                <option value="7">Oat Flakes</option>
                <option value="8">Special K</option>
                <option value="9">Cheerios</option>
                <option value="10">Trix</option>
              </select>
              <p>Which gender do you belong to?</p>
              <select onChange={(e) => this.addGender(e)} id="gender" value={this.state.value}>
                <option value="2">Female</option>
                <option value="3">Male</option>
                <option value="4">Bisexual</option>
                <option value="5">Transgender</option>
                <option value="6">Genderqueer</option>
                <option value="7">Lesbian</option>
                <option value="8">Gay</option>
               </select>
              <button className="submit" onClick={(e) => {this.handleSubmit(e)}}>Submit</button>
              <div className="linkTag">
                <Link to="/cereals" style={{fontSize: '20px', color: 'pink', textDecoration: "none", fontWeight: 'bold'}}>Ready?</Link>
              </div>
            </div>
          </div>
      );
    }
    
  }
  
  export default Home;
  