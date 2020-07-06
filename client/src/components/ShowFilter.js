import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ShowFilter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userList: [],
        users: "",
        checkedCereals: [false, false, false, false, false, false, false, false, false, false],
        checkedGender: [false, false, false, false, false, false],
      }
    }
    
   //ONE MORE HANDLECHANGE - OK
    handleChange = (e) => {
      // console.log(e.target.checked);
      // console.log(e.target.name-1);
      let arr = [...this.state.checkedCereals];
      arr[e.target.name-1] = e.target.checkedCereals;
      this.setState({
      checkedCereals: arr
      })
    }

    handleChange = (e) => {
      let arr = [...this.state.checkedGender];
      arr[e.target.name-1] = e.target.checkedGender;
      this.setState({
      checkedGender: arr
      })
    }


   clickedCereals = () => {
    let idList = [];
    // console.log(this.state.checkedCereal);
    for(let i = 0; i < this.state.checkedCereals.length; i++) {
      console.log(this.state.checkedCereals[i]);
      if(this.state.checkedCereals[i] === true) {
        idList.push(i+1);
      }}

      let genderList = [];
      // console.log(this.state.checkedGender);
      for(let i = 0; i < this.state.checkedGender.length; i++) {
        console.log(this.state.checkedGender[i]);
        if(this.state.checkedGender[i] === true) {
          genderList.push(i+1);
        }}
        
   fetch(`/${idList}/${genderList}/`)
      .then(res => res.json())
      .then(jsonData => {   
        console.log(jsonData)    
        this.setState({
        userList: jsonData
        });    
        this.props.selectedUsers(this.state.userList);        // selectedUsers - a callback in App.js                                                                                                                                      
        if (!jsonData.ok) {
          throw new Error(`HTTP error! status: ${jsonData.status}`);
        } else {
          return jsonData;
        }
      }) 
      .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
      });
   }


//ONE MORE ARRAY OF CHECKBOXES - OK
    render() {

      return (
          <div>
            <div className="img-container">
              {this.props.cereals.map((cereals, index) => {
                return(
                      <div key={index} > 
                      <input type="checkbox" onClick={(e) => this.handleChange(e)} id={cereals.id} name={cereals.id}/>
                      <img src={cereals.image} alt={cereals.id} />
                      </div>
                    ) 
                  })}
                </div>


              <div className="gender-container">
              {this.props.gender.map((gender, id) => {
                return(
                      <div key={id}>
                      <input type="checkbox" onClick={(e) => this.handleChange(e)} id={gender.id} name={gender.id}/>
                      {/* <img className="genderImage" src={gender.image} alt={gender.id} /> */}
                      <p>{gender.name}</p> 
                      {/* <i className="fa fa-venus">{gender.name}</i>
                      if ({gender.name}=== Male) {
                        <i className="fa fa-mars">{gender.name}</i>
                    } else if ({gender.name}=== Female){
                        <i class="fa fa-venus">{gender.name}</i>
                    } */}
                    </div>
                    ) 
                  })}
              </div>
 
            <div className="submit-cereals-container">
              <button className="submit-cereals" onClick={() => this.clickedCereals()}>Submit</button>
              <br/>
              <br/>
            </div>
            <div className="filteredList">
              <ul>
                <li>Name: {this.props.name}</li>
                <li>Location: {this.props.city}</li>
                <li>Date of Birth: {this.props.dob}</li>
              </ul>
            </div>
            <div className="users_link">
            <Link to="/users" style={{textShadow: '2px 2px 2px #000000', fontSize: '20px', fontWeight: 'bold', color: 'pink', textDecoration: "none"}}>Connect Now</Link>
          </div>
          </div>
      );
    }
    
  }
  
  export default ShowFilter;
  