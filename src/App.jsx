import React from "react";
import Path from "./components/Path.jsx";
import Profile from './components/Profile';
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
      <div className="row d-flex" style={{ height: "100dvh" }}>
        <div className="left-side col-sm-12 col-md-3 p-0 d-none d-md-flex flex-column">
          <Profile name={"Heng"} email={"Heng@email.com"} />
          <Navbar />
        </div>
        <div className="col-md-9 p-0 m-0 h-100">
          <Path />
        </div>
      </div>
    </>
  );
};

export default App;
