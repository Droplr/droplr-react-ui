import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import defaultTheme from '../themes/DefaultTheme';

import { DropdownIcon } from './icons';

console.log(defaultTheme.convertToRgb);

class Dropdown extends Component {
  constructor() {
    super();

    this.getDropdownItem = this.getDropdownItem.bind(this);
  }

  getDropdownItem(item) {
    const {
      title,
      description,
      Icon,
      isActive,
      className,
      children,
    } = item;

    const titleText = typeof title === 'string' ? title : title.text;

    return (
      <li
        className={classnames('drui-dropdownItem', { [className]: className })}
        key={`druiDropdownItem-${titleText.split(' ').join('').toLowerCase()}`}
      >
        <button className="drui-dropdownItem__button" type="button">
          <div className="drui-dropdownItem__icon">
            {/* Custom icon for dropdown item */}
            {Icon &&
              <Icon className="drui-dropdownItem__icon" />
            }

            {/* No custom icon, menu item is active */}
            {!Icon && isActive &&
              <DropdownIcon />
            }
          </div>

          {/* Item title */}
          <div className="drui-dropdownItem__title">
            
            <span className="drui-dropdownItem__titleText">{titleText}</span>

            {typeof title === 'object' && title.Icon &&
              <title.Icon className="drui-dropdownItem__titleIcon" />
            }
          </div>

          {/* Item description */}
          {description &&
          <span className="drui-dropdownItem__description">{description}</span>
          }
        </button>
      </li>
    );
  }

  render() {
    const {
      position,
      header,
      items,
      isActive,
      className,
    } = this.props;

    if (!isActive) return null;

    return (
      <div className={classnames('drui-dropdown', {
        [`drui-dropdown--${position}`]: position,
        [className]: className,
      })}
      >

        <div className="drui-dropdown__inner">
          {header &&
            <div className="drui-dropdown__header">
              <span className="drui-dropdown__title">
                {typeof header === 'string' ? header : header.title}
              </span>
            </div>
          }

          <ul className="drui-dropdown__itemsList">
            {items.map(this.getDropdownItem)}
          </ul>
        </div>

        <style jsx global>{`
          .drui-dropdown {
            display: block;
            position: relative;
            font-family: ${defaultTheme.font.family.primary};
            padding: 4px 0 0;
            box-sizing: border-box;

            *,
            *::before,
            *::after {
              box-sizing: inherit;
            }
          }

          .drui-dropdown__inner {
            display: flex;
            position: relative;
            z-index: 1;
            flex-direction: column;
            width: auto;
            height: auto;
            padding: 12px 0;
            border-radius: 4px;
            background-color: ${defaultTheme.dropdown.backgroundColor};

            &::before {
              content: '';
              display: block;
              position: absolute;
              z-index: 2;
              top: -4px;
              left: 50%;
              transform: translate(-50%, 20%) rotate(45deg);
              width: 10px;
              height: 10px;
              background: ${defaultTheme.dropdown.backgroundColor};
              box-shadow: -2px -2px 1px -2px ${defaultTheme.dropdown.shadowColor};
            }

            &:after {
              content: '';
              display: block;
              position: absolute;
              z-index: 1;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              border-radius: 4px;
              background-color: transparent;
              box-shadow: 0 2px 12px -1px ${defaultTheme.dropdown.shadowColor};
              pointer-events: none;
            }
          }

          .drui-dropdown__header {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            align-content: center;
            padding: 8px 0;
            margin: 0 20px;
            border-bottom: 1px solid ${defaultTheme.dropdown.borderColor};
          }

          .drui-dropdown__title {
            font-size: ${defaultTheme.font.size.small};
            text-transform: uppercase;
            color: ${defaultTheme.dropdown.titleColor};
            font-weight: 600;
          }

          .drui-dropdown__itemsList {
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0;
            margin: 10px 0 0;
          }

          .drui-dropdownItem {
            height: 34px;
          }

          .drui-dropdownItem__button {
            position: relative;
            padding: 0 20px 0 46px;
            width: 100%;
            height: 100%;
            border: none;
            background-color: ${defaultTheme.dropdown.backgroundColor};
            transition: background-color 150ms ease;
            cursor: pointer;

            &:hover {
              background-color: ${defaultTheme.dropdown.item.hoverColor};
              cursor: pointer;
            }

            &:focus {
              outline: none;
              background-color: ${defaultTheme.dropdown.item.hoverColor};
            }

            &:active {
              background-color: ${defaultTheme.dropdown.item.activeColor};
            }
          }

          .drui-dropdownItem__icon {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 20px;
            width: 20px;
            height: 100%;

            svg {
              fill: ${defaultTheme.dropdown.item.iconColor};

              * {
                fill: inherit;
              }
            }
          }

          .drui-dropdownItem__title {
            display: flex;
            align-items: center;
            height: 34px;
            font-size: ${defaultTheme.font.size.normal};
            font-weight: ${defaultTheme.font.weight.normal};
            color: ${defaultTheme.dropdown.item.titleColor};
          }
        `}</style>
      </div>
    );
  }
}

Dropdown.propTypes = {
  isActive: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        Icon: PropTypes.node.isRequired,
      }),
    ]).isRequired,
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
    Icon: PropTypes.node,
    isActive: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  })).isRequired,
  position: PropTypes.string,
  className: PropTypes.string,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ]),
};

Dropdown.defaultProps = {
  position: 'bottom',
  header: '',
  className: '',
}

export default Dropdown;
