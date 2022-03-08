import React from "react";
// import ResourceList from "./ResourceList";
import BlogCards from "./BlogCards";

function ResourceSection(props) {
  let blogList = props.blogList;
  let formValue = props.formValue;
  let allTitles = blogList.map((blog) => blog.title).join(", ");
  if (blogList.length === 0) {
    return (
      <div className="ResourceSection">
        <h3>Resource Section</h3>
        <p>Nothing is checked so we're showing everything. </p>
      </div>
    );
  } else {
    return (
      <div className="ResourceSection">
        <h3>Resource Section</h3>
        <p>The topics checked are {formValue.join(", ")}</p>
        <p> The titles are: {allTitles}</p>
        {/* <ResourceList blogList={blogList} formValue={formValue} /> */}
        <hr />
        <BlogCards blogList={blogList} />
      </div>
    );
  }
}

export default ResourceSection;
