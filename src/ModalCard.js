import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";
import blogData from "./blogData";
import filterByTheme from "./filterByTheme";

function ModalCard(props) {
  const dropDownValue = props.dropDownValue;
  const themeBlogList = filterByTheme(dropDownValue);
  const randomIndex = Math.floor(Math.random() * themeBlogList.length);
  console.log(randomIndex, themeBlogList[randomIndex]);
  const chosenBlog = themeBlogList[randomIndex];
  return (
    <Card href={chosenBlog.href}>
      <Card.Content header={chosenBlog.title} />
      <Card.Content description={chosenBlog.tags.join(", ")} />
      <Card.Content extra href="https://google.com">
        <Icon name="user" />
        See more romance blogs
      </Card.Content>
    </Card>
  );
}
export default ModalCard;
