import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";

//import Main from "./Main";
import Page1 from "./Page1";
import Page2 from "./Page2";
//import Signup from "./Signup";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />;
      <Route path="/page2" element={<Page2 />} />
      
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoute;