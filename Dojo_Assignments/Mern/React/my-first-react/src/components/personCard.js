import React/* , { Component } */ from 'react'

// class PersonCard extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             age: this.props.age
//         }
//     }
//     addOne = () => {
//         this.setState({ age: this.state.age +1})
//     }
//     render() {
//         const {firstName, lastName, age, hairColor} = this.props;
//         return (
//             <>
//                 <h1>{lastName}, {firstName}</h1>
//                 <p>Age: {this.state.age}</p>
//                 <p>Hair Color: {hairColor}</p>
//                 <button className="btn btn-primary" onClick={ this.addOne }>Birthday Button!</button>
//             </>
//         )
//     }
// }

const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}

export default PersonCard

