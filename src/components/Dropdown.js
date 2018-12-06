import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import defaultTheme from '../themes/DefaultTheme';
import darkTheme from '../themes/DarkTheme';

class Dropdown extends React.PureComponent {
  render() {
    const {
      header,
      isActive,
      className,
      children,
      showItemStatus,
    } = this.props;

    if (!isActive || !children) return null;

    return (
      <div className={classnames('drui-dropdown', { [className]: className })}
      >

        <div className="drui-dropdown__inner">
          {header &&
            <div className="drui-dropdown__header">
              <span className="drui-dropdown__title">{header}</span>
            </div>
          }

          <ul className="drui-dropdown__itemsList">
            {React.Children.map(
              children,
              child => (
                <li className="drui-dropdown__listItemWrapper">
                  {React.cloneElement(child, { ...child.props, showItemStatus })}
                </li>
              )
            )}
          </ul>
        </div>

        <style jsx global>{`
          .drui-dropdown {
            display: table;
            position: relative;
            font-family: ${defaultTheme.font.family.primary};
            padding: 4px 0 0;
            width: auto;
            max-width: 320px;
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
            border-bottom: 1px solid ${defaultTheme.dropdown.headerBorderColor};
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

          .drui-dropdown__listItemWrapper {
            display: flex;
            padding: 0;
            margin: 0;
          }

          .theme--dark {
            .drui-dropdown__inner {
              background-color: ${darkTheme.dropdown.backgroundColor};

              &::before {
                background: ${darkTheme.dropdown.backgroundColor};
                box-shadow: -2px -2px 1px -2px ${darkTheme.dropdown.shadowColor};
              }

              &::after {
                box-shadow: 0 2px 12px -1px  ${darkTheme.dropdown.shadowColor};
              }
            }

            .drui-dropdown__header {
              border-bottom: 1px solid ${darkTheme.dropdown.headerBorderColor};
            }

            .drui-dropdown__title {
              color: ${darkTheme.dropdown.titleColor};
            }
          }
        `}</style>
      </div>
    );
  }
}

Dropdown.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  header: PropTypes.string,
  className: PropTypes.string,
  showItemStatus: PropTypes.bool,
};

Dropdown.defaultProps = {
  header: '',
  className: '',
  showItemStatus: false,
}

export default Dropdown;
