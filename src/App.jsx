import React, { useState, useEffect } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import MusicDisplay from "./components/MusicDisplay";
import RefreshComponent from "./components/RefreshComponent";
import DisplayDashboard from "./components/DisplayDashboard/DisplayDashboard";

function App() {
  const [showRefreshComponent, setShowRefreshComponent] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowRefreshComponent(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showRefreshComponent && <RefreshComponent />}
      <div className="appFlex">
        <div className="flex">
          <Navbar />
          <DisplayDashboard />
        </div>
        <MusicDisplay />
      </div>
    </>
  );
}

export default App;
