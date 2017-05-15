import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
  }

  render() {
    let benchItems = this.props.benches.map( (bench, idx) => (
        <BenchIndexItem key={idx} bench={bench} />
    ));
    return(
      <ul>
        {benchItems}
      </ul>
    );
  }
}

export default BenchIndex;
