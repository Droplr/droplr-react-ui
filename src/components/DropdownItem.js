import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { DropdownIcon } from './icons';

import defaultTheme from '../themes/DefaultTheme';

const DropdownItem = ({
  title,
  description,
  Icon,
  className,
  isActive,
  onClick,
  isLink,
  href,
  target,
  children
}) => {
  function getClickableElem() {

  }

  const titleText = typeof title === 'string' ? title : title.text;
  const ActionElem = isLink ? 'a' : 'button';

  return (
    <div
      className={classnames('drui-dropdownItem', { [className]: className })}
      onClick={onClick}
      key={`drui-dropdown-item-${titleText.split(' ').join('').toLowerCase()}`}
    >
      <ActionElem
        href={href || null}
        type={!href ? 'button' : null}
        className="drui-dropdownItem__action"
        target={target || null}
        rel={target === '_blank' ? 'noopener nofollow' : null}
      >
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
      </ActionElem>

      {children || null}

      <style jsx global>{`
        .drui-dropdownItem {
          height: 34px;
        }

        .drui-dropdownItem__action {
          display: block;
          position: relative;
          padding: 0 20px 0 46px;
          width: 100%;
          height: 100%;
          border: none;
          background-color: ${defaultTheme.dropdown.backgroundColor};
          transition: background-color 150ms ease;
          text-decoration: none;
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
};

DropdownItem.propTypes = {
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
  position: PropTypes.string,
};

export default DropdownItem;
