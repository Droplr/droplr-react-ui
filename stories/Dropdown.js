import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from '../src/components/Dropdown';
import DropdownItem from '../src/components/DropdownItem';

import defaultTheme from '../src/themes/DefaultTheme';
import darkTheme from '../src/themes/DarkTheme';

import {
  NewWindowIcon,
  DownloadIcon,
  ExpireTimeIcon,
  PadlockLockIcon,
  PadlockUnlockIcon,
  TeamIcon,
  TrashBinIcon,
} from '../src/components/icons';

storiesOf('Dropdown', module)
  .addWithJSX('Dropdown minimum props', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <Dropdown isActive>
        <DropdownItem title="Dropdown item 1" onClick={onItemClick} active />
        <DropdownItem title="Dropdown item 2" onClick={onItemClick} />
        <DropdownItem title="Dropdown item 3" onClick={onItemClick} />
        <DropdownItem
          title="Dropdown item 4. Link, internal"
          href="/"
        />
        <DropdownItem
          title="Dropdown item 5. Link, external"
          href="https://droplr.com"
          target="_blank"
        />
      </Dropdown>
    );
  })
  .addWithJSX('Dropdown no item active state', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <Dropdown isActive noItemsActiveState>
        <DropdownItem title="Dropdown item 1" onClick={onItemClick} active />
        <DropdownItem title="Dropdown item 2" onClick={onItemClick} />
        <DropdownItem title="Dropdown item 3" onClick={onItemClick} />
        <DropdownItem
          title="Dropdown item 4. Link, internal"
          href="/"
        />
        <DropdownItem
          title="Dropdown item 5. Link, external"
          href="https://droplr.com"
          target="_blank"
        />
      </Dropdown>
    );
  })
  .addWithJSX('Dropdown with title', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <Dropdown header="Dropdown title" isActive >
        <DropdownItem title="Dropdown item 1" onClick={onItemClick} active />
        <DropdownItem title="Dropdown item 2" onClick={onItemClick} />
        <DropdownItem title="Dropdown item 3" onClick={onItemClick} />
        <DropdownItem
          title="Dropdown item 4. Link, internal"
          href="/"
        />
        <DropdownItem
          title="Dropdown item 5. Link, external"
          href="https://droplr.com"
          target="_blank"
        />
      </Dropdown>
    );
  })
  .addWithJSX('Complex', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <Dropdown isActive >
        <DropdownItem
          title={{ text: 'Item 1', Icon: PadlockLockIcon }}
          onClick={onItemClick}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          active
          disabled
        />
        <DropdownItem
          title={{ text: 'Item 2', Icon: TeamIcon }}
          onClick={onItemClick}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          disabled
        />
        <DropdownItem
          title={{ text: 'Item 3', Icon: PadlockUnlockIcon }}
          onClick={onItemClick}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <DropdownItem className="drui-dropdownItem--danger" title="Delete" onClick={onItemClick} Icon={TrashBinIcon} />

        <style jsx global>{`
          .drui-dropdownItem--danger {
            height: 50px;
            padding: {
              top: 10px;
              bottom: px
            }
            margin-top: 10px;
            border-top: 1px solid ${defaultTheme.dropdown.borderColorLight};

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
              color: ${defaultTheme.dropdown.item.title.hoverDanger};
            }

            .drui-dropdownItem__icon {
              fill: ${defaultTheme.dropdown.item.icon.fillDanger};
            }
          }

          .theme--dark {
            .drui-dropdownItem--danger {
              border-top-color: ${darkTheme.dropdown.borderColorLight};

              &:hover {
                .drui-dropdownItem__action {
                  background: ${darkTheme.dropdown.item.hoverColor};
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
                  background: ${darkTheme.dropdown.item.activeColor};
                }
              }

              .drui-dropdownItem__title {
                color: ${darkTheme.dropdown.item.title.hoverDanger};
              }

              .drui-dropdownItem__icon {
                fill: ${darkTheme.dropdown.item.icon.fillDanger};
              }
            }
          }
        `}</style>
      </Dropdown>
    );
  })
