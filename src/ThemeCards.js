import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import filterByTheme from "./filterByTheme";

function ThemeCards(props) {
  const theme = props.theme;
  // const theme = "existentialist";
  const themeList = filterByTheme(theme);
  const fourThemeList = shortenThemeList(4);

  function shortenThemeList(cardNum) {
    if (themeList.length < cardNum) {
      const cardRowList = themeList;
      return cardRowList;
    } else {
      const cardRowList = themeList.slice(0, cardNum);
      //  console.log(cardRowList);
      return cardRowList;
    }
  }

  return (
    <div className="ThemeCards">
      {/* <h5>Group of cards with theme {theme}.</h5> */}

      {fourThemeList.map((book) => (
        <Card className="themeCard" key={book.key} href={book.href}>
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

export default ThemeCards;
