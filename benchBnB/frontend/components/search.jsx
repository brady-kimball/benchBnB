import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form';

export default ({ benches, fetchBenches, updateFilterThunk,
  minSeating, maxSeating }) => (
  <div>
    <BenchMap benches={benches}
              updateFilterThunk={updateFilterThunk}/>
    <FilterForm minSeating={minSeating}
                maxSeating={maxSeating}
                updateFilterThunk={updateFilterThunk}/>
    <BenchIndex benches={benches}
                fetchBenches={fetchBenches}/>
  </div>
);
