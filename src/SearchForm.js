// import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import { Checkbox } from "semantic-ui-react";
import blogData from "./blogData";

function SearchForm(props) {
  const setBlogList = props.setBlogList;
  const tagList = props.tagList;
  const setFormValue = props.setFormValue;
  const formValue = props.formValue;

  // const [tagList, setTagList] = useState(["Romance", "Comedy", "Satire"]);
  // const [formValue, setFormValue] = useState([]);
  function handleCheckBoxChange(e, v, tag) {
    console.log(e);
    console.log(tag);
    console.log(v.checked);

    if (v.checked) {
      let newValue = formValue.concat(tag);
      console.log({ newValue });
      setFormValue(newValue);
      handleBlogList(newValue);
    } else {
      let newValue = formValue;
      const index = newValue.indexOf(tag);
      console.log(`index is ${index}`);

      if (index > -1) {
        if (newValue.length === 1) {
          setFormValue([]);
          newValue = [];
          handleBlogList(newValue);
        } else {
          newValue.splice(index, 1);
          console.log(`newValue is ${newValue}`);
          console.dir(newValue);
          setFormValue([...newValue]);
          newValue = [...newValue];
          handleBlogList(newValue);
        }
      }
    }
  }

  function handleBlogList(newValue) {
    let newBlogList = [];
    if (newValue.length === 0) {
      setBlogList(newBlogList);
    } else {
      for (const tag of newValue) {
        for (const book of blogData) {
          let objectTags = book.tags;
          if (objectTags.includes(tag)) {
            console.log(`${book.title} has the tag ${tag}`);
            if (!newBlogList.includes(book)) {
              newBlogList = [book, ...newBlogList];
            }
          } else {
            console.log(`${book.title} does not have the tag ${tag}`);
          }
          setBlogList(newBlogList);
          // console.log(objectTags.join(", "));
        }
      }
    }
  }
  console.log({ formValue });

  return (
    <div className="SearchForm">
      <Form className="form">
        {tagList.map((tag) => (
          <Checkbox
            className="checkbox"
            label={tag}
            onChange={(e, v) => handleCheckBoxChange(e, v, tag)}
          ></Checkbox>
        ))}
      </Form>
    </div>
  );
}
export default SearchForm;
