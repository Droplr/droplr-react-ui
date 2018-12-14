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

    this.state = { dropdownPosition: props.dropdownPosition }
  }

  static getDerivedStateFromProps(props, state) {
    if (!props.dropdownPosition.length) return null;
    return {
      ...state,
      dropdownPosition: props.dropdownPosition.map(position => `drui-dropdown--${position}`),
    }
  }

  componentDidUpdate() {
    if (this.props.isActive) {
      this.props.onRef(this.myRef);
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
      dropdownArrowStyles
    } = this.props;

    if (!isActive || !children) return null;

    return (
      <div
        className={classnames(
          'drui-dropdown',
          ...this.state.dropdownPosition,
          { [className]: className }
        )}
        ref={(node) => { this.myRef = node; }}
      >
        <div
          className="drui-dropdown__inner"
          data-arrow-position="left: 50%"
        >
          <span
            className="drui-dropdown__arrow"
            style={dropdownArrowStyles}
          />
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

          .drui-dropdown--top
          .drui-dropdown--bottom,
          .drui-dropdown--right,
          .drui-dropdown--left,
          .drui-dropdown--center {
            position: absolute;
          }

          .drui-dropdown--top {
            top: auto;
            bottom: 100%;
            padding: {
              top: 0;
              bottom: 4px;
            };

            .drui-dropdown__arrow {
              top: auto;
              bottom: -4px;
              box-shadow: -2px 2px 1px -2px ${defaultTheme.dropdown.shadowColor};
            }
          }

          .drui-dropdown--bottom {
            top: 100%;
            bottom: auto;
            padding: {
              top: 4px;
              bottom: 0;
            };
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
            display: flex;
            position: relative;
            z-index: 1;
            flex-direction: column;
            width: auto;
            height: auto;
            padding: 12px 0;
            border-radius: 4px;
            background-color: ${defaultTheme.dropdown.backgroundColor};

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

          .drui-dropdown__arrow {
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
  dropdownPosition: PropTypes.arrayOf(
    PropTypes.oneOf(Object.keys(positionEnums))
  ),
  dropdownArrowStyles: PropTypes.shape(),
  onRef: PropTypes.func,
};

Dropdown.defaultProps = {
  header: '',
  className: '',
  showItemStatus: false,
  closeOnItemClick: false,
  dropdownPosition: [positionEnums.bottom, positionEnums.center],
  dropdownArrowStyles: {},
  close() {},
  onRef() {},
}

export default Dropdown;
