import React from 'react';

import ButtonMenu from '../components/icon/ButtonMenu.js';

function Login() {
  return (
    <>
      <div>
        <h2>Login</h2>
      </div>
      <div className='Log d-flex flex-row h-100'>
        <li className="nav-item"><ButtonMenu name="Login" /></li>
          <li><ButtonMenu name="Sign Up" /></li>
      </div>
      <div className='input'>
        <form>
          <label>Email:
            <input type="email" />
          </label>
          <br />
          <label>Password:
            <input type="password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
    
  );
}
  


export default Login;


{/* <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form> */}