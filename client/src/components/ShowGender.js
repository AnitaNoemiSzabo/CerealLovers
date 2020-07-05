//ANITA

import React from 'react';
import {Link} from 'react-router-dom';


class ShowGender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        userList: [],
        checked: [false, false, false, false, false, false] 
        }
}
    




handleChange = (e) => {
    let arr = [...this.state.checked];
    this.setState({
        checked: arr
    })
}


clickedGender = () => {
    let genderList = [];
    for (let i = 0;i<this.state.checked.length; i++)
    if(this.state.checked[i] === true) {
        genderList.push(i+1);
      }  
    fetch(`/users/${genderList}`)
      .then(res => res.json())
      .then(jsonData => {   
        console.log(jsonData)    
        this.setState({
          userList: jsonData
        });    
        this.props.selectedUsers(this.state.userList);                                                                                                                                                    
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



   render() {
    return (
        <div>
          <div className="img-container">
            {this.props.gender.map((gender, index) => {
              return(
                <div key={index}>
                    <input type="checkbox" onClick={(e) => this.handleChange(e)} id={gender.id} name={gender.id}/>
                    <img class="genderImage" src={gender.image} alt={gender.id} />

                    if ({gender.name}=== Male) {
                        <i class="fa fa-mars">{gender.name}</i>
                    } else if ({gender.name}=== Female){
                        <i class="fa fa-venus">{gender.name}</i>
                    }
                    
            {/* <p>{gender.name}</p> */}     

            {/* <i class="fa fa-venus">Female</i> */}
                 </div>
              ) 
            })}

        
          </div>
          <div className="submit-gender-container">
            <button className="submit-gender" onClick={() => this.clickedGender()}>Submit</button>
          </div>
          <div className="users_link">
            <Link to="/users" style={{textShadow: '2px 2px 2px #000000', fontSize: '20px', fontWeight: 'bold', color: 'pink', textDecoration: "none"}}>Connect Now</Link>
          </div>
        </div>
    );
  }
  
}
export default ShowGender;