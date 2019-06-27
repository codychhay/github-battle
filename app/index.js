import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// App Component--
//  - State
//  - LifeCycle
//  - UI
class App extends React.Component {
    // UI of APP Component
    render() {
        return (
            <div>
                Hello World!
            </div>
        );
    }
}

// Use ReactDOM to render app component to the DOM
ReactDOM.render(<App /> , document.getElementById('app'));
