import React, { useState } from 'react'
export default function EmpRegForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [state, setState] = useState('select');
  const [gender, setGender] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Age:", age);
    console.log("State:", state);
    console.log("Gender:", gender);
    console.log("Accepted:", accepted);
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div>
          <label>Password: </label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div>
          <label>Age: </label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <div>
          <label>State: </label>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option>select</option>
            <option value="AP">AP</option>
            <option value="TG">TG</option>
            <option value="TN">TN</option>
          </select>
        </div>

        <div>
          <label>Gender: </label>
          <input type="radio" name="gender" value="M" onChange={(e) => setGender(e.target.value)} /> Male
          <input type="radio" name="gender" value="F" onChange={(e) => setGender(e.target.value)} /> Female
        </div>

        <div>
          <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
          <label> I accept the contract</label>
        </div>

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}