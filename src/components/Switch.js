import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from '../themes/DefaultTheme';

const Switch = ({
  label,
  checked,
  disabled,
  onChange,
}) => (
  <label className="switch-wrapper">
    {label && <span className="switch-label">{label}</span>}
    <input
      className="switch-input"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
    <div className="switch-button" />
    <style jsx global>{`
      .switch-wrapper {
        font-size: ${defaultTheme.font.size.normal};
        font-family: ${defaultTheme.font.family.primary};
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        user-select: none;
      }

      .switch-button {
        position: relative;
        width: 40px;
        height: 20px;
        border-radius: 22px;
        background: ${defaultTheme.switch.backgroundColor};
        border: 1px solid ${defaultTheme.switch.borderColor};
        transition: 0.2s ease all;
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

      .switch-input {
        display: none;

        &:checked ~ .switch-button {
          border-color: ${defaultTheme.switch.borderColorChecked};
          background: ${defaultTheme.switch.backgroundColorChecked};

          &::after {
            transform: translate3d(20px, 0, 0);
          }
        }
      }

      .switch-input:disabled ~ .switch-button {
        background-color: ${defaultTheme.switch.backgroundColorDisabled};

        &::after {
          box-shadow: none;
        }
      }
  `}</style>
  </label>
);

Switch.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  label: '',
  checked: false,
  disabled: false,
  onChange() {},
};

export default Switch;