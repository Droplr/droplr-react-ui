import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';
import DropdownWithToggler from '../src/components/DropdownWithToggler';
import DropdownItem from '../src/components/DropdownItem';

storiesOf('DropdownWithToggler', module)
  .addWithJSX('primary', () => (
    <DropdownWithToggler
      Toggler={Button}
    >
      <DropdownItem title="Item 1" />
      <DropdownItem title="Item 2" />
      <DropdownItem title="Item 3" />
    </DropdownWithToggler>
  ))
