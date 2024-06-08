import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './chart.css'; // Import the stylesheet

const GraphComponent = ({ data }) => {
  const formattedData = data.map((day) => ({
    date: day.date,
    commits: parseInt(day.items.children.find((item) => item.label === 'Commits').count),
  }));

  return (
    <div className="graph-container">
      <LineChart
        width={600}
        height={300}
        data={formattedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="commits" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default GraphComponent;
