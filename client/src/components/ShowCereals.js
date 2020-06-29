import React from 'react';
import {Link} from 'react-router-dom';

class ShowCereals extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userList: [],
        checked: [false, false, false, false, false, false, false, false, false, false]
      }
    }
    
   
    handleChange = (e) => {
      // console.log(e.target.checked);
      // console.log(e.target.name-1);
      let arr = [...this.state.checked];
      arr[e.target.name-1] = e.target.checked;
      this.setState({
        checked: arr
      })
    }

   clickedCereals = () => {
    let idList = [];
    console.log(this.state.checked);
    for(let i = 0; i < this.state.checked.length; i++) {
      console.log(this.state.checked[i]);
      if(this.state.checked[i] === true) {
        idList.push(i+1);
      }  
    } fetch(`/users/${idList}`)
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
              {this.props.cereals.map((cereal, index) => {
                return(
                    <div key={index}>
                      <input type="checkbox" onClick={(e) => this.handleChange(e)} id={cereal.id} name={cereal.id}/>
                      <img src={cereal.image} alt={cereal.id} />
                    </div>
                ) 
              })}
              
            </div>
            <div className="submit-cereals-container">
              <button className="submit-cereals" onClick={() => this.clickedCereals()}>Submit</button>
            </div>
            <div className="cereal_link">
              <Link to="/users" style={{textShadow: '2px 2px 2px #000000', fontSize: '20px', fontWeight: 'bold', color: 'pink', textDecoration: "none"}}>Connect Now</Link>
            </div>
          </div>
      );
    }
    
  }
  
  export default ShowCereals;
  