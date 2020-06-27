import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class ShowCereals extends React.Component {
    constructor(props) {
      super(props);
        this.state= {
     
        }
    }
    // componentDidMount() {
    //   this.getCereals();
    // }
  
    // getCereals = () => {
    //   fetch('/users/cereal')
    //     .then(res => res.json())
    //     .then(jsonData => {
    //       console.log(jsonData)
    //       this.setState({
    //         cerealsList: jsonData
    //       });
    //     });
    // };
  
    // getUsers = () => {
    //   fetch('/users')
    //   .then(res => res.json())
    //   .then(jsonData => {
    //     console.log(jsonData)
    //     this.setState({
    //       userList: jsonData
    //     })
    //   })
    // }
   
    handleClick = (e) => {
      const id = e.target.alt;
      this.props.clickedCereals(id);
    }
    // renderPage = () => {
    //   this.props.changeView(this.state.page);
    // }
    render() {
      return (
          <div className="img-container">
            {this.props.cereals.map((cereal, index) => {
              return(
                <img onClick={(e) => this.handleClick(e)} key={index} src={cereal.image} alt={cereal.id} />
              ) 
            })}
            <div>
              <Link to="/users">Users</Link>
            </div>
          </div>
      );
    }
    
  }
  
  export default ShowCereals;
  