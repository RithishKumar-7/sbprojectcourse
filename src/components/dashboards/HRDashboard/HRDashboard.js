import React, { useState } from 'react';
import { Typography, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import '../HRDashboard/HRDashboard.css';

const initialEmployees = [
  { id: 1, name: 'John Doe', role: 'Developer', department: 'Engineering' },
  { id: 2, name: 'Jane Smith', role: 'Designer', department: 'Design' },
  { id: 3, name: 'Mark Johnson', role: 'Product Manager', department: 'Product' }
];

const HRDashboard = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [open, setOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ name: '', role: '', department: '' });

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleAddEmployee = () => {
    setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
    setOpen(false);
    setNewEmployee({ name: '', role: '', department: '' });
  };

  return (
    <div className="hr-dashboard">
      <Typography variant="h4" className="title">HR Dashboard</Typography>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add New Employee
      </Button>
      <div className="employee-list">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <Typography variant="h6">{employee.name}</Typography>
            <Typography variant="body1"><b>Role:</b> {employee.role}</Typography>
            <Typography variant="body1"><b>Department:</b> {employee.department}</Typography>
          </div>
        ))}
      </div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Employee</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={newEmployee.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="role"
            label="Role"
            variant="outlined"
            fullWidth
            value={newEmployee.role}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="department"
            label="Department"
            variant="outlined"
            fullWidth
            value={newEmployee.department}
            onChange={handleChange}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddEmployee} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HRDashboard;
