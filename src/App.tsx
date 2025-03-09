import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
    return (
        <div className="App">
            This is APP component
            <Rating/>
            <Accordion/>
        </div>
    );
}


function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}


function Accordion () {
    return (
        <div>
            <h3>Меню</h3>
            <ul>1</ul>
            <ul>2</ul>
            <ul>3</ul>
        </div>
    )
}

function Star () {
    return (
        <div>star</div>
    )
}

export default App;
