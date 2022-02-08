import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({fetchBenches, benches, updateFilter}) =>  (
    <div className='search-container'>
        <div className='search-rows'>
            <BenchMap benches={benches} updateFilter={updateFilter}/>
            <BenchIndex fetchBenches={fetchBenches} benches={benches}/>
        </div>
    </div>
)

export default Search;