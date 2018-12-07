import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from '../themes/DefaultTheme';
import darkTheme from '../themes/DarkTheme';
import { ErrorIcon } from './icons';

class Input extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      className,
      type,
      value,
      placeholder,
      label,
      sublabel,
      info,
      error,
      autoFocus,
      readOnly,
      disabled,
      onFocus,
      onKeyPress,
      onChange,
    } = this.props;

    return (
      <div className="drui-inputContainer">
        {label && <span className="drui-input-label">{label}</span>}
        {sublabel && <span className="drui-input-sublabel">{sublabel}</span>}
        <div className="drui-inputIconContainer">
          <input
            name={name}
            className={classnames('drui-input', {
              'drui-input--disabled': disabled,
              'drui-input--error': error,
              'drui-input--readOnly': readOnly,
              [className]: className,
            })}
            type={type}
            value={value || undefined}
            placeholder={placeholder}
            autoFocus={autoFocus}
            readOnly={readOnly}
            disabled={disabled}
            onFocus={onFocus}
            onKeyPress={onKeyPress}
            onChange={onChange}
          />
          {error && <ErrorIcon className="drui-input-error__errorIcon" />}
        </div>
        {info && !error && <div className="drui-input-info"><span>{info}</span></div>}
        {error && <div className="drui-input-error"><span>{error}</span></div>}
        <style jsx global>{`
          .drui-inputContainer {
            font-size: ${defaultTheme.font.size.normal};
            font-weight: ${defaultTheme.font.weight.normal};
            font-family: ${defaultTheme.font.family.primary};
            position: relative;
            width: 100%;

            .drui-input-label,
            .drui-input-sublabel,
            .drui-input-info,
            .drui-input-error {
              display: block;
              font-size: ${defaultTheme.font.size.normal};
              font-weight: ${defaultTheme.font.weight.bold};
              margin-bottom: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .drui-input-sublabel {
              font-size: ${defaultTheme.font.size.small};
              font-weight: ${defaultTheme.font.weight.normal};
            }

            .drui-input-info,
            .drui-input-error {
              font-size: ${defaultTheme.font.size.small};
              margin-bottom: 0;
              margin-top: 10px;
            }

            .drui-input-error {
              color: ${defaultTheme.input.errorColor};
            }

            .drui-input {
              position: relative;
              box-sizing: border-box;
              height: 44px;
              width: 100%;
              padding: 0 20px;
              background-color: ${defaultTheme.input.backgroundColor};
              color: ${defaultTheme.input.textColor};
              border-width: 1px;
              border-style: solid;
              border-color: ${defaultTheme.input.borderColor};
              border-radius: 4px;
              outline: none;
              font-size: inherit;
              font-weight: inherit;
              font-family: inherit;

              &::placeholder {
                color: ${defaultTheme.input.placeholderColor};
              }

              &:hover {
                border-color: ${defaultTheme.input.borderColorHover};
              }

              &:focus {
                color: ${defaultTheme.input.textColorFocus};
                border-color: ${defaultTheme.input.borderColorFocus};
              }
            }

            .drui-input--readOnly:focus {
              border-color: ${defaultTheme.input.borderColor};
            }

            .drui-input--disabled {
              cursor: not-allowed;
            }

            .drui-input--error {
              padding-right: 54px;
              border-color: ${defaultTheme.input.errorColor};
            }

            .drui-inputIconContainer {
              position: relative;

              .drui-input-error__errorIcon {
                position: absolute;
                top: 10px;
                right: 16px;
  
                path {
                  fill: ${defaultTheme.input.errorColor};
                }
              }
            }
          }

          .theme--dark {
            .drui-input {
              color: ${darkTheme.input.textColor};
              background-color: ${darkTheme.input.backgroundColor};
              border-color: ${darkTheme.input.borderColor};

              &::placeholder {
                color: ${darkTheme.input.placeholderColor};
              }

              &:hover {
                border-color: ${darkTheme.input.borderColorHover};
              }

              &:focus {
                color: ${darkTheme.input.textColorFocus};
                border-color: ${darkTheme.input.borderColorFocus};
              }
            }

            .drui-input-label,
            .drui-input-sublabel,
            .drui-input-info {
              color: ${darkTheme.input.label.textColor};
            }

            .drui-input--error {
              padding-right: 54px;
              border-color: ${defaultTheme.input.errorColor};
            }

            .drui-input--readOnly:focus {
              border-color: ${darkTheme.input.borderColor};
            }
          }
        `}</style>
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  sublabel: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  autoFocus: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: '',
  type: '',
  value: '',
  placeholder: '',
  label: '',
  sublabel: '',
  info: '',
  error: '',
  autoFocus: false,
  readOnly: false,
  disabled: false,
  onFocus() {},
  onKeyPress() {},
  onChange() {},
};

export default Input;
