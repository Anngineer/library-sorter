import React from "react";
import ThemeCards from "./ThemeCards";

function ThemeGroupedCards(props) {
  const theme = props.theme;
  const capTheme = theme.charAt(0).toUpperCase() + theme.slice(1);
  return (
    <div className="ThemeGroupedCards">
      <h3>{capTheme} Books</h3>
      <ThemeCards theme={theme} />
      <a href="https://www.google.com/">More {theme} books</a>
    </div>
  );
}
export default ThemeGroupedCards;
