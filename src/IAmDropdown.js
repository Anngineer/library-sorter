import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import IntroModal from "./IntroModal";
function IAmDropdown() {
  // DROPDOWN
  const [dropDownValue, setDropDownValue] = useState("");
  const bookTypeOptions = [
    {
      key: "humor",
      text: "looking for a laugh.",
      value: "humor",
    },
    {
      key: "romance",
      text: "a fan of rom com movies.",
      value: "romance",
    },
    {
      key: "sci fi",
      text: "keen on science.",
      value: "sci fi",
    },
    {
      key: "fantasy",
      text: "here for magic and myth.",
      value: "fantasy",
    },
  ];
  function handleDropDownSelect(event, data) {
    console.log(data.value);
    setDropDownValue(data.value);
    handleOpenDisplayModel();
  }

  // INTRO MODAL
  const [displayModal, setDisplayModal] = useState(false);
  const handleOpenDisplayModel = () => {
    setDisplayModal(true);
  };
  const handleCloseDisplayModal = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <Dropdown
        className="Dropdown"
        text="I am..."
        selection
        options={bookTypeOptions}
        onChange={(event, data) => {
          handleDropDownSelect(event, data);
          //   handleOpenDisplayModel();
        }}
      />
      <IntroModal
        dropDownValue={dropDownValue}
        displayModal={displayModal}
        onOpenDisplayModal={handleOpenDisplayModel}
        onCloseDisplayModal={handleCloseDisplayModal}
      />
    </>
  );
}
export default IAmDropdown;
