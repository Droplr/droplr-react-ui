import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';
import DropdownWithToggler from '../src/components/DropdownWithToggler';
import DropdownItem from '../src/components/DropdownItem';
import { DotsIcon } from '../src/components/icons';

storiesOf('DropdownWithToggler', module)
  .addWithJSX('Default', () => (
    <>
      <DropdownWithToggler
        Toggler={<Button type="secondary" Icon={DotsIcon} />}
      >
        <DropdownItem title="Item 1 lorem ipsum lorem ipsum" />
        <DropdownItem title="Item 2 lorem ipsum lorem ipsum" />
        <DropdownItem title="Item 3 lorem ipsum lorem ipsum" />
      </DropdownWithToggler>
      <style jsx global>{`
        .storyWrapperLight,
        .storyWrapperDark {
          text-align: center;
          height: 200px;
        }
        .drui-dropdown__wrapper {
          margin: 0 auto;
        }
      `}</style>
    </>
  ))
