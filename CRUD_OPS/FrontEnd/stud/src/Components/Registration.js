import React from 'react'
import { useState } from 'react'
import UserServices from './AxiosConnection';

function StudentRegistration() {
    let [userObj, SetUserObj] = useState({ firstname: "", lastname: "", email: "", password: "", id: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        SetUserObj({ ...userObj, [name]: value });
    }
    const adduserData = () => {
        UserServices.addUser(userObj).then((result) => {
            console.log(result.data);
        })

    }
    return (
        <div>
            <h1>Registration Page</h1>
            <form action="/" method="post">
                <div>
                    <label htmlFor='fname'>First Name:</label>
                    <input type='text' name='fname' id='fname'></input>
                </div>
                <div>
                    <label htmlFor='lname'>Last Name:</label>
                    <input type='text' name='lname' id='lname'></input>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' name='email' id='email'></input>
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' name='password' id='password'></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default StudentRegistration;