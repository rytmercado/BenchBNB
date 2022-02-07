import React from 'react';

export default class BenchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: '',
            num_seats: 0,
            lat: 0,
            lng: 0,
        }
    }

    handleInput(type) {
        return e => {
            this.setState({[type]: e.currentTarget.value});
        }
      }

      handleSubmit() {

      }
    
    render() {
        return(
        <div>
            <form>
                <label>Description:
                    <input type="text" value={this.state.description} onChange={this.handleInput('description')} />
                </label>
                <label>Description:
                    <input type="text" value={this.state.num_seats} onChange={this.handleInput('num_seats')} />
                </label>
                <label>Description:
                    <input type="text" value={this.state.lat} onChange={this.handleInput('lat')} />
                </label>
                <label>Description:
                    <input type="text" value={this.state.lng} onChange={this.handleInput('lng')} />
                </label>
                <input type="submit" value={this.state} onClick={this.handleSubmit}/>
                Add Map
            </form>
        </div>
        )
    }
}