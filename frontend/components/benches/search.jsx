import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({fetchBenches, benches, updateBounds}) =>  (
    <div>
        <BenchMap benches={benches} updateBounds={updateBounds}/>
        <BenchIndex fetchBenches={fetchBenches} benches={benches}/>
    </div>
)

export default Search;