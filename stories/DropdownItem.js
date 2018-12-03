import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownItem from '../src/components/DropdownItem';

storiesOf('DropdownItem', module)
  .addWithJSX('basic', () => (
    <>
      <DropdownItem
        title="Dropdown item"
      />
      <style jsx global>{`
        .storyWrapperLight {
          background: #fff !important;
        }

        .drui-dropdownItem {
          box-shadow: 0 1px 20px -1px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  ));
