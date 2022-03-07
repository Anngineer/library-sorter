import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
// import "./BlogCards.css";

import blogData from "./blogData";
// import NewListButton from "./NewListButton";

function BlogCards(props) {
  const blogList = props.blogList;

  // const [bookList, setBookList] = useState(blogData);

  return (
    <div className="BlogCards">
      {blogList.map((book) => (
        <Card className="card">
          <Card.Content>
            <Card.Header className="bookHeader">{book.title}</Card.Header>
          </Card.Content>
          <Card.Content>
            <p>{book.tags.join(", ")}</p>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}

export default BlogCards;
