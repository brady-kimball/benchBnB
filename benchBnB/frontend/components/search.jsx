import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

export default ({ benches, fetchBenches, updateBoundsThunk }) => (
  <div>
    <BenchMap benches={benches}
              updateBoundsThunk={updateBoundsThunk}/>
    <BenchIndex benches={benches}
                fetchBenches={fetchBenches}/>
  </div>
);
