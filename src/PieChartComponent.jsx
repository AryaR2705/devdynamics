import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './pie.css';

const PieChartComponent = ({ data }) => {
  const COLORS = ['#EF6B6B', '#61CDBB', '#FAC76E', '#C2528B', '#0396A6', '#5F50A9', '#8F3519'];

  const formattedData = data.map((item, index) => ({
    name: item.name,
    value: parseInt(item.value, 10), // Ensure value is parsed as integer
    fillColor: COLORS[index % COLORS.length],
  }));

  return (
    <div className="pie-chart-container">
      <PieChart width={400} height={400} className="pie-chart">
        <Pie
          data={formattedData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          labelLine={false} // Remove labels
        >
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fillColor} />
          ))}
        </Pie>
        <Tooltip className="tooltip" />
      </PieChart>
      <div className="legend">
        {formattedData.map((entry, index) => (
          <div key={`legend-${index}`} className="legend-item">
            <div
              className="legend-color-box"
              style={{ backgroundColor: entry.fillColor }}
            ></div>
            {entry.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
