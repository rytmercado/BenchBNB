import React, {useState} from 'react';

export default class FilterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            minSeating: this.props.filters.minSeating,
            maxSeating: this.props.filters.maxSeating
        }
    }

    handleChange(type){
        return e => {
            this.setState({[type]: e.currentTarget.value},
                () => {this.props.updateFilter(type, this.state[type])});
        }
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <p>Filter Results:</p>
                <form>
                <label>Minimum Seats:
                    <input type="number" value={this.props.filters.minSeating}
                    onChange={this.handleChange('minSeating')}></input>

                </label>
                <br/>
                <label>Maximum Seats:
                    <input type="number" value={this.props.filters.maxSeating}
                    onChange={this.handleChange('maxSeating')}></input>

                </label>
                </form>
            </div>
        )
    }
}
