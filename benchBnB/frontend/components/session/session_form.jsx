import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(property) {
    return (
      (e) => {
        e.preventDefault();
        this.setState({[property]: e.target.value});
      }
    );
  }

  render(){
    let otherPath;
    let linkTitle;
    let header;
    if(this.props.formType === 'signup/') {
      otherPath = '/login/';
      linkTitle = 'Log In';
      header = "Sign Up";
    } else {
      linkTitle = 'Sign Up';
      otherPath = '/signup/';
      header = "Log In";
    }

    let errors = this.props.errors;
    if (errors) {
      errors = errors.map( (error, idx) => (
        <li key={idx}>{error}</li>
      ));
    }

    if (this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <section>
        <header>{header}</header>
        <Link to={otherPath}>{linkTitle}</Link>
        <ul>{errors}</ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input  type="text"
                  value={this.state.username}
                  name="username"
                  onChange={this.update("username")} />
          <input  type="text"
                  value={this.state.password}
                  name="password"
                  onChange={this.update("password")} />
          <button>{header}</button>
        </form>
      </section>
    );
  }
}


export default withRouter(SessionForm);
