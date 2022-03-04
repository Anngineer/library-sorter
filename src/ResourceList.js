import React from "react";
import blogData from "./blogData";

function ResourceList(props) {
  let blogList = props.blogList;
  //   let length = blogList.length();
  let allTitles = blogList.map((blog) => blog.title).join(", ");
  const formValue = props.formValue;

  if (blogList.length === 0) {
    return (
      <div>
        <p>Nothing in blogList. </p>
        <p>The topics checked are {formValue.join(", ")}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>The topics checked are {formValue.join(", ")}</p>
        <p> The titles are: {allTitles}</p>
      </div>
    );
  }
}
export default ResourceList;
