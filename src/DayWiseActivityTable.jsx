import React from 'react';
import './table.css';
// Table Header Component
const TableHeader = () => (
  <thead>
    <tr>
      <th>Date</th>
      <th>PR Open</th>
      <th>PR Merged</th>
      <th>Commits</th>
      <th>PR Reviewed</th>
      <th>PR Comments</th>
      <th>Incident Alerts</th>
      <th>Incidents Resolved</th>
    </tr>
  </thead>
);

// Table Row Component
const TableRow = ({ day }) => (
  <tr key={day.date}>
    <td>{day.date}</td>
    {day.items.children.map((item) => (
      <td key={item.label}>{item.count}</td>
    ))}
  </tr>
);

// Main Table Component
const DayWiseActivityTable = ({ data }) => (
  <table>
    <TableHeader />
    <tbody>
      {data.map((day) => (
        <TableRow key={day.date} day={day} />
      ))}
    </tbody>
  </table>
);

export default DayWiseActivityTable;
