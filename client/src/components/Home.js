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
        cereal_id: "1" 
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
        cereal_id: newDob
      })
    }
    addCereals = (e) => {
      const newCereals = e.target.value;
      this.setState({
        dob: newCereals
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      const data = this.state
      this.props.newUsers(data)
    }
    render() {
      return (
          <div>
            <form>
              <p>What is your name?</p>
              <input type="text" onChange={(e)=> this.addName(e)}></input>
              <p>Where do you live?</p>
              <input type="text" onChange={(e)=> this.addCity(e)}></input>
              <p>Please upload your profile photo</p>
              <input type="text" onChange={(e)=> this.addPhoto(e)}></input>
              <p>Your date of birth?</p>
              <input type="text" onChange={(e)=> this.addDob(e)} placeholder="date/month/year"></input>
              <p>which cereals do you like?</p>
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
              <button onClick={(e) => {this.handleSubmit(e)}}>Submit</button>
            </form>
            <Link to="/cereals">Ready?</Link>
          </div>
      );
    }
    
  }
  
  export default Home;
  