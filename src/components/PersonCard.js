import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageValue: this.props.age
        }
    }

    increaseAge = () => {
        this.setState({ageValue: this.state.ageValue + 1});
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h2>Age: {this.state.ageValue}</h2>
                <h3>HairColor: {hairColor}</h3>
                <button onClick={ this.increaseAge }>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;