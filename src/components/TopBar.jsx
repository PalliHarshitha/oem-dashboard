import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const TopBar = () => {
  return (
    <div className="d-flex justify-content-between top-bar">
      <div>
        <DropdownButton id="dropdown-default-view" title="Default View">
          <Dropdown.Item href="#">View 1</Dropdown.Item>
          <Dropdown.Item href="#">View 2</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-custom-view" title="Configure Custom View">
          <Dropdown.Item href="#">View 1</Dropdown.Item>
          <Dropdown.Item href="#">View 2</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        <DropdownButton id="dropdown-display-grid" title="Display Grid">
          <Dropdown.Item href="#">1 Graph</Dropdown.Item>
          <Dropdown.Item href="#">2 Graphs</Dropdown.Item>
        </DropdownButton>
        <div className="d-flex">
        <span className="mx-2">From</span>
          <input type="date" className="mx-2" />
          <span className="mx-2">To</span>
          <input type="date" className="mx-2" />
        </div>
        <DropdownButton id="dropdown-report" title="Generate Report">
          <Dropdown.Item href="#">Type 1</Dropdown.Item>
          <Dropdown.Item href="#">Type 2</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default TopBar;