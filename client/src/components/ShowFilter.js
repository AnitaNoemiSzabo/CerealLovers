import React from 'react';
import {Link} from 'react-router-dom';
// eslint-disable-next-line 
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
    
    handleChange = (e) => {
   
      let arr = [...this.state.checkedCereals];
      arr[e.target.name-1] = e.target.checked;  
      this.setState({    
      checkedCereals: arr
      })
    }

    handleClick = (e) => {
      console.log(e.target.checked);
      console.log(e.target.checkedGender);
      let arr = [...this.state.checkedGender];   
      arr[e.target.name-2] = e.target.checked;   
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
        
  console.log (`/${idList}/${genderList}`);  

  fetch(`/users/filter/${idList}/${genderList}/`)
      .then(res => res.json())
      .then(jsonData => {   
        console.log(jsonData)    
      
        this.setState({
        userList: jsonData
        });    
        this.props.selectedUsers(this.state.userList);                                                                                                                                           
      }) 
      .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
      });
   }


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
                      <input type="checkbox" onClick={(e) => this.handleClick(e)} id={gender.id} name={gender.id}/>
                      <p>{gender.name}</p> 
                    </div>
                    ) 
                  })}
              </div>
 
            <div className="submit-cereals-container">
              <button className="submit-cereals" onClick={() => this.clickedCereals()}>Submit</button>
              <br/>
              <br/>
            </div>
            <div className="users_link">
            <Link to="/users" style={{textShadow: '2px 2px 2px #000000', fontSize: '20px', fontWeight: 'bold', color: 'pink', textDecoration: "none"}}>Connect Now</Link>
          </div>
          </div>
      );
    }
  }
  
  export default ShowFilter;
  