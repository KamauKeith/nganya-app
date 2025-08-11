import React from "react";
import AuthForm from "@/components/Authform";

export default function Login() {
    const handleLogin = (e) => {
        e.preventDefault();
        alert('Login submitted!');
    };

    return (
        <AuthForm 
            title="Login"
            fields={[
                { name: 'email', type: 'email', placeholder: 'Email' },
                { name: 'password', type: 'password', placeholder: 'Password' },
            ]}
            buttonText="Login"
            onSubmit={handleLogin}
        />
    );
}