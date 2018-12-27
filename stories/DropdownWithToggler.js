import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';
import DropdownWithToggler from '../src/components/DropdownWithToggler';
import DropdownItem from '../src/components/DropdownItem';
import { DotsIcon } from '../src/components/icons';

const Toggler = () => <button type="button">Dropdown</button>;

storiesOf('DropdownWithToggler', module)
  .addWithJSX('Default', () => (
    <>
      <DropdownWithToggler
        Toggler={<Button type="secondary" Icon={DotsIcon} />}
      >
        <DropdownItem title="Item 1 lorem ipsum dolor" />
        <DropdownItem title="Item 2 lorem ipsum dolor" />
        <DropdownItem title="Item 3 lorem ipsum dolor" />
        <DropdownItem title="Item 4 lorem ipsum dolor" />
      </DropdownWithToggler>
    </>
  ))
  .addWithJSX('Functional component', () => (
    <>
      <DropdownWithToggler
        Toggler={<Toggler />}
      >
        <DropdownItem title="Item 1 lorem ipsum dolor" />
        <DropdownItem title="Item 2 lorem ipsum dolor" />
        <DropdownItem title="Item 3 lorem ipsum dolor" />
        <DropdownItem title="Item 4 lorem ipsum dolor" />
      </DropdownWithToggler>
    </>
  ))
  .addWithJSX('DOM node', () => (
    <>
      <DropdownWithToggler
        Toggler={<span>Toggler</span>}
        id="dom-node"
      >
        <DropdownItem title="Item 1 lorem ipsum dolor" />
        <DropdownItem title="Item 2 lorem ipsum dolor" />
        <DropdownItem title="Item 3 lorem ipsum dolor" />
        <DropdownItem title="Item 4 lorem ipsum dolor" />
      </DropdownWithToggler>
    </>
  ))
