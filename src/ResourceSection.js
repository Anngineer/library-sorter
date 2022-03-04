import React from "react";
import ResourceList from "./ResourceList";

function ResourceSection(props) {
  let blogList = props.blogList;
  let formValue = props.formValue;
  return (
    <div>
      <h3>Resource Section</h3>
      <ResourceList blogList={blogList} formValue={formValue} />
    </div>
  );
}

export default ResourceSection;
