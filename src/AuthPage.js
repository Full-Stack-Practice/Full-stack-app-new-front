import React, { useState } from 'react';
import { signUpUser, signInUser } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function AuthPage() {
  const { push } = useHistory();

const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');  
  const [signInEmail, setSignInEmail] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  function clearForms() {
    setSignInEmail('');
    setSignInPassword('');
    setSignUpEmail('');
    setSignUpPassword('');
  }

  
  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUpUser(signUpUsername, signUpEmail, signUpPassword);
    setCurrentUser(user);
    push('/albums');
    clearForms();
  }

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signInUser(signInEmail, signInPassword);
    setCurrentUser(user);
    push('/albums');
    clearForms();
  }

    return (
        <div className="home-page">
          <div className='login-form'>
            <form className="form-input" onSubmit={handleSignUp}>
              <h2>Sign Up</h2>
              <label>
                <p>Username</p>
                <input value={signUpUsername} onChange={e => setSignUpUsername(e.target.value)} />
              </label>
              <label>
                <p>Email</p>
                <input value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)} />
              </label>
              <label>
                <p>Password</p>
                <input value={signUpPassword} type='password' onChange={e => setSignUpPassword(e.target.value)} />
              </label>
              <button>Sign Up</button>
            </form>
          </div>
          <div className='login-form'>
            <form className="form-input" onSubmit={handleSignIn}>
              <h2>Sign In</h2>
              <label>
                <p>Email</p>
                <input value={signInEmail} onChange={e => setSignInEmail(e.target.value)} />
              </label>
              <label>
                <p>Password</p>
                <input value={signInPassword} type='password' onChange={e => setSignInPassword(e.target.value)} />
              </label>
              <button>Sign In</button>
            </form>
    
          </div>
        </div>
      );
}