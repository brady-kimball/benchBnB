import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minSeating: this.props.minSeating,
      maxSeating: this.props.maxSeating
    };
  }

  update(property) {
    return (e) => {
      e.preventDefault();
      this.props.updateFilterThunk(property, e.target.value);
      this.setState({[property]: e.target.value});
    };
  }

  render() {
    console.log(this.state.minSeating);
    return(
      <section>
        <input  type="text"
                name="minSeating"
                value={this.state.minSeating}
                onChange={this.update("minSeating")}/>
        <input  type="text"
                name="maxSeating"
                value={this.state.maxSeating}
                onChange={this.update("maxSeating")}/>
      </section>
    )
  }
}

export default FilterForm;
