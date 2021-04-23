import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";


export default function SelectBox({ options, selected, setFromChild, propertyKey }) {
  return (
    <DropdownButton
      variant="outline-secondary"
      title={selected}
      id="input-group-dropdown-1"
      className="select-box"
    >
      {
      /* dönen keyin gender valuesi olan array "female,male gibi" */
      options.map((item) => {
        return(
          <Dropdown.Item  onClick={() => setFromChild(propertyKey, item)/*gender female gibi*/ } >{item}</Dropdown.Item>
        )
      })}
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => setFromChild(propertyKey, "All")}>All</Dropdown.Item>
    </DropdownButton>
  );
}
