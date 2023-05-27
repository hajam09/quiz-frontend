import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <NavigationBar/>
            </div>
        );
    }
}

export default App;
