import React, { useState } from 'react';
import { connect } from 'react-redux';
import { todoCreator } from '../action';

const Form = ({ todoCreator }) => {

    const [ todo, setTodo ] = useState('');

    const handleOnChange = e => {
        setTodo(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(todo);
        todoCreator({ todo })
        setTodo('');
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <div className='ui input'>
                        <input type='text' placeholder='Add Todo...' value={todo} onChange={e => handleOnChange(e)}/>
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
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        todoCreator: todo => dispatch(todoCreator(todo))
    }
}

export default connect(null, mapDispatchToProps)(Form);