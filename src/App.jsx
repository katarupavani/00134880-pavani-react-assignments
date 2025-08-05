import { useState } from 'react'
import './App.css'
import Hello from './hello/Hello'
import EmployeeTable from './employee/EmployeeTable'
import Parent from './parent/Parent'
import EmpRegForm from './empregistration/EmpRegForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Hello></Hello>
    <EmployeeTable></EmployeeTable>
    <Parent></Parent>
    <EmpRegForm></EmpRegForm>
    </div>
  )
}

export default App
