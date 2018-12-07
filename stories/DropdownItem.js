import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import defaultTheme from '../src/themes/DefaultTheme';
import darkTheme from '../src/themes/DarkTheme';

import DropdownItem from '../src/components/DropdownItem';
import {
  DownloadIcon,
  PadlockUnlockIcon,
  TrashBinIcon,
} from '../src/components/icons';

storiesOf('DropdownItem', module)
  .addWithJSX('Dropdown item', () => (
    <DropdownItem title="Dropdown item" />
  ))
  .addWithJSX('Dropdown item active', () => (
    <DropdownItem title="Dropdown item active" showItemStatus active />
  ))
  .addWithJSX('Dropdown item inactive', () => (
    <DropdownItem title="Dropdown item inactive" showItemStatus />
  ))
  .addWithJSX('Dropdown item link', () => (
    <DropdownItem title="Dropdown item link" href="javascript:void(0)" />
  ))
  .addWithJSX('Dropdown item link in new window', () => (
    <DropdownItem title="Dropdown item link in new window" href="#" target="_blank" />
  ))
  .addWithJSX('Dropdown item with icon', () => (
    <DropdownItem title="Dropdown item with icon" Icon={DownloadIcon} />
  ))
  .addWithJSX('Dropdown item with title icon', () => (
    <DropdownItem title="Dropdown item with title icon" TitleIcon={PadlockUnlockIcon} />
  ))
  .addWithJSX('Dropdown item with description', () => (
    <DropdownItem
      title="Dropdown item with description and icon"
      TitleIcon={PadlockUnlockIcon}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    />
  ))
  .addWithJSX('Dropdown item active with description and icon', () => (
    <DropdownItem
      title="Dropdown item active"
      TitleIcon={PadlockUnlockIcon}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      showItemStatus
      active
    />
  ))
  .addWithJSX('Dropdown item disabled with description and icon', () => (
    <DropdownItem
      title="Dropdown item disabled"
      Icon={PadlockUnlockIcon}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      disabled
    />
  ))
