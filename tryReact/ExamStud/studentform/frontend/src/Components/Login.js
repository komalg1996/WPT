import React from 'react'

function Login() {
    return (
        <div>
            <h2>Login Page</h2>
            <form action>
                <table>
                    <tr>
                        <td><label htmlFor="email">Enter email:</label></td>
                        <td>
                            <input type="email" name="eml" id="email"></input>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="̥pass">Enter Password:</label></td>
                        <td>
                            <input type="password" name="pass" id="pass"></input>
                        </td>
                    </tr>
                </table>
                <input type="submit" value="Submit"></input>
            </form>
        </div>

    )
}
export default Login;
