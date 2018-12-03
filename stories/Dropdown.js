import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from '../src/components/Dropdown';
import DropdownItem from '../src/components/DropdownItem';

import defaultTheme from '../src/themes/DefaultTheme';

import {
  NewWindowIcon,
  DownloadIcon,
  ExpireTimeIcon,
  PadlockLockIcon,
  TrashBinIcon,
} from '../src/components/icons';

storiesOf('Dropdown', module)
  .addWithJSX('primary', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <Dropdown
        header="Dropdown title"
        onClick={onItemClick}
        isActive
      >
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
  .addWithJSX('With icon', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <Dropdown
        header="Dropdown title"
        onClick={onItemClick}
        isActive
      >
        <DropdownItem title="Open" onClick={onItemClick} Icon={NewWindowIcon} />
        <DropdownItem title="Download" onClick={onItemClick} Icon={DownloadIcon} />
        <DropdownItem title="Set Self-Destruct" onClick={onItemClick} Icon={ExpireTimeIcon} />
        <DropdownItem title="Set Privacy" onClick={onItemClick} Icon={PadlockLockIcon} />
      </Dropdown>
    );
  })
  .addWithJSX('With element modifier', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <Dropdown
        header="Dropdown title"
        onClick={onItemClick}
        isActive
      >
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

            .drui-dropdownItem__title {
              color: ${defaultTheme.dropdown.title.hoverDanger};
            }

            .drui-dropdownItem__icon {
              fill: ${defaultTheme.dropdown.icon.fillDanger};
            }
          }
        `}</style>
      </Dropdown>
    );
  })
