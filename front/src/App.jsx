import React from 'react';
import Display from './Display';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name">Worklog Dashboard</h1>
      </header>
      <main>
        <Display />
      </main>
    </div>
  );
};

export default App;
