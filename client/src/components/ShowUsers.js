import React from 'react';
import {Link} from 'react-router-dom';

class ShowUsers extends React.Component {
  constructor(props) {
    super(props);
      this.state= {
        userUrl: "",
        userName:"",
        userCity: "",
        userDob: "",
        isVisable: false
      }
  }

handleClick = (user) => {
  this.setState({
    userUrl: user.photo,
    userName: user.name,
    userCity: user.city,
    userDob: user.dob,
    isVisable: true
  })
}
renderUserImage = () => {
  return this.props.userData.map(users => {
    return users.map((user, index) => {
       return(
         <div>
           <img onClick={() => this.handleClick(user)} key={index} src={user.photo} alt={user.id}/>
         </div>
        );
     })
     })
}
  render() {
    return(
        <div>
          {this.state.isVisable ? <div>
            <img className="big-img-icon" src={this.state.userUrl} alt={this.state.name} />
            <p>{this.state.userName}, {this.state.userDob} {this.state.userCity}</p>  
          </div> : null }
          <div className="user-image-container">
            {this.renderUserImage()}
          </div>
          <div>
            <Link to="/cereals">Meet other Cheerios?</Link>
          </div>
        </div>
    )
  }
}

export default ShowUsers;