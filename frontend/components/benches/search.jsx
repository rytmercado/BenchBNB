import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form'

const Search = ({fetchBenches, benches, updateFilter, filters}) =>  (
    <div className='search-container'>
        <div className='search-rows'>
            <BenchMap benches={benches} updateFilter={updateFilter}/>
            <div>
                <FilterForm updateFilter={updateFilter} filters={filters}/>
                <BenchIndex fetchBenches={fetchBenches} benches={benches}/>
            </div>
        </div>
    </div>
)

export default Search;