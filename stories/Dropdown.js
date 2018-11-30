import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../src/components/Dropdown';
import DropdownItem from '../src/components/DropdownItem';

storiesOf('Dropdown', module)
  .addWithJSX('primary', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <Dropdown
        header="Dropdown title"
        onClick={(data) => { console.log(data) }}
        isActive
      >
        <DropdownItem title="Dropdown item 1" onClick={onItemClick} isActive />
        <DropdownItem title="Dropdown item 2" onClick={onItemClick} />
        <DropdownItem title="Dropdown item 3" onClick={onItemClick} />
        <DropdownItem title="Dropdown item 4" onClick={onItemClick} />
        <DropdownItem title="Dropdown item 5" onClick={onItemClick} />
      </Dropdown>
    );
  })
