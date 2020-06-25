import React from 'react';
import './App.css';

const AdminPage = ({ changeView }) => {
  return(
    <>
      <h1>I'm Admin</h1>
      <button onClick={() => changeView('user')}>Login</button>
    </>
  )
}
const UserPage = ({ changeView }) => {
  return(
    <>
      <h1>I'm a stranger</h1>
      <button onClick={() => changeView('public')}>LogOut</button>
    </>
  )
}
const AboutPage = ({ changeView }) => {
  return(
    <>
      <h1>I'm the about page</h1>
      <button onClick={() => changeView('about')}>Login</button>
    </>
  )
}
class App extends React.Component {
  constructor(props) {
    super(props);
      this.state= {
      page: 'public'
      }
  }
  handleGoAbout = (event) => {
    event.preventDefault();
   
  }

  getPage = () => {
    const {page} = this.state

    switch(page) {

    }
  }
  handleChangeRoute = (page) => {
    this.setState({
      page: page
    })
  }
  render() {
    const { admin } = this.state;
    return (
      <div className="App">
        <a onClick={(page) => this.handleGoAbout(page)}>Go to about page</a>
        {admin ? <AdminPage changeView={(changeView) => this.handleChangeRoute(changeView)} /> : <UserPage changeView={(changeView) => this.handleChangeRoute(changeView)} />}
      </div>
    );
  }
  
}

export default App;
