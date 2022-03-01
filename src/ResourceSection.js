import React from "react";
import ResourceList from "./ResourceList";

function ResourceSection(props) {
  let blogList = props.blogList;
  return (
    <div>
      <h3>Resource Section</h3>
      <ResourceList blogList={blogList} />
    </div>
  );
}

export default ResourceSection;
