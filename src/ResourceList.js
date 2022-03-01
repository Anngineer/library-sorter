import React from "react";
import blogData from "./blogData";

function ResourceList(props) {
  let blogList = props.blogList;
  //   let length = blogList.length();
  let allTitles = blogList.map((blog) => blog.title).join(", ");

  if (blogList.length === 0) {
    return <div>Nothing in blogList</div>;
  } else {
    return <div>The titles are: {allTitles}</div>;
  }
}
export default ResourceList;
