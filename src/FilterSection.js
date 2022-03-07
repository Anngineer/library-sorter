import React from "react";
import createTags from "./createTags";
import SearchForm from "./SearchForm";

function FilterSection(props) {
  const setBlogList = props.setBlogList;
  const blogList = props.blogList;
  const setFormValue = props.setFormValue;
  const formValue = props.formValue;
  const tagList = createTags();
  return (
    <div className="FilterSection">
      <h2>Filter Section</h2>

      <SearchForm
        setBlogList={setBlogList}
        blogList={blogList}
        setFormValue={setFormValue}
        formValue={formValue}
        tagList={tagList}
      />
      <hr />
    </div>
  );
}
export default FilterSection;
