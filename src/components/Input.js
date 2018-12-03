import React from 'react';
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
      className,
      type,
      disabled,
      placeholder,
      onChange,
      autoFocus,
      onFocus,
      onKeyPress,
      readOnly,
      value,
      name,
      label,
      sublabel,
      info,
      error,
    } = this.props;

    return (
      <div className="drui-inputContainer">
        {label && <span className="drui-input-label">{label}</span>}
        {sublabel && <span className="drui-input-sublabel">{sublabel}</span>}
        <div className="drui-inputIconContainer">
          <input
            className={classnames('drui-input', {
              'drui-input--disabled': disabled,
              'drui-input--error': error,
              'drui-input--readOnly': readOnly,
              [className]: className,
            })}
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            autoFocus={autoFocus}
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
              margin-bottom: 8px;
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
              margin-top: 8px;
            }

            .drui-input-error {
              color: #F94C4C;
            }

            .drui-input {
              position: relative;
              box-sizing: border-box;
              height: 40px;
              width: 100%;
              padding: 0 20px;
              background-color: ${defaultTheme.input.backgroundColor};
              color: ${defaultTheme.input.color};
              border-width: 1px;
              border-style: solid;
              border-color: #C8CFD9;
              border-radius: 4px;
              outline: none;
              font-size: inherit;
              font-weight: inherit;
              font-family: inherit;

              &:focus {
                border-color: ${defaultTheme.input.borderColorFocus};
              }
            }

            .drui-input--readOnly:focus {
              border-color: #C8CFD9;
            }

            .drui-input--disabled {
              cursor: not-allowed;
            }

            .drui-input--error {
              padding-right: 54px;
              border-color: #F94C4C;
            }

            .drui-inputIconContainer {
              position: relative;

              .drui-input-error__errorIcon {
                position: absolute;
                top: 8px;
                right: 16px;
  
                path {
                  fill: #F94C4C;
                }
              }
            }
          }

          .theme--dark {
            .drui-input {
              color: #878891;
              background-color: #202020;
              border-color: ${darkTheme.input.borderColor};

              &:focus {
                border-color: #878891;
              }
            }

            .drui-input-label,
            .drui-input-sublabel,
            .drui-input-info {
              color: ${darkTheme.input.label.color};
            }

            .drui-input--error {
              padding-right: 54px;
              border-color: #F94C4C;
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

export default Input;
