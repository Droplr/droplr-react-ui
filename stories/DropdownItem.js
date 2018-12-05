import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownItem from '../src/components/DropdownItem';
import defaultTheme from '../src/themes/DefaultTheme';
import darkTheme from '../src/themes/DarkTheme';

import {
  DownloadIcon,
  PadlockUnlockIcon,
  TrashBinIcon,
} from '../src/components/icons';

storiesOf('DropdownItem', module)
  .addWithJSX('Dropdown item with min props', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <>
        <DropdownItem
          title="Dropdown item with min props"
          onClick={onItemClick}
        />
        <style jsx global>{`
          .storyWrapperLight {
            background: #fff !important;
          }

          .drui-dropdownItem {
            box-shadow: 0 1px 20px -1px rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </>
    )
  })
  .addWithJSX('Dropdown item is active', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <>
        <DropdownItem
          title="Dropdown item is active"
          onClick={onItemClick}
          active
        />
        <style jsx global>{`
          .storyWrapperLight {
            background: #fff !important;
          }

          .drui-dropdownItem {
            box-shadow: 0 1px 20px -1px rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </>
    )
  })
  .addWithJSX('Dropdown item link', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <>
        <DropdownItem
          title="Dropdown item link"
          onClick={onItemClick}
          href="/"
        />
        <style jsx global>{`
          .storyWrapperLight {
            background: #fff !important;
          }

          .drui-dropdownItem {
            box-shadow: 0 1px 20px -1px rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </>
    )
  })
  .addWithJSX('Dropdown item link in new window', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <>
        <DropdownItem
          title="Dropdown item link in new window"
          onClick={onItemClick}
          href="/"
          target="_blank"
        />
        <style jsx global>{`
          .storyWrapperLight {
            background: #fff !important;
          }

          .drui-dropdownItem {
            box-shadow: 0 1px 20px -1px rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </>
    )
  })
  .addWithJSX('Dropdown item with no active state', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <>
        <DropdownItem
          title="Dropdown item with no active state"
          onClick={onItemClick}
          noItemsActiveState
        />
        <style jsx global>{`
          .storyWrapperLight {
            background: #fff !important;
          }

          .drui-dropdownItem {
            box-shadow: 0 1px 20px -1px rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </>
    )
  })
  .addWithJSX('Dropdown item with icon', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <>
        <DropdownItem
          title="Dropdown item with icon"
          onClick={onItemClick}
          Icon={DownloadIcon}
        />
        <style jsx global>{`
          .storyWrapperLight {
            background: #fff !important;
          }

          .drui-dropdownItem {
            box-shadow: 0 1px 20px -1px rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </>
    )
  })
  .addWithJSX('Dropdown item title with icon', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <>
        <DropdownItem
          title={{
            text: 'Dropdown item title with icon',
            Icon: PadlockUnlockIcon,
          }}
          onClick={onItemClick}
        />
        <style jsx global>{`
          .storyWrapperLight {
            background: #fff !important;
          }

          .drui-dropdownItem {
            box-shadow: 0 1px 20px -1px rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </>
    )
  })
  .addWithJSX('Dropdown item with description', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <>
        <DropdownItem
          title={{
            text: 'Dropdown item with description',
            Icon: PadlockUnlockIcon,
          }}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          onClick={onItemClick}
          active
        />
        <style jsx global>{`
          .storyWrapperLight {
            background: #fff !important;
          }

          .drui-dropdownItem {
            box-shadow: 0 1px 20px -1px rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </>
    )
  })
  .addWithJSX('Dropdown item disabled', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <>
        <DropdownItem
          title={{
            text: 'Dropdown item with description',
            Icon: PadlockUnlockIcon,
          }}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          onClick={onItemClick}
          active
          disabled
        />
        <style jsx global>{`
          .storyWrapperLight {
            background: #fff !important;
          }

          .drui-dropdownItem {
            box-shadow: 0 1px 20px -1px rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </>
    )
  })
  .addWithJSX('Dropdown item with modifier', () => {
    function onItemClick(e) {
      console.log('click');
    }

    return (
      <>
        <DropdownItem
          title="Dropdown item with modifier"
          className="drui-dropdownItem--danger"
          onClick={onItemClick}
          Icon={TrashBinIcon}
        />
        <style jsx global>{`
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
      </>
    )
  })
