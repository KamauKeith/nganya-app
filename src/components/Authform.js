import React from 'react';
import './Authform.css';

export default function AuthForm({ title, fields, buttonText, onSubmit }) {
    return (
        <div className="auth-container">
            <form className='auth-form' onSubmit={onSubmit}>
                <h2>{title}</h2>
                {fields.map((field, index) => (
                    <input
                        key={index}
                        type={field.type}
                        placeholder={field.placeholder}
                        name={field.name}
                        required
                    />
                ))}
                <button type="submit">{buttonText}</button>
            </form>
        </div>
    );
}
