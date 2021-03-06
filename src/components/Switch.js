import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from '../themes/DefaultTheme';
import darkTheme from '../themes/DarkTheme';

const Switch = ({
  checked,
  disabled,
  className,
  labelContent,
  labelPosition,
  onChange,
}) => (
  <label
    className={classnames('switch', {
      [`switch--${labelPosition}`]: labelContent,
      ['switch--disabled']: disabled,
      [className]: className,
    })}
  >
    {labelContent && <span className="switch__label">{labelContent}</span>}
    <input
      className="switch__input"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
    <div className="switch__button" />
    <style jsx global>{`
      .switch {
        font-size: ${defaultTheme.font.size.normal};
        font-family: ${defaultTheme.font.family.primary};
        width: 100%;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        user-select: none;
      }

      .switch--disabled {
        cursor: default;
      }

      .switch--right {
        flex-direction: row-reverse;
      }

      .switch--top {
        width: max-content;
        flex-direction: column;

        .switch__label {
          margin-bottom: 6px;
        }
      }

      .switch--bottom {
        width: max-content;
        flex-direction: column-reverse;

        .switch__label {
          margin-top: 6px;
        }
      }

      .switch__button {
        position: relative;
        width: 40px;
        height: 20px;
        border-radius: 22px;
        background: ${defaultTheme.switch.backgroundColor};
        border: 1px solid ${defaultTheme.switch.borderColor};
        cursor: inherit;
        transition: all 300ms ease;
        box-sizing: border-box;

        &::after {
          content: '';
          position: absolute;
          display: block;
          width: 16px;
          height: 16px;
          top: 1px;
          left: 1px;
          background-color: ${defaultTheme.switch.backgroundColorAfter};
          border-radius: 50%;
          box-shadow: 0 2px 4px 0 ${defaultTheme.switch.shadowColor};
          transition-property: transform, box-shadow;
          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.100);
          transition-duration: 300ms;
        }
      }

      .switch__input {
        display: none;

        &:checked ~ .switch__button {
          border-color: ${defaultTheme.switch.borderColorChecked};
          background: ${defaultTheme.switch.backgroundColorChecked};

          &::after {
            transform: translate3d(20px, 0, 0);
          }
        }
      }

      .switch__input:disabled ~ .switch__button {
        background-color: ${defaultTheme.switch.backgroundColorDisabled};

        &::after {
          box-shadow: none;
        }
      }

      .theme--dark {
        .switch {
          color: ${darkTheme.switch.textColor};
        }

        .switch__button {
          background: ${darkTheme.switch.backgroundColor};
          border-color: ${darkTheme.switch.borderColor};

          &::after {
            background: ${darkTheme.switch.backgroundColorAfter};
          }
        }

        .switch__input {
          &:checked ~ .switch__button {
            border-color: ${darkTheme.switch.borderColorChecked};
            background: ${darkTheme.switch.backgroundColorChecked};
          }
        }

        .switch__input:disabled ~ .switch__button {
          background: ${darkTheme.switch.backgroundColor};

          &::after {
            background-color: ${darkTheme.switch.backgroundColorAfterDisabled};
            box-shadow: none;
          }
        }
      }
  `}</style>
  </label>
);

Switch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  labelContent: PropTypes.string,
  labelPosition: PropTypes.string,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  checked: false,
  disabled: false,
  className: '',
  labelContent: '',
  labelPosition: 'left',
  onChange() {},
};

export default Switch;
