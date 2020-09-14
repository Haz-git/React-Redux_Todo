import React, { useState } from 'react';
import { connect } from 'react-redux';
import { todoCreator } from '../action';

const Form = () => {

    const [ todo, setTodo ] = useState('');

    const handleOnChange = e => {
        setTodo(e.target.value);
    }

    const handleSubmit = e => {
        console.log(todo);
        setTodo('');
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div>
                    <div className='ui input'>
                        <input type='text' placeholder='Add Todo...' value={todo} onChange={handleOnChange}/>
                    </div>
                </div>
                <div>
                    <button type='submit' className='ui primary button'>
                        Submit
                    </button>
                    <button type='reset' className='ui button'>
                        Reset
                    </button>
                </div>
            </Form>
        </>
    )
}

// const mapDispatchToProps = state => {
//     return
// }

// export default connect(mapDispatchToProps)(Form);

export default Form;