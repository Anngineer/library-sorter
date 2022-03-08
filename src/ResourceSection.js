import React from "react";
// import ResourceList from "./ResourceList";
import BlogCards from "./BlogCards";
import ThemeGroupedCards from "./ThemeGroupedCards";

function ResourceSection(props) {
  let blogList = props.blogList;
  let formValue = props.formValue;
  let allTitles = blogList.map((blog) => blog.title).join(", ");
  if (blogList.length === 0) {
    return (
      <div className="ResourceSection">
        <h2>Resource Section</h2>
        <p>Nothing is checked so we're showing everything. </p>
        <ThemeGroupedCards theme={"humor"} />
        <hr />
        <ThemeGroupedCards theme={"sci fi"} />
        <hr />
        <ThemeGroupedCards theme={"fantasy"} />
        <hr />
        <ThemeGroupedCards theme={"romance"} />
      </div>
    );
  } else {
    return (
      <div className="ResourceSection">
        <h3>Resource Section</h3>
        <p>The topics checked: {formValue.join(", ")}</p>
        <p> The titles shown: {allTitles}</p>
        {/* <ResourceList blogList={blogList} formValue={formValue} /> */}
        <hr />
        <BlogCards blogList={blogList} />
      </div>
    );
  }
}

export default ResourceSection;
