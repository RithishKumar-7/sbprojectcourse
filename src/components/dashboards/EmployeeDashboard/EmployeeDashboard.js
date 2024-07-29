import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import '../EmployeeDashboard/EmployeeDashboard.css';

const Employee = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', role: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', role: 'Product Manager' },
    { id: 3, name: 'Emily Johnson', role: 'UI/UX Designer' },
  ]);

  const handleSchedule = (id) => {
    // Logic to handle scheduling for the employee
    console.log(`Scheduling for employee ID: ${id}`);
  };

  return (
    <div className="employee-container">
      <Typography variant="h4" className="title">Employee Scheduling</Typography>
      <div className="employee-list">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <Typography variant="h6" className="employee-name">{employee.name}</Typography>
            <Typography variant="body1" className="employee-role">{employee.role}</Typography>
            <Button 
              variant="contained" 
              color="primary" 
              className="schedule-button" 
              onClick={() => handleSchedule(employee.id)}
            >
              Schedule Shift
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;
