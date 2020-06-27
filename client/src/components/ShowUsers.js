import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class ShowUsers extends React.Component {
  constructor(props) {
    super(props);
      this.state= {
      
      }
  }

  render() {
    return(
        <div>
          <div>
            {this.props.userData.map((user, index) => {
              return(
                <img key={index} src={user.photo} alt={user.id}/>
              )
            })}
          </div>
          <div>
            <Link to="/">Home</Link>
          </div>
        </div>
    )
  }
}

export default ShowUsers;