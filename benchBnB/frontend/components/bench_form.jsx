import React from 'react';
import { Redirect } from 'react-router-dom';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      numSeats: 0,
      redirect: false
    };
  }

  update(property) {
    return (e) => {
      e.preventDefault();
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let bench = {
      bench: {
        description: this.state.description,
        seating: this.state.numSeats,
        lat: this.props.lat,
        lng: this.props.lng
      }
    };
    this.props.createBench(bench);
    this.setState({redirect: true});
  }

  render() {
    let redirectComp;
    if (this.state.redirect) {
      redirectComp = <Redirect to="/" />;
    }
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input  type="text"
                value={this.state.description}
                onChange={this.update("description")}/>
        <input  type="number"
                value={this.state.numSeats}
                onChange={this.update("numSeats")}/>
        <input  type="number"
                step="any"
                value={this.props.lat}
                disabled/>
        <input  type="number"
                step="any"
                value={this.props.lng}
                disabled/>
        <button>Add bench!</button>
        {redirectComp}
      </form>
    );
  }
}

export default BenchForm;
