import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './components/pages/MainPage';

class App extends React.Component{
    render(){
        return(
            <div>
                Hello World
                <MainPage/>
                </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
