import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().required().min(2)
})
const Form = props =>{

    const [users, setUsers] = useState({
        name: '',
        email: '',
        password: '',
        terms: false
    });
    const handleChanges = event => {
        console.log(event.target.value);
        setUsers({...users, [event.target.name]: event.target.value });
    };
    const handleSubmit = event => {
        event.preventDefault();
        console.log(users);
        
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewUser(users);
        setUsers({ name: '', email: '', password: '' });
    }

  
 return (
    <form onSubmit={submitForm} style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin:'20px'}}>
        
        <label htmlFor="name" style={{margin:'20px'}}/>
        <input
            
            id="name"
            type="text"
            placeholder="Enter Full Name"
            onChange={handleChanges}
            value={users.name}
            name="name"
        />
       
        <label htmlFor="email" style={{margin:'20px'}}/>
        <input
            id="email"
            type="text"
            placeholder="Enter Email Address"
            onChange={handleChanges}
            value={users.email}
            name="email"
        />

        <label htmlFor="password" style={{margin:'20px'}}/>
        <input
            id="password"
            type="text"
            placeholder="Enter password"
            onChange={handleChanges}
            value={users.password}
            name="password"
        />

        <label htmlFor='terms' className='terms' style={{margin:'20px'}}>
            <input
            type='checkbox'
            name='terms'
            value={users.terms}
            />
            Terms & Conditions
        </label>

        <button type="submit" onClick={handleSubmit}>Submit Form</button>
    </form>

    );
}

export default Form;