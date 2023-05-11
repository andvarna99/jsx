// 1) import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) get reference to div with ID root
const el = document.getElementById('root');

// 3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

//4) create a component
function App(){
    return <input style={{border: '3px solid red'}} type="number" min={5} />;
}

//5) show the component on the screen
root.render(<App/>);