import React, { useContext } from 'react'
import { AuthContext } from '../../../auth/AuthContext'

import { types } from "../../../types/types" 

export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(AuthContext)
    const handleOnclik = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch({ 
            type: types.login,
            payload: {
                name: 'Jgla',
                logged: true
            }
        });
        
        history.replace(lastPath);
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
