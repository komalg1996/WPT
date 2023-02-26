import React, { useEffect, useState } from 'react';
import UserServices from "./AxiosConnection";

const Display = () => {

    let [UserArr, SetUserArr] = useState([]);

    useEffect(() => {
        UserServices.getUser().then((res) => {
            console.log(res.data);
            SetUserArr(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const renderList = () => {
        return (
            UserArr.map((user) => {
                return <tr>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                </tr>
            })
        )
    }


    return (
        <div>
            <h3>Display</h3>
            <table border="2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList()};
                </tbody>
            </table>
        </div>
    )
}

export default Display;