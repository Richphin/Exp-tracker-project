import './App.css';
import TrackerForm from './Components/TrackerForm';
import TrackerList from './Components/TrackerList';
import Tracker from './Components/Tracker';
import { useState } from 'react';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <TrackerForm />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <TrackerList />
            </div>

          </div>

        </div>

      </div>

    </div>
   
     
  );
}

export default App;
