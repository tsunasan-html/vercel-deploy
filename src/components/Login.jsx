import React, { useState, useEffect } from 'react';

const Login = ({ onLoginSuccess }) => { 
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      onLoginSuccess(); 
    }
  }, [onLoginSuccess]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (id === 'port' && password === 'folio') {
      console.log("Login successful");
      localStorage.setItem('isLoggedIn', 'true'); 
      onLoginSuccess();
    } else {
      setError('Incorrect ID or Password.');
    }
  };

  return (
    <div className="position">
      <div className="fadeout">
      <header>
        <div className="header">
          <p>React Transplant</p>
        </div>
      </header>

      <div className="form">
        <form onSubmit={handleLogin}>
          <div className="text-input">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            <span className="separator"></span>
          </div>

          <div className="text-input">
            <label htmlFor="password">Password</label> 
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="separator"></span>
          </div>

          <div className="form-bottom btn_03">
            <input type="submit" id="submit" value="Login" />
          </div>

          {error && <p style={{ color: '#C75656', textAlign: 'center'}}>{error}</p>}

        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
