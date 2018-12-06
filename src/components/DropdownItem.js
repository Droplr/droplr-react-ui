import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { CheckIcon } from './icons';

import defaultTheme from '../themes/DefaultTheme';
import darkTheme from '../themes/DarkTheme';

const DropdownItem = ({
  title,
  TitleIcon,
  description,
  Icon,
  className,
  active,
  onClick,
  href,
  target,
  disabled,
  showItemStatus,
}) => {
  const ActionElem = href ? 'a' : 'button';

  return (
    <div
      className={classnames(
        'drui-dropdownItem',
        {
          [className]: className,
          ['drui-dropdownItem--withDescription']: description,
          ['drui-dropdownItem--active']: active,
          ['drui-dropdownItem--disabled']: disabled,
          ['drui-dropdownItem--showItemStatus']: showItemStatus,
        })
      }
      onClick={onClick}
    >
      <ActionElem
        href={href || null}
        type={!href ? 'button' : null}
        className="drui-dropdownItem__action"
        target={target || null}
        rel={target === '_blank' ? 'noopener nofollow' : null}
        disabled={disabled}
      >
        <div className="drui-dropdownItem__iconWrapper">
          {/* Custom icon for dropdown item */}
          {Icon &&
            <Icon className="drui-dropdownItem__icon" />
          }

          {/* No custom icon, menu item is active */}
          {!showItemStatus && !Icon && active &&
            <CheckIcon className="drui-dropdownItem__icon" />
          }
        </div>

        {/* Item title */}
        <div className="drui-dropdownItem__title">
          <span className="drui-dropdownItem__titleText">{title}</span>

          {TitleIcon &&
            <TitleIcon className="drui-dropdownItem__titleIcon" />
          }
        </div>

        {/* Item description */}
        {description &&
          <span className="drui-dropdownItem__description">{description}</span>
        }
      </ActionElem>

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
            color: ${defaultTheme.dropdownItem.disabledColor};
            fill: ${defaultTheme.dropdownItem.disabledColor};
          }

          &:hover {
            .drui-dropdownItem__icon,
            .drui-dropdownItem__title,
            .drui-dropdownItem__titleIcon,
            .drui-dropdownItem__description {
              opacity: 0.6;
            color: ${defaultTheme.dropdownItem.disabledColor};
              fill: ${defaultTheme.dropdownItem.disabledColor};
            }
          }
        }

        .drui-dropdownItem--showItemStatus {
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
            background-color: ${defaultTheme.dropdownItem.backgoundColorHover};
            cursor: pointer;

            .drui-dropdownItem__title {
              color: ${defaultTheme.dropdownItem.title.textColorHover};
            }

            .drui-dropdownItem__icon {
              fill: ${defaultTheme.dropdownItem.title.textColorHover};
            }

            .drui-dropdownItem__titleIcon {
              fill: ${defaultTheme.dropdownItem.title.iconFillHover};

              * {
                fill: inherit;
              }
            }
          }

          &:focus {
            outline: none;
            background-color: ${defaultTheme.dropdownItem.backgoundColorHover};
          }

          &:active {
            background-color: ${defaultTheme.dropdownItem.backgoundColorActive};
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
          fill: ${defaultTheme.dropdownItem.iconColor};
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
          color: ${defaultTheme.dropdownItem.title.textColor};
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
          fill: ${defaultTheme.dropdownItem.title.iconFill};
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
          color: ${defaultTheme.dropdownItem.description.color};
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
              color: ${darkTheme.dropdownItem.disabledColor};
              fill: ${darkTheme.dropdownItem.disabledColor};
            }

            &:hover {
              .drui-dropdownItem__icon,
              .drui-dropdownItem__title,
              .drui-dropdownItem__titleIcon,
              .drui-dropdownItem__description {
                opacity: 0.6;
                color: ${darkTheme.dropdownItem.disabledColor};
                fill: ${darkTheme.dropdownItem.disabledColor};
              }
            }
          }

          .drui-dropdownItem__action {
            &:hover {
              background-color: ${darkTheme.dropdownItem.backgoundColorHover};

              .drui-dropdownItem__title {
                color: ${darkTheme.dropdownItem.title.textColorHover};
              }

              .drui-dropdownItem__icon {
                fill: ${darkTheme.dropdownItem.title.textColorHover};
              }

              .drui-dropdownItem__titleIcon {
                fill: ${darkTheme.dropdownItem.title.iconFillHover};
              }
            }

            &:focus {
              background-color: ${darkTheme.dropdownItem.backgoundColorHover};
            }

            &:active {
              background-color: ${darkTheme.dropdownItem.backgoundColorActive};
            }
          }

          .drui-dropdownItem__icon {
            fill: ${darkTheme.dropdownItem.iconColor};
          }

          .drui-dropdownItem__title {
            color: ${darkTheme.dropdownItem.title.textColor};
          }

          .drui-dropdownItem__titleIcon {
            fill: ${darkTheme.dropdownItem.title.iconFill};
          }

          .drui-dropdownItem__description {
            color: ${darkTheme.dropdownItem.description.color};
          }
        }
      `}</style>
    </div>
  );
};

DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
  TitleIcon: PropTypes.func,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  Icon: PropTypes.func,
  className: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  showItemStatus: PropTypes.bool,
  disabled: PropTypes.bool,
};

DropdownItem.defaultProps = {
  description: '',
  Icon: null,
  TitleIcon: null,
  className: '',
  active: false,
  children: null,
  href: '',
  trarget: '',
  showItemStatus: false,
  disabled: false,
  onClick() {},
};

export default DropdownItem;
