import React from 'react';
import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import BenchIndex from './bench_index';
import { allBenches } from '../reducers/selectors.js'

const mapStatetoProps = state => ({
  benches: allBenches(state.benches)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});


export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(BenchIndex);
