import React from "react";
import Header from "./components/Header/Header";
import WorkTimeCalculator from "./Sections/WorkTimeCalculator";
import DialogWorkTimeStatistics from "./components/Dialogs/DialogWorkTimeStatistics";
import ScheduleTable from "./components/Table/ScheduleTable";
import { Grid } from "@material-ui/core";
function App() {
  return (
    <div className="App">
      <Header />
    
      <WorkTimeCalculator />
    </div>
  );
}

export default App;
