import React, { useState } from "react";
import "./App.css";

import Checkboxes from "./Checkboxes";
import blogData from "./blogData";
import IntroSection from "./IntroSection";
import FilterSection from "./FilterSection";
import ResourceSection from "./ResourceSection";

function App() {
  // const [blogList, setBlogList] = useState([{ title: "Anne of Green Gables" }]);
  const thisWeek = [
    {
      title: "Artemis Fowl",
      tags: ["comedy", "juvenile literature", "fantasy"],
      key: 9,
    },
    {
      title: "Chronicles of Narnia",
      tags: ["comedy", "juvenile literature", "fantasy"],
      key: 10,
    },
  ];

  const [blogList, setBlogList] = useState(thisWeek);
  const [formValue, setFormValue] = useState([]);

  return (
    <div className="App">
      <IntroSection />
      <FilterSection
        setBlogList={setBlogList}
        blogList={blogList}
        setFormValue={setFormValue}
        formValue={formValue}
      />
      <ResourceSection blogList={blogList} formValue={formValue} />
    </div>
  );
}

export default App;
