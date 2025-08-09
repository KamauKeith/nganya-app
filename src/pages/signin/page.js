'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import './SignIn.css';


export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === 'test@example.com' && password === 'password') {
            alert('Sign-In Successful!');
            router.push('/');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Sign-In</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input"
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input"
                />
                <button type="submit"className="button" >Sign-In</button>
            </form>
        </div>
    );
}