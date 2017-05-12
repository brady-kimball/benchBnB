import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return(
        <section>
          <h1>Welcome {this.props.currentUser.username}</h1>
          <button onClick={this.logOut}>Log Out</button>
        </section>
      );
    } else {
      return(
        <section>
          <Link to="/signup/">Sign Up!</Link>
          <Link to="/login/">Log In!</Link>
        </section>
      );
    }
  }
}

export default Greeting;
