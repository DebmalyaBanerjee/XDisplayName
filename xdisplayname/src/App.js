import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    setter(value);
    if (error.includes('Invalid characters removed')) {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    if (!trimmedFirstName || !trimmedLastName) {
      setError('Please fill out this field.');
      return;
    }
    setError('');
    setFullName(`${trimmedFirstName} ${trimmedLastName}`);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => handleInputChange(e, setFirstName)}
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
              onChange={(e) => handleInputChange(e, setLastName)}
              required
            />
          </label>
          {error && <span className="error">{error}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <div className="full-name">
          Full Name: {fullName}
        </div>
      )}
    </div>
  );
}

export default App;