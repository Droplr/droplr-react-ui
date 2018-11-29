import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../src/components/Dropdown';

storiesOf('Dropdown', module)
  .addWithJSX('primary', () => (
    <Dropdown
      header="Dropdown title"
      items={[
        { title: 'Dropdown item 1', isActive: true },
        { title: 'Dropdown item 2' },
        { title: 'Dropdown item 3' },
        { title: 'Dropdown item 4' },
        { title: 'Dropdown item 5' },
      ]}
      isActive
    />
  ))
