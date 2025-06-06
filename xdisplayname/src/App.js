import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      setError('Please fill out this field.');
      return;
    }
    setError('');
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="App">
      <h1>FULL NAME DISPLAY</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setError('');
              }}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setError('');
              }}
              required
            />
          </label>
          {error && <span className="error">{error}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <div className="full-name">
          FULL NAME: {fullName}
        </div>
      )}
    </div>
  );
}

export default App;