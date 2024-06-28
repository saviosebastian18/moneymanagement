import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Reg() {
    const navigate = useNavigate();
    const [result, setResult] = useState({ username: '', email: '', password: '', repassword: '' });
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [error, setError] = useState(false);

    function handleUsername(e) {
        setUsername(e.target.value);
    }
    
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    
    function handleRepassword(e) {
        setRepassword(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        
        if (password === repassword) {
            setResult({ username, email, password, repassword });
            setError(false);

            axios.post('http://localhost:3001/register', {
                username,
                email,
                password
            }).then(() => {
                navigate("/login");
            }).catch(error => {
                console.error('Registration failed:', error);
            });
        } else {
            setError(true);
        }
    }

    return (
        <div className="login" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
            <div className="box" style={{ border: '1px solid', borderRadius: '10px solid black', alignItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column', gap: '10px', padding: '5px', backgroundColor: 'grey', borderWidth: '5px', borderRadius: '5px' }}>
                <h1>Register</h1>
                <div className="box1" style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter your name" value={username} onChange={handleUsername} />
                </div>
                <div className="box1" style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your email" value={email} onChange={handleEmail} />
                </div>
                <div className="box1" style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={handlePassword} />
                </div>
                <div className="box1" style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="repassword">Re-enter Password</label>
                    <input type="password" placeholder="Re-enter your password" value={repassword} onChange={handleRepassword} />
                </div>
                <button style={{ backgroundColor: 'orange' }} onClick={handleSubmit}>Sign Up</button>
            </div>
            <div>
                <p>Username: {result.username}</p>
                <p>Email: {result.email}</p>
                <p>Password: {result.password}</p>
                <p>Re-entered Password: {result.repassword}</p>
                {error && <h1>Invalid: Passwords do not match</h1>}
            </div>
        </div>
    );
}

export default Reg;