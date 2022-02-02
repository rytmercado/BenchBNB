import React from 'react';

export default class BenchIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.fetchBenches()
      .then((res) => {this.setState(this.props.bench)})
    }
  
    render() {
      // ...
      return(

      <div>
        <ul>
            {this.props.benches.map(bench => {
                return(
                    <div key={bench.id}>
                        <li>{bench.description}</li>
                        {/* <li>{bench.lat}</li>
                        <li>{bench.lng}</li>
                        <br/> */}
                    </div>
                )
            })}
        </ul>
      </div>
      )
 

    }
  }