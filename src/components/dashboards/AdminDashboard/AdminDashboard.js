import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AdminDashboard/AdminDashboard.css';

const AdminDashboard = () => {
  const [schedules, setSchedules] = useState([]);
  const [users, setUsers] = useState([]);
  const [newSchedule, setNewSchedule] = useState({ user: '', date: '', shift: '' });
  const navigate = useNavigate();

  // Mock data and functions for demonstration
  const mockUsers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' },
  ];

  const mockSchedules = [
    { id: 1, user: 'John Doe', date: '2024-07-25', shift: 'Morning' },
    { id: 2, user: 'Jane Smith', date: '2024-07-26', shift: 'Afternoon' },
  ];

  // Load data on component mount (useEffect can be used here in a real app)
  React.useEffect(() => {
    setUsers(mockUsers);
    setSchedules(mockSchedules);
  }, []);

  const handleAddSchedule = () => {
    setSchedules([...schedules, { ...newSchedule, id: schedules.length + 1 }]);
    setNewSchedule({ user: '', date: '', shift: '' });
  };

  const handleInputChange = (e) => {
    setNewSchedule({ ...newSchedule, [e.target.name]: e.target.value });
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="section">
        <h2>Current Schedules</h2>
        <ul className="schedule-list">
          {schedules.map((schedule) => (
            <li key={schedule.id}>
              {schedule.user} - {schedule.date} - {schedule.shift}
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Add New Schedule</h2>
        <div className="form">
          <label>User</label>
          <select name="user" value={newSchedule.user} onChange={handleInputChange}>
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user.id} value={user.name}>{user.name}</option>
            ))}
          </select>

          <label>Date</label>
          <input
            type="date"
            name="date"
            value={newSchedule.date}
            onChange={handleInputChange}
          />

          <label>Shift</label>
          <select name="shift" value={newSchedule.shift} onChange={handleInputChange}>
            <option value="">Select Shift</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Night">Night</option>
          </select>

          <button onClick={handleAddSchedule}>Add Schedule</button>
        </div>
      </div>

      <div className="section">
        <h2>Manage Users</h2>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>

      <button onClick={() => navigate('/')} className="logout-button">Logout</button>
    </div>
  );
};

export default AdminDashboard;
