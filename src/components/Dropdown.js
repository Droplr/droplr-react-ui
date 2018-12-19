import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import defaultTheme from '../themes/DefaultTheme';
import darkTheme from '../themes/DarkTheme';

const positionEnums = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  center: 'center',
}

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { position: props.position }
  }

  componentDidUpdate() {
    if (this.props.isActive) {
      this.props.onRef(this.dropdownRef);
    }
  }

  render() {
    const {
      header,
      isActive,
      className,
      children,
      closeOnItemClick,
      close,
      showItemStatus,
      arrowStyles,
      positionX,
      positionY,
    } = this.props;

    if (!isActive || !children) return null;

    return (
      <div
        className={classnames(
          'drui-dropdown',
          {
            [className]: className,
            [`drui-dropdown--${positionX}`]: positionX,
            [`drui-dropdown--${positionY}`]: positionY,
          }
        )}
        ref={(node) => { this.dropdownRef = node; }}
      >
        <span
          className="drui-dropdown__arrow"
          style={arrowStyles}
        />
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
                  {React.cloneElement(
                    child,
                    {
                      ...child.props,
                      showItemStatus,
                      closeOnItemClick,
                      closeDropdown: close,
                    })}
                </li>
              )
            )}
          </ul>
        </div>

        <style jsx global>{`
          .drui-dropdown {
            display: table;
            position: relative;
            z-index: 9;
            font-family: ${defaultTheme.font.family.primary};
            padding: 12px 0;
            margin-top: 4px;
            width: auto;
            max-width: 320px;
            box-sizing: border-box;
            border-radius: 4px;
            background: ${defaultTheme.dropdown.backgroundColor};
            box-shadow: 0 2px 12px -1px ${defaultTheme.dropdown.shadowColor};

            *,
            *::before,
            *::after {
              box-sizing: inherit;
            }
          }

          .drui-dropdown--top {
            top: auto;
            bottom: 100%;
            margin: {
              top: auto;
              bottom: 4px;
            }

            .drui-dropdown__arrow {
              top: auto;
              bottom: -4px;
              transform: translate(-50%, -20%) rotate(45deg);
              box-shadow: 2px 2px 1px -2px ${defaultTheme.dropdown.shadowColor};
            }

            &.drui-dropdown--right {
              .drui-dropdown__arrow {
                transform: translate(50%, -20%) rotate(45deg);
              }
            }
          }

          .drui-dropdown--bottom {
            top: 100%;
            bottom: auto;
            margin: {
              top: 4px;
              bottom: auto;
            }

            &.drui-dropdown--right {
              .drui-dropdown__arrow {
                transform: translate(50%, 20%) rotate(45deg);
              }
            }
          }

          .drui-dropdown--right {
            right: 0;
            left: auto;
            transform: translate(0, 0);
          }

          .drui-dropdown--left {
            right: auto;
            left: 0;
            transform: translate(0, 0);
          }

          .drui-dropdown--center {
            right: auto;
            left: 50%;
            transform: translate(-50%, 0);
          }

          .drui-dropdown__inner {
            display: block;
            position: relative;
            z-index: 1;
            flex-direction: column;
            width: auto;
            height: auto;
            max-height: 420px;
            overflow-y: auto;
            padding: 0;
            border-radius: 4px;
          }

          .drui-dropdown__arrow {
            display: block;
            position: absolute;
            z-index: 0;
            top: -4px;
            left: 50%;
            transform: translate(-50%, 20%) rotate(45deg);
            width: 10px;
            height: 10px;
            background: ${defaultTheme.dropdown.backgroundColor};
            box-shadow: -2px -2px 1px -2px ${defaultTheme.dropdown.shadowColor};
          }

          .drui-dropdown__header {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            align-content: center;
            padding: 8px 0;
            margin: 0 20px 10px;
            border-bottom: 1px solid ${defaultTheme.dropdown.headerBorderColor};
          }

          .drui-dropdown__title {
            font-size: ${defaultTheme.font.size.small};
            text-transform: uppercase;
            color: ${defaultTheme.dropdown.headerTextColor};
            font-weight: 600;
          }

          .drui-dropdown__itemsList {
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0;
            margin: 0;
            height: 100%;
            overflow-y: auto;
          }

          .drui-dropdown__listItemWrapper {
            display: flex;
            padding: 0;
            margin: 0;
          }

          .theme--dark {
            .drui-dropdown {
              background: ${darkTheme.dropdown.backgroundColor};
                box-shadow: 0 2px 12px -1px  ${darkTheme.dropdown.shadowColor};
            }

            .drui-dropdown--top {
              .drui-dropdown__arrow {
                box-shadow: 2px 2px 1px -2px ${darkTheme.dropdown.shadowColor};
              }
            }

            .drui-dropdown__inner {
              background-color: ${darkTheme.dropdown.backgroundColor};
            }

            .drui-dropdown__arrow {
              background: ${darkTheme.dropdown.backgroundColor};
              box-shadow: -2px -2px 1px -2px ${darkTheme.dropdown.shadowColor};
            }

            .drui-dropdown__header {
              border-bottom: 1px solid ${darkTheme.dropdown.headerBorderColor};
            }

            .drui-dropdown__title {
              color: ${darkTheme.dropdown.headerTextColor};
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
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]).isRequired,
  header: PropTypes.string,
  className: PropTypes.string,
  showItemStatus: PropTypes.bool,
  close: PropTypes.func,
  closeOnItemClick: PropTypes.bool,
  position: PropTypes.arrayOf(
    PropTypes.oneOf(Object.keys(positionEnums))
  ),
  arrowStyles: PropTypes.shape(),
  onRef: PropTypes.func,
};

Dropdown.defaultProps = {
  header: '',
  className: '',
  showItemStatus: false,
  closeOnItemClick: false,
  positionY: positionEnums.bottom,
  positionX: positionEnums.center,
  arrowStyles: {},
  close() {},
  onRef() {},
}

export default Dropdown;
