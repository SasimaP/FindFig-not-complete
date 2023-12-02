import React from 'react';


function Login() {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto'}}>
      <form>
          <div class="btn-group d-flex flex-row my-5" role="group">
            <input type="radio" class="btn-check" name="btnradio" id="Signup" autocomplete="off" checked/>
            <label class="btn btn-light" for="Signup" 
              style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', 
                    borderTopLeftRadius: '2rem',
                    borderTopRightRadius: '0',
                    borderBottomRightRadius: '0',
                    borderBottomLeftRadius: '2rem', }}
              >Sign-up
            </label>

            <input type="radio" class="btn-check" name="btnradio" id="Login" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="Login"
              style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', 
              borderTopLeftRadius: '0',
              borderTopRightRadius: '2rem',
              borderBottomRightRadius: '2rem',
              borderBottomLeftRadius: '0', 
              backgroundColor: '#60ABFB', color: 'white', border: '#60ABFB' }}
              >Login</label>
          </div>

        <div style={{ marginBottom: '1rem' }}>
          <input
            type="mail"
            className="form-control"
            placeholder="Email"
            style={{ width: '100%', padding: '0.375rem 0.75rem', fontSize: '1rem', lineHeight: '1.5', borderRadius: '2rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            style={{ width: '100%', padding: '0.375rem 0.75rem', fontSize: '1rem', lineHeight: '1.5', borderRadius: '2rem' }}
          />
        </div>
        <div>
          <p style={{textAlign: 'right'}}><button type="reset" class="btn btn-link" style={{color: '#60ABFB'}}>ลืมรหัสผ่าน</button></p>
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', borderRadius: '2rem', backgroundColor: '#60ABFB', color: 'white', border: '#60ABFB' }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

// AEE1FC
// 60ABFB
// 5170FD
// 4636FC