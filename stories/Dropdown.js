import React from 'react';
import { storiesOf } from '@storybook/react';

import defaultTheme from '../src/themes/DefaultTheme';
import darkTheme from '../src/themes/DarkTheme';

import Dropdown from '../src/components/Dropdown';
import DropdownItem from '../src/components/DropdownItem';
import {
  PadlockLockIcon,
  PadlockUnlockIcon,
  TeamIcon,
  TrashBinIcon,
} from '../src/components/icons';

storiesOf('Dropdown', module)
  .addWithJSX('Dropdown', () => (
    <Dropdown isActive>
      <DropdownItem title="Dropdown item 1" />
      <DropdownItem
        title="Item 2"
        TitleIcon={PadlockLockIcon}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        disabled
      />
      <DropdownItem
        title="Item 3"
        TitleIcon={TeamIcon}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        disabled
      />
      <DropdownItem
        title="Item 4"
        TitleIcon={PadlockUnlockIcon}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        active
      />
      <DropdownItem title="Delete" Icon={TrashBinIcon} />
      <DropdownItem title="Dropdown item 6 link" href="javascript:void(0)" />
      <DropdownItem title="Dropdown item 7 link _blank" href="#" target="_blank" />
    </Dropdown>
  ))
  .addWithJSX('Dropdown showItemStatus', () => (
    <Dropdown isActive showItemStatus>
      <DropdownItem title="Dropdown item 1" />
      <DropdownItem
        title="Item 2"
        TitleIcon={PadlockLockIcon}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        disabled
      />
      <DropdownItem
        title="Item 3"
        TitleIcon={TeamIcon}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        disabled
      />
      <DropdownItem
        title="Item 4"
        TitleIcon={PadlockUnlockIcon}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        active
      />
      <DropdownItem title="Delete" Icon={TrashBinIcon} />
      <DropdownItem title="Dropdown item 6 link" href="javascript:void(0)" />
      <DropdownItem title="Dropdown item 7 link _blank" href="#" target="_blank" />
    </Dropdown>
  ))
  .addWithJSX('Dropdown with header', () => (
    <Dropdown header="Dropdown header" isActive>
      <DropdownItem title="Dropdown item 1" />
      <DropdownItem
        title="Item 2"
        TitleIcon={PadlockLockIcon}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        disabled
      />
      <DropdownItem
        title="Item 3"
        TitleIcon={TeamIcon}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        disabled
      />
      <DropdownItem
        title="Item 4"
        TitleIcon={PadlockUnlockIcon}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        active
      />
      <DropdownItem title="Delete" Icon={TrashBinIcon} />
      <DropdownItem title="Dropdown item 6 link" href="javascript:void(0)" />
      <DropdownItem title="Dropdown item 7 link _blank" href="#" target="_blank" />
    </Dropdown>
  ))
