import React from 'react'

export const LoginScreen = ({ history }) => {
    const handleOnclik = () => {
        history.replace('/');
    }
    return (
        <div className="container mt-4">
            <h1>Login</h1>
            
            <button className="btn btn-primary" onClick={handleOnclik}>
                Login
            </button>
        </div>
    )
}
