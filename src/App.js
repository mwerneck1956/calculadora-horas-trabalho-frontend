import React from 'react';
import Header from './components/Header/Header'
import WorkTimeCalculator from './Sections/WorkTimeCalculator'
import DialogWorkTimeStatistics from './components/Dialogs/DialogWorkTimeStatistics'
function App() {
  return (
    <div className="App">
      <Header/>
      <WorkTimeCalculator/>
    </div>
  );
}

export default App;
