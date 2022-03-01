import React, { useState } from "react";
import "./App.css";

import Checkboxes from "./Checkboxes";
import blogData from "./blogData";
import IntroSection from "./IntroSection";
import FilterSection from "./FilterSection";
import ResourceSection from "./ResourceSection";

function App() {
  // const [blogList, setBlogList] = useState([{ title: "Anne of Green Gables" }]);
  const Anne = [{ title: "Anne of Green Gables" }, { title: "Friend Okra" }];

  const [blogList, setBlogList] = useState(Anne);

  return (
    <div className="App">
      <IntroSection />
      <FilterSection setBlogList={setBlogList} />
      <ResourceSection blogList={blogList} />
    </div>
  );
}

export default App;
