import React from 'react';

const Welcome = (props) => {
    const {name} = props;
    //const name = props.name;

    console.log(props);

    return (
        <h1>Bienvenue {name}</h1>
    );
}


// Equivalent du composant en version "class"
class WelcomeClass extends React.Component {  

    render() {
        const {name} = this.props;

        return (
            <h1>Bienvenue {name}</h1>
        );
    }
}


export default Welcome;