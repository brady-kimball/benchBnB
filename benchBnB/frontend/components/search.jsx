import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

export default ({ benches, fetchBenches, updateFilterThunk }) => (
  <div>
    <BenchMap benches={benches}
              updateFilterThunk={updateFilterThunk}/>
    <BenchIndex benches={benches}
                fetchBenches={fetchBenches}/>
  </div>
);
