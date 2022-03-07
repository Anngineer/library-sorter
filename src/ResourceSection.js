import React from "react";
import ResourceList from "./ResourceList";
import BlogCards from "./BlogCards";

function ResourceSection(props) {
  let blogList = props.blogList;
  let formValue = props.formValue;
  return (
    <div className="ResourceSection">
      <h3>Resource Section</h3>
      <ResourceList blogList={blogList} formValue={formValue} />
      <hr />
      <BlogCards blogList={blogList} />
    </div>
  );
}

export default ResourceSection;
