'use client';

import React from 'react';
import AuthForm from '../../components/Authform';

export default function SignUp() {
  const handleSignUp = (e) => {
    e.preventDefault();
    alert('Sign up submitted!');
  };

  return (
    <AuthForm
      title="Sign Up"
      fields={[
        { name: 'username', type: 'text', placeholder: 'Username' },
        { name: 'email', type: 'email', placeholder: 'Email' },
        { name: 'password', type: 'password', placeholder: 'Password' },
      ]}
      buttonText="Sign Up"
      onSubmit={handleSignUp}
    />
  );
}
