import React from 'react';

export default class BenchIndex extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() {
      return(

      <div>
        <ul>
            {this.props.benches.map(bench => {
                return(
                    <div key={bench.id}>
                        <li>{bench.description}</li>
                    </div>
                )
            })}
        </ul>
      </div>
      )
    }
  }