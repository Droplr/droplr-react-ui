import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { CheckIcon } from './icons';

import defaultTheme from '../themes/DefaultTheme';
import darkTheme from '../themes/DarkTheme';

const DropdownItem = ({
  title,
  description,
  Icon,
  className,
  active,
  onClick,
  href,
  target,
  children,
  disabled,
  noItemsActiveState,
  closeDropdownOnClick,
  closeDropdown,
}) => {
  const titleText = typeof title === 'string' ? title : title.text;
  const ActionElem = href ? 'a' : 'button';

  function onItemClick(e) {
    e.stopPropagation();

    onClick();
    if (closeDropdownOnClick) closeDropdown();
  }

  return (
    <div
      className={classnames(
        'drui-dropdownItem',
        {
          [className]: className,
          ['drui-dropdownItem--withDescription']: description,
          ['drui-dropdownItem--active']: active,
          ['drui-dropdownItem--disabled']: disabled,
          ['drui-dropdownItem--noItemsActiveState']: noItemsActiveState,
        })
      }
      key={`drui-dropdown-item-${titleText.split(' ').join('').toLowerCase()}`}
    >
      <ActionElem
        onClick={onItemClick}
        href={href || null}
        type={!href ? 'button' : null}
        className="drui-dropdownItem__action"
        target={target || null}
        rel={target === '_blank' ? 'noopener nofollow' : null}
        disabled={ActionElem === 'button' ? disabled : null}
      >
        <div className="drui-dropdownItem__iconWrapper">
          {/* Custom icon for dropdown item */}
          {Icon &&
            <Icon className="drui-dropdownItem__icon" />
          }

          {/* No custom icon, menu item is active */}
          {!noItemsActiveState && !Icon && active &&
            <CheckIcon className="drui-dropdownItem__icon" />
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
          flex: 1 0 auto;
          max-width: 100%;
          min-width: 0;
          height: 34px;
          font-family: ${defaultTheme.font.family.primary};
          box-sizing: border-box;

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          &.drui-dropdownItem--withDescription {
            height: auto;

            .drui-dropdownItem__action {
              flex-wrap: wrap;
              padding: {
                top: 10px;
                bottom: 10px;
              };
            }

            .drui-dropdownItem__iconWrapper {
              align-items: flex-start;
              padding-top: 10px;
            }
          }
        }

        .drui-dropdownItem.drui-dropdownItem--disabled {
          .drui-dropdownItem__action {
            &:hover {
              cursor: not-allowed;
              background-color: transparent;
            }
          }

          .drui-dropdownItem__icon,
          .drui-dropdownItem__title,
          .drui-dropdownItem__titleIcon,
          .drui-dropdownItem__description {
            opacity: 0.6;
            color: ${defaultTheme.dropdown.item.disabledColor};
            fill: ${defaultTheme.dropdown.item.disabledColor};
          }

          &:hover {
            .drui-dropdownItem__icon,
            .drui-dropdownItem__title,
            .drui-dropdownItem__titleIcon,
            .drui-dropdownItem__description {
              opacity: 0.6;
            color: ${defaultTheme.dropdown.item.disabledColor};
              fill: ${defaultTheme.dropdown.item.disabledColor};
            }
          }
        }

        .drui-dropdownItem--noItemsActiveState {
          .drui-dropdownItem__action {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        .drui-dropdownItem__action {
          display: flex;
          position: relative;
          padding: 5px 46px 5px 46px;
          width: 100%;
          height: 100%;
          border: none;
          background-color: transparent;
          transition: background-color ${defaultTheme.dropdown.transitionSettings};
          text-decoration: none;
          cursor: pointer;

          &:hover {
            background-color: ${defaultTheme.dropdown.item.hoverColor};
            cursor: pointer;

            .drui-dropdownItem__title {
              color: ${defaultTheme.dropdown.item.title.hoverColor};
            }

            .drui-dropdownItem__icon {
              fill: ${defaultTheme.dropdown.item.title.hoverColor};
            }

            .drui-dropdownItem__titleIcon {
              fill: ${defaultTheme.dropdown.item.title.hoverIconFill};

              * {
                fill: inherit;
              }
            }
          }

          &:focus {
            outline: none;
            background-color: ${defaultTheme.dropdown.item.hoverColor};
          }

          &:active {
            background-color: ${defaultTheme.dropdown.item.activeColor};
          }
        }

        .drui-dropdownItem__iconWrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 20px;
          width: 20px;
          height: 100%;
        }

        .drui-dropdownItem__icon {
          fill: ${defaultTheme.dropdown.item.iconColor};
          transition: fill ${defaultTheme.dropdown.transitionSettings};

          * {
            fill: inherit;
          }
        }

        .drui-dropdownItem__title {
          flex: 0 1 auto;
          min-width: 0;
          display: flex;
          align-items: center;
          font-size: ${defaultTheme.font.size.normal};
          font-weight: ${defaultTheme.font.weight.normal};
          color: ${defaultTheme.dropdown.item.title.color};
          transition: color ${defaultTheme.dropdown.transitionSettings};

          .drui-dropdownItem__titleIcon {
            margin-left: 6px;
          }
        }

        .drui-dropdownItem__titleText {
          display: flex; // needed to elliminate browser paddings
          flex: 0 0 auto;
          min-width: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        .drui-dropdownItem__titleIcon {
          flex: 0 1 24px;
          display: block;
          fill: ${defaultTheme.dropdown.item.title.iconFill};
          transition: fill 75ms linear;

          * {
            fill: inherit;
            transition: fill 75ms linear;
          }
        }

        .drui-dropdownItem__description {
          flex: 0 0 100%;
          font-size: 12px;
          line-height: 15px;
          text-align: left;
          color: ${defaultTheme.dropdown.description.color};
        }

        .theme--dark {
          .drui-dropdownItem.drui-dropdownItem--disabled {
            .drui-dropdownItem__action {
              &:hover {
                cursor: not-allowed;
                background-color: transparent;
              }
            }

            .drui-dropdownItem__icon,
            .drui-dropdownItem__title,
            .drui-dropdownItem__titleIcon,
            .drui-dropdownItem__description {
              opacity: 0.6;
              color: ${darkTheme.dropdown.item.disabledColor};
              fill: ${darkTheme.dropdown.item.disabledColor};
            }

            &:hover {
              .drui-dropdownItem__icon,
              .drui-dropdownItem__title,
              .drui-dropdownItem__titleIcon,
              .drui-dropdownItem__description {
                opacity: 0.6;
                color: ${darkTheme.dropdown.item.disabledColor};
                fill: ${darkTheme.dropdown.item.disabledColor};
              }
            }
          }

          .drui-dropdownItem__action {
            &:hover {
              background-color: ${darkTheme.dropdown.item.hoverColor};

              .drui-dropdownItem__title {
                color: ${darkTheme.dropdown.item.title.hoverColor};
              }

              .drui-dropdownItem__icon {
                fill: ${darkTheme.dropdown.item.title.hoverColor};
              }

              .drui-dropdownItem__titleIcon {
                fill: ${darkTheme.dropdown.item.title.hoverIconFill};
              }
            }

            &:focus {
              background-color: ${darkTheme.dropdown.item.hoverColor};
            }

            &:active {
              background-color: ${darkTheme.dropdown.item.activeColor};
            }
          }

          .drui-dropdownItem__icon {
            fill: ${darkTheme.dropdown.item.iconColor};
          }

          .drui-dropdownItem__title {
            color: ${darkTheme.dropdown.item.title.color};
          }

          .drui-dropdownItem__titleIcon {
            fill: ${darkTheme.dropdown.item.title.iconFill};
          }

          .drui-dropdownItem__description {
            color: ${darkTheme.dropdown.description.color};
          }
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
  Icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
  className: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  noItemsActiveState: PropTypes.bool,
  disabled: PropTypes.bool,
  closeDropdownOnClick: PropTypes.bool,
  closeDropdown: PropTypes.func,
};

DropdownItem.defaultProps = {
  description: '',
  Icon: null,
  className: '',
  active: false,
  children: null,
  href: '',
  trarget: '',
  noItemsActiveState: false,
  disabled: false,
  onClick: () => {},
  closeDropdownOnClick: PropTypes.bool,
  closeDropdown: () => {},
};

export default DropdownItem;
