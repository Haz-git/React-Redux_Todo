import React from 'react';
import Form from './Form';
import List from './List';

const App = () => {
    return (
        <div>
            <h1>Simple Redux Todo list</h1>
            <div>
                <Form />
            </div>
            <div>
                <List />
            </div>
        </div>
    )
}

export default App;