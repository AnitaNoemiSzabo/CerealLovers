import React from 'react';
import {Link} from 'react-router-dom';

class ShowCereals extends React.Component {
    constructor(props) {
      super(props);
        // this.state= {
        //   isChecked: false,
        //   cerealId: []
        // }
    }
    
   
    handleChange = (e) => {
      const id = e.target.checked;
      const idNumber = e.target.id
      if (id) {
        this.props.clickedCereals(idNumber)
      } 
    }
    // handleSubmit = () => {
    //   const id = this.state.cerealId;
    //   if (this.state.isBoxChecked) {
    //     id.map(each => {
    //       console.log(each)
    //       this.props.clickedCereals(each)
    //     })
    //   }
    // }
    render() {
      return (
          <div className="img-container">
            {this.props.cereals.map((cereal, index) => {
              return(
                  <div key={index}>
                    <input type="checkbox" onClick={(e) => this.handleChange(e)} id={cereal.id} name={cereal.type}/>
                    <img src={cereal.image} alt={cereal.id} />
                  </div>
              ) 
            })}
            <div>
              {/* <button onClick={() => {this.handleSubmit()}}>button</button> */}
              <Link to="/users">Connect...</Link>
            </div>
          </div>
      );
    }
    
  }
  
  export default ShowCereals;
  