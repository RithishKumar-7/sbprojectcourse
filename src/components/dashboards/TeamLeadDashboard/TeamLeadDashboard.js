import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TeamLeadDashboard/TeamLeadDashboard.css';

const TeamLead = ({ user }) => {
  const [schedules, setSchedules] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch schedules from API or database
    const fetchSchedules = async () => {
      // Replace with actual API call
      const data = [
        { id: 1, name: 'John Doe', shift: 'Morning', date: '2024-07-25' },
        { id: 2, name: 'Jane Smith', shift: 'Evening', date: '2024-07-25' },
      ];
      setSchedules(data);
    };
    fetchSchedules();
  }, []);

  const handleAddSchedule = () => {
    navigate('/add-schedule'); // Navigate to Add Schedule page
  };

  return (
    <div className="team-lead-container">
      <h1>Welcome, Team Lead</h1>
      <div className="schedule-list">
        <h2>Today's Schedule</h2>
        {schedules.length > 0 ? (
          <ul>
            {schedules.map((schedule) => (
              <li key={schedule.id}>
                <p>{schedule.name} - {schedule.shift}</p>
                <span>{schedule.date}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No schedules available for today.</p>
        )}
      </div>
      <button className="add-schedule-button" onClick={handleAddSchedule}>
        Add Schedule
      </button>
    </div>
  );
};

export default TeamLead;
