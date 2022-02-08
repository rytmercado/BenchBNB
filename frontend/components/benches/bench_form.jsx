import React from 'react';

export default class BenchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: '',
            num_seats: 0,
            lat: this.props.lat,
            lng: this.props.lng,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return e => {
            this.setState({[type]: e.currentTarget.value});
        }
      }

    handleSubmit() {
    this.props.createBench(this.state);
    this.props.history.push('/');
    }
    
    render() {
        return(
        <div>
            <form>
                <label>Description:
                    <input type="text" value={this.state.description} onChange={this.handleInput('description')} />
                </label>
                <label>Number of Seats:
                    <input type="number" value={this.state.num_seats} onChange={this.handleInput('num_seats')} />
                </label>
                <label>Latitude:
                    <input type="float" value={this.props.lat} disabled/>
                </label>
                <label>Longitude:
                    <input type="float" value={this.props.lng} disabled/>
                </label>
                <input type="submit" value='Add Bench' onClick={this.handleSubmit}/>
            </form>
        </div>
        )
    }
}