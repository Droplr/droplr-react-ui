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
        <DropdownItem title="Dropdown item 1" onClick={onItemClick} isActive />
        <DropdownItem title="Dropdown item 2" onClick={onItemClick} />
        <DropdownItem title="Dropdown item 3" onClick={onItemClick} />
        <DropdownItem
          title="Dropdown item 4. Link, internal"
          isLink
          href="/"
        />
        <DropdownItem
          title="Dropdown item 5. Link, external"
          isLink
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
        <DropdownItem title="Dropdown item 1" onClick={onItemClick} isActive />
        <DropdownItem title="Dropdown item 2" onClick={onItemClick} />
        <DropdownItem title="Dropdown item 3" onClick={onItemClick} />
        <DropdownItem
          title="Dropdown item 4. Link, internal"
          isLink
          href="/"
        />
        <DropdownItem
          title="Dropdown item 5. Link, external"
          isLink
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
        <DropdownItem title="Dropdown item 1" onClick={onItemClick} isActive />
        <DropdownItem title="Dropdown item 2" onClick={onItemClick} />
        <DropdownItem title="Dropdown item 3" onClick={onItemClick} />
        <DropdownItem
          title="Dropdown item 4. Link, internal"
          isLink
          href="/"
        />
        <DropdownItem
          title="Dropdown item 5. Link, external"
          isLink
          href="https://droplr.com"
          target="_blank"
        />
      </Dropdown>
    );
  })
  .addWithJSX('Dropdown with icon', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <Dropdown isActive>
        <DropdownItem title="Open" onClick={onItemClick} Icon={NewWindowIcon} />
        <DropdownItem title="Download" onClick={onItemClick} Icon={DownloadIcon} />
        <DropdownItem title="Set Self-Destruct" onClick={onItemClick} Icon={ExpireTimeIcon} />
        <DropdownItem title="Set Privacy" onClick={onItemClick} Icon={PadlockLockIcon} />
      </Dropdown>
    );
  })
  .addWithJSX('Dropdown with element modifier', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <Dropdown isActive >
        <DropdownItem title="Open" onClick={onItemClick} Icon={NewWindowIcon} />
        <DropdownItem title="Download" onClick={onItemClick} Icon={DownloadIcon} />
        <DropdownItem title="Set Self-Destruct" onClick={onItemClick} Icon={ExpireTimeIcon} />
        <DropdownItem title="Set Privacy" onClick={onItemClick} Icon={PadlockLockIcon} />
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
              color: ${defaultTheme.dropdown.title.hoverDanger};
            }

            .drui-dropdownItem__icon {
              fill: ${defaultTheme.dropdown.icon.fillDanger};
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
                color: ${darkTheme.dropdown.title.hoverDanger};
              }

              .drui-dropdownItem__icon {
                fill: ${darkTheme.dropdown.icon.fillDanger};
              }
            }
          }
        `}</style>
      </Dropdown>
    );
  })
  .addWithJSX('Dropdown with item title icon', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <Dropdown isActive>
        <DropdownItem title={{ text: 'Item 1', Icon: PadlockLockIcon }} onClick={onItemClick} isActive />
        <DropdownItem title={{ text: 'Item 2', Icon: TeamIcon }} onClick={onItemClick} />
        <DropdownItem title={{ text: 'Item 3', Icon: PadlockUnlockIcon }} onClick={onItemClick} />
      </Dropdown>
    );
  })
  .addWithJSX('Dropdown with item description', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <Dropdown isActive>
        <DropdownItem
          title={{ text: 'Item 1', Icon: PadlockLockIcon }}
          onClick={onItemClick}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          isActive
        />
        <DropdownItem
          title={{ text: 'Item 2', Icon: TeamIcon }}
          onClick={onItemClick}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <DropdownItem
          title={{ text: 'Item 3', Icon: PadlockUnlockIcon }}
          onClick={onItemClick}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
      </Dropdown>
    );
  })
