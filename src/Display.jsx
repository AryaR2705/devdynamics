import React, { useEffect, useState } from 'react';
import PieChartComponent from './PieChartComponent';
import GraphComponent from './GraphComponent';
import DayWiseActivityTable from './DayWiseActivityTable';
import './display.css'; // Import the CSS file

const Display = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://sample-obkr.onrender.com/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log('Fetched data:', jsonData);
        setData(jsonData.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Please wait Loading...</div>;
  }

  if (!data.AuthorWorklog) {
    console.log('Data:', data);
    return <div>No Author Worklog data available.</div>;
  }

  return (
    <div>
      <h1 className="name">Author Worklog</h1>
      {data.AuthorWorklog.rows.map((row) => (
        <div key={row.name} style={{ marginBottom: '20px' }}>
          <h2 className="author-name">{row.name}</h2>
          <DayWiseActivityTable data={row.dayWiseActivity} />
          <div className="charts-container">
            <div className="chart">
              <PieChartComponent data={row.totalActivity} />
            </div>
            <div className="chart">
              <GraphComponent data={row.dayWiseActivity} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;
