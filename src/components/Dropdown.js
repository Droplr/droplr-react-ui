import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import defaultTheme from '../themes/DefaultTheme';

import { DropdownIcon } from './icons';

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

        {/* Custom icon for dropdown item */}
        {Icon &&
          <Icon className="drui-dropdownItem__icon" />
        }

        {/* No custom icon, menu item is active */}
        {!Icon && isActive &&
          <DropdownIcon />
        }

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

            &::before {
              content: '';
              display: block;
              position: absolute;
              top: 0;
              left: 50%;
              transform: translate(-50%, 20%) rotate(45deg);
              width: 10px;
              height: 10px;
              background: ${defaultTheme.dropdown.backgroundColor};
            }
          }

          .drui-dropdown__inner {
            display: flex;
            flex-direction: column;
            z-index: 1;
            width: auto;
            height: auto;
            padding: 20px 20px 10px;
            border-radius: 4px;
            background-color: ${defaultTheme.dropdown.backgroundColor};
            box-shadow: 0 2px 12px -1px ${defaultTheme.dropdown.shadowColor};
          }

          .drui-dropdown__header {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            align-content: center;
            padding-bottom: 10px;
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
            position: relative;
            padding: 0 0 0 26px;
          }

          .drui-dropdownItem__title {
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
