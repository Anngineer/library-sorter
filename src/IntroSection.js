import React from "react";
import IAmDropdown from "./IAmDropdown";

function IntroSection() {
  return (
    <div className="IntroSection">
      <h1>Book Blog Posts</h1>
      <p>Welcome to the word hoard! Choose an option for a suggestion.</p>
      <IAmDropdown />
      <hr />
    </div>
  );
}
export default IntroSection;
