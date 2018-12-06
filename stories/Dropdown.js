import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from '../src/components/Dropdown';
import DropdownItem from '../src/components/DropdownItem';

import defaultTheme from '../src/themes/DefaultTheme';
import darkTheme from '../src/themes/DarkTheme';

import {
  PadlockLockIcon,
  PadlockUnlockIcon,
  TeamIcon,
  TrashBinIcon,
} from '../src/components/icons';

storiesOf('Dropdown', module)
  .addWithJSX('Dropdown minimum props', () => (
    <Dropdown isActive>
      <DropdownItem title="Dropdown item 1" active />
      <DropdownItem title="Dropdown item 2" />
      <DropdownItem title="Dropdown item 3" />
      <DropdownItem
        title="Dropdown item 4. Link, internal"
        href="javascript:void(0)"
      />
      <DropdownItem
        title="Dropdown item 5. Link, external"
        href="https://droplr.com"
        target="_blank"
      />
    </Dropdown>
  ))
  .addWithJSX('Dropdown no item active state', () => (
    <Dropdown isActive showItemStatus>
      <DropdownItem title="Dropdown item 1" active />
      <DropdownItem title="Dropdown item 2" />
      <DropdownItem title="Dropdown item 3" />
      <DropdownItem
        title="Dropdown item 4. Link, internal"
        href="javascript:void(0)"
      />
      <DropdownItem
        title="Dropdown item 5. Link, external"
        href="https://droplr.com"
        target="_blank"
      />
    </Dropdown>
  ))
  .addWithJSX('Dropdown with title', () => (
    <Dropdown header="Dropdown title" isActive >
      <DropdownItem title="Dropdown item 1" active />
      <DropdownItem title="Dropdown item 2" />
      <DropdownItem title="Dropdown item 3" />
      <DropdownItem
        title="Dropdown item 4. Link, internal"
        href="javascript:void(0)"
      />
      <DropdownItem
        title="Dropdown item 5. Link, external"
        href="https://droplr.com"
        target="_blank"
      />
    </Dropdown>
  ))
  .addWithJSX('Complex', () => (
    <Dropdown isActive >
      <DropdownItem
        title="Item 1"
        TitleIcon={PadlockLockIcon}
        
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        active
        disabled
      />
      <DropdownItem
        title="Item 2"
        TitleIcon={TeamIcon}
        
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        disabled
      />
      <DropdownItem
        title="Item 3"
        TitleIcon={PadlockUnlockIcon}
        
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      />
      <DropdownItem className="drui-dropdownItem--danger" title="Delete" Icon={TrashBinIcon} />

      <style jsx global>{`
        .drui-dropdownItem--danger {
          height: 50px;
          padding-top: 10px;
          margin-top: 10px;
          border-top: 1px solid ${defaultTheme.dropdown.headerBorderColor};

          &:hover {
            .drui-dropdownItem__action {
              background: rgba(249, 76, 76, 0.1);
            }

            .drui-dropdownItem__title {
              color: rgb(249, 59, 59);
            }

            .drui-dropdownItem__icon {
              fill: rgb(249, 59, 59);
            }
          }

          &:active {
            .drui-dropdownItem__action {
              background: rgba(249, 76, 76, 0.2);
            }
          }

          .drui-dropdownItem__title {
            color: ${defaultTheme.dropdownItem.title.textColorHoverDanger};
          }

          .drui-dropdownItem__icon {
            fill: ${defaultTheme.dropdownItem.icon.fillDanger};
          }
        }

        .theme--dark {
          .drui-dropdownItem--danger {
            border-top-color: ${darkTheme.dropdown.borderColor};

            &:hover {
              .drui-dropdownItem__action {
                background: ${darkTheme.dropdownItem.backgoundColorHover};
              }

              .drui-dropdownItem__title {
                color: rgb(249, 59, 59);
              }

              .drui-dropdownItem__icon {
                fill: rgb(249, 59, 59);
              }
            }

            &:active {
              .drui-dropdownItem__action {
                background: ${darkTheme.dropdownItem.backgoundColorActive};
              }
            }

            .drui-dropdownItem__title {
              color: ${darkTheme.dropdownItem.title.textColorHoverDanger};
            }

            .drui-dropdownItem__icon {
              fill: ${darkTheme.dropdownItem.icon.fillDanger};
            }
          }
        }
      `}</style>
    </Dropdown>
  ))
