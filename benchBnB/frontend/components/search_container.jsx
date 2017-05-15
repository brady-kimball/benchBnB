import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../actions/bench_actions';
import { allBenches } from '../reducers/selectors.js';
import { updateFilterThunk } from '../actions/filter_actions';

const mapStatetoProps = state => ({
  benches: allBenches(state.benches),
  minSeating: state.filters.minSeating,
  maxSeating: state.filters.maxSeating
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches()),
  updateFilterThunk: (filter, value) => dispatch(updateFilterThunk(filter, value))
});


export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Search);
