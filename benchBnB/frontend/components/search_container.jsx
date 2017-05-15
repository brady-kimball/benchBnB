import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../actions/bench_actions';
import { allBenches } from '../reducers/selectors.js';

const mapStatetoProps = state => ({
  benches: allBenches(state.benches)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});


export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Search);
