import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
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
      const newValue = formValue.concat(tag);
      console.log({ newValue });
      setFormValue(newValue);
    } else {
      const newValue = formValue;
      const index = newValue.indexOf(tag);
      console.log(`index is ${index}`);

      if (index > -1) {
        if (newValue.length === 1) {
          setFormValue([]);
        } else {
          newValue.splice(index, 1);
          console.log(`newValue is ${newValue}`);
          console.dir(newValue);
          setFormValue([...newValue]);
        }
      }
    }
  }

  console.log({ formValue });

  return (
    <div className="SearchForm">
      <Form>
        {tagList.map((tag) => (
          <Checkbox
            label={tag}
            onChange={(e, v) => handleCheckBoxChange(e, v, tag)}
          ></Checkbox>
        ))}
      </Form>
    </div>
  );
}
export default SearchForm;
