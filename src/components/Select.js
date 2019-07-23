import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import DropdownItem from './DropdownItem';
import DropdownWithToggler from './DropdownWithToggler';
import defaultTheme from '../themes/DefaultTheme';
import darkTheme from '../themes/DarkTheme';

const Select = ({
  options,
  currentOption,
  labelContent,
  setOption,
  error,
}) => (
  <div className="drui-selectContainer">
    {labelContent && <span className="drui-selectLabel">{labelContent}</span>}
    {error
      ? <div className="drui-selectError">{error}</div>
      : (
        <DropdownWithToggler
          Toggler={(
            <Button
              maxWidth
              type="secondary"
              dropdown
            >
              {currentOption.title}
            </Button>
          )}
          closeOnItemClick
          showItemStatus
        >
          {options.map(option => (
            <DropdownItem
              key={option.value}
              title={option.title}
              active={currentOption.value === option.value}
              onClick={() => setOption(option)}
            />
          ))}
        </DropdownWithToggler>
      )
    }
    <style jsx global>{`
      .drui-selectContainer {
        margin-bottom: 20px;

        .drui-dropdown__wrapper {
          width: 100%;

          .drui-dropdown {
            width: 100%;
          }
        }

        .drui-button {
          height: 34px;
          color: ${defaultTheme.dropdown.buttonTextColor};

          .drui-button__content {
            justify-content: flex-start;
          }
        }

        .drui-dropdown__arrow {
          display: none;
        }

        .drui-selectLabel {
          display: block;
          font-size: 12px;
          color: ${defaultTheme.dropdown.headerTextColor};
          margin-bottom: 5px;
        }

        .drui-selectError {
          padding: 8px;
          border-radius: 4px;
          background-color: ${defaultTheme.dropdown.borderColor};
          text-align: center;
        }
      }

      .theme--dark {
        .drui-selectContainer {
          .drui-button {
            color: ${darkTheme.dropdown.buttonTextColor};
          }

          .drui-selectLabel {
            color: ${darkTheme.dropdown.headerTextColor};
          }

          .drui-selectError {
            background: ${darkTheme.button.primary.backgroundColor};
            color: ${darkTheme.dropdown.buttonTextColor};
          }
        }
      }
    `}</style>
  </div>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentOption: PropTypes.shape(),
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  labelContent: PropTypes.string,
  setOption: PropTypes.func.isRequired,
};

Select.defaultProps = {
  error: undefined,
  labelContent: undefined,
  currentOption: undefined,
};

export default Select;
