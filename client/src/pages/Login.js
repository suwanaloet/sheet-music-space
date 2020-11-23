import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });
    
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='flex-row justify-center mb-4 postCard'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header postTop'>Login</h4>
          <div className='card-body postBottom'>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='***********'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <br></br>
              <button className='btn d-block w-100 commentButton' type='submit'>
                Submit
              </button>
            </form>
            {error && <div>Login failed! Invalid credentials</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
