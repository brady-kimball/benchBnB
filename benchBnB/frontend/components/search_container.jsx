import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../actions/bench_actions';
import { allBenches } from '../reducers/selectors.js';
import { updateBoundsThunk } from '../actions/filter_actions';

const mapStatetoProps = state => ({
  benches: allBenches(state.benches)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches()),
  updateBoundsThunk: (bounds) => dispatch(updateBoundsThunk(bounds))
});


export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Search);
