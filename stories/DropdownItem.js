import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import DropdownItem from '../src/components/DropdownItem';
import defaultTheme from '../src/themes/DefaultTheme';
import darkTheme from '../src/themes/DarkTheme';

import {
  DownloadIcon,
  PadlockUnlockIcon,
  TrashBinIcon,
} from '../src/components/icons';

addDecorator((story) => (
  <div className="dropdownItemStoryWrapper">
    {story()}
    <style jsx global>{`
      .dropdownItemStoryWrapper {
        .storyWrapperLight {
          background: #fff !important;
        }

        .drui-dropdownItem {
          box-shadow: 0 1px 20px -1px rgba(0, 0, 0, 0.05);
        }
      }

      .storyWrapperLight {
        background: #fff !important;
      }

      .drui-dropdownItem {
        box-shadow: 0 1px 20px -1px rgba(0, 0, 0, 0.05);
      }

      .drui-dropdownItem--danger {
        height: 50px;
        padding: {
          top: 10px;
          bottom: px
        }
        margin-top: 10px;
        border-top: 1px solid ${defaultTheme.dropdown.borderColor};

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
  </div>
));
storiesOf('DropdownItem', module)
  .addWithJSX('Dropdown item with min props', () => (
    <DropdownItem title="Dropdown item with min props" />
  ))
  .addWithJSX('Dropdown item is active', () => (
    <DropdownItem title="Dropdown item is active" active />
  ))
  .addWithJSX('Dropdown item link', () => (
    <DropdownItem title="Dropdown item link" href="javascript:void(0)" />
  ))
  .addWithJSX('Dropdown item link in new window', () => (
    <DropdownItem title="Dropdown item link in new window" href="javascript:void(0)" target="_blank" />
  ))
  .addWithJSX('Dropdown item with no active state', () => (
    <DropdownItem title="Dropdown item with no active state" showItemStatus />
  ))
  .addWithJSX('Dropdown item with icon', () => (
    <DropdownItem title="Dropdown item with icon" Icon={DownloadIcon} />
  ))
  .addWithJSX('Dropdown item title with icon', () => (
    <DropdownItem title="Dropdown item title with icon" TitleIcon={PadlockUnlockIcon} />
  ))
  .addWithJSX('Dropdown item with description', () => (
    <>
      <DropdownItem
        title="Dropdown item with description"
        TitleIcon={PadlockUnlockIcon}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        active
      />
    </>
  ))
  .addWithJSX('Dropdown item disabled', () => (
    <DropdownItem
      title="Dropdown item with description"
      Icon={PadlockUnlockIcon}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      active
      disabled
    />
  ))
  .addWithJSX('Dropdown item with modifier', () => (
    <>
      <DropdownItem
        title="Dropdown item with modifier"
        className="drui-dropdownItem--danger"
        Icon={TrashBinIcon}
      />
    </>
  ))
