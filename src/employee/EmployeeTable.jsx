import React, { useState } from 'react'

export default function EmployeeTable() {

 const [employees, setEmployees] = useState([{
    'name': 'Pavani',
    'salary': 100
  }, {
    
    'name': 'priya',
    'salary': 200
  }]);
  return (
    <div>
      <h2>Employee List</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
