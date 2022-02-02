import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({fetchBenches, benches}) =>  (
    <div>
        <BenchMap />
        <BenchIndex fetchBenches={fetchBenches} benches={benches}/>
    </div>
)

export default Search;