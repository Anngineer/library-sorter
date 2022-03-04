import React from "react";
import blogData from "./blogData";

export default function createTags() {
  let tagList = [];

  for (const book of blogData) {
    const tags = book.tags;
    for (const tag of tags) {
      // console.log(tag);
      if (!tagList.includes(tag)) {
        tagList.push(tag);
      }
    }
  }
  // console.log("Blog List of Tags");

  // console.log(tagList);
  return tagList;
}
