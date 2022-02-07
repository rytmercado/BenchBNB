import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({fetchBenches, benches, updateFilter}) =>  (
    <div>
        <BenchMap benches={benches} updateFilter={updateFilter}/>
        <BenchIndex fetchBenches={fetchBenches} benches={benches}/>
    </div>
)

export default Search;