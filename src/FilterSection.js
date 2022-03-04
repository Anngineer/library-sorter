import React from "react";
import createTags from "./createTags";
import SearchForm from "./SearchForm";

function FilterSection(props) {
  const setBlogList = props.setBlogList;
  const setFormValue = props.setFormValue;
  const formValue = props.formValue;
  const tagList = createTags();
  return (
    <div>
      <hr />
      <h2>Filter Section</h2>
      {/* <p>This section has the function setBlogList</p>

      <button
        onClick={() => setBlogList([{ title: "The Three Body Problem" }])}
      >
        Change Blog List to The Three Body Problem
      </button>
      <p>The Tags to choose from are: {tagList.join(", ")}</p> */}

      <SearchForm
        setBlogList={setBlogList}
        tagList={tagList}
        setFormValue={setFormValue}
        formValue={formValue}
      />
      <hr />
    </div>
  );
}
export default FilterSection;
