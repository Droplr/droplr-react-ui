import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from '../themes/DefaultTheme';
import darkTheme from '../themes/DarkTheme';
import { PublicIcon, PrivateIcon, ErrorIcon } from './icons';

class Input extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      passwordVisible: false,
    };

    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  componentDidMount() {
    this.setState({ passwordVisible: this.props.passwordVisible });
  }

  togglePasswordVisibility() {
    this.setState({ passwordVisible: !this.state.passwordVisible });
    this.input.focus();
  }

  render() {
    const {
      name,
      className,
      value,
      placeholder,
      label,
      sublabel,
      info,
      error,
      autoComplete,
      autoFocus,
      readOnly,
      disabled,
      onBlur,
      onFocus,
      onKeyPress,
      onChange,
      type,
      passwordVisibilityToggle,
    } = this.props;
    const { passwordVisible } = this.state;

    return (
      <div className="drui-inputContainer">
        {label && <span className="drui-inputLabel">{label}</span>}
        {sublabel && <span className="drui-inputSublabel">{sublabel}</span>}
        <div className="drui-inputIconsContainer">
          <input
            name={name}
            className={classnames('drui-input', {
              'drui-input--disabled': disabled,
              'drui-input--hasOneIcon': (type === 'password' && passwordVisibilityToggle) || error,
              'drui-input--hasTwoIcons': (type === 'password' && passwordVisibilityToggle) && error,
              'drui-input--error': error,
              'drui-input--readOnly': readOnly,
              [className]: className,
            })}
            type={type === 'password' && passwordVisible ? 'text' : type}
            value={value}
            placeholder={placeholder}
            autoComplete={autoComplete ? 'on' : 'off'}
            autoFocus={autoFocus}
            readOnly={readOnly}
            disabled={disabled}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyPress={onKeyPress}
            onChange={onChange}
            ref={(input) => { this.input = input; }}
          />
          <div className="drui-iconsContainer">
            {type === 'password' && passwordVisibilityToggle && (
                passwordVisible
                  ? <PublicIcon
                      className="drui-input__icon drui-input__passwordVisibilityIcon"
                      onClick={this.togglePasswordVisibility}
                    />
                  : <PrivateIcon
                      className="drui-input__icon drui-input__passwordVisibilityIcon"
                      onClick={this.togglePasswordVisibility}
                    />
              )
            }
            {error && <ErrorIcon className="drui-input__icon drui-input__errorIcon" />}
          </div>
        </div>
        {error && <div className="drui-inputError"><span>{error}</span></div>}
        {info && <div className="drui-inputInfo"><span>{info}</span></div>}
        <style jsx global>{`
          .drui-inputContainer {
            font-size: ${defaultTheme.font.size.normal};
            font-family: ${defaultTheme.font.family.primary};
            position: relative;
            width: 100%;

            .drui-inputLabel,
            .drui-inputSublabel,
            .drui-inputInfo,
            .drui-inputError {
              display: block;
              color: ${defaultTheme.input.label.textColor};
              font-size: ${defaultTheme.font.size.normal};
              margin-bottom: 6px;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .drui-inputSublabel {
              font-size: ${defaultTheme.font.size.small};
            }

            .drui-inputInfo,
            .drui-inputError {
              font-size: ${defaultTheme.font.size.small};
              margin-bottom: 0;
              margin-top: 6px;
            }

            .drui-inputError {
              margin-top: 0;
              color: ${defaultTheme.input.errorColor};
              font-weight: ${defaultTheme.font.weight.bold};
            }

            .drui-input {
              position: relative;
              box-sizing: border-box;
              height: 40px;
              width: 100%;
              padding: 0 12px;
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
              transition: all 0.2s ease;

              &::placeholder {
                color: ${defaultTheme.input.placeholderColor};
              }

              &:hover {
                border-color: ${defaultTheme.input.borderColorHover};
              }

              &:focus {
                color: ${defaultTheme.input.textColorFocus};
                border-color: ${defaultTheme.input.borderColorFocus};
                box-shadow: inset 0 0 0 2px ${defaultTheme.input.shadowColor};
              }
            }

            .drui-input--readOnly:hover,
            .drui-input--readOnly:focus,
            .drui-input--disabled:hover {
              border-color: ${defaultTheme.input.borderColor};
              box-shadow: none;
            }

            .drui-input--readOnly:focus {
              color: ${defaultTheme.input.textColor};
            }

            .drui-input--disabled {
              cursor: not-allowed;
            }

            .drui-input--hasOneIcon {
              padding-right: 44px;
            }

            .drui-input--hasTwoIcons {
              padding-right: 68px;
            }

            .drui-input--error {
              border-color: ${defaultTheme.input.errorColor};
            }

            .drui-input--error:hover,
            .drui-input--error:focus {
              border-color: ${defaultTheme.input.errorColor};
              box-shadow: none;
            }

            .drui-inputIconsContainer {
              position: relative;

              .drui-iconsContainer {
                position: absolute;
                top: 8px;
                right: 12px;
              }

              .drui-input__icon {
                path {
                  fill: ${defaultTheme.input.iconColor};
                }
              }

              .drui-input__passwordVisibilityIcon {
                cursor: pointer;
              }

              .drui-input__errorIcon {
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
                box-shadow: none;
              }
            }

            .drui-inputLabel,
            .drui-inputSublabel,
            .drui-inputInfo {
              color: ${darkTheme.input.label.textColor};
            }

            .drui-input--error {
              border-color: ${defaultTheme.input.errorColor};
            }

            .drui-input--error:hover,
            .drui-input--error:focus {
              border-color: ${defaultTheme.input.errorColor};
              box-shadow: none;
            }

            .drui-input--readOnly:hover,
            .drui-input--readOnly:focus,
            .drui-input--disabled:hover {
              border-color: ${darkTheme.input.borderColor};
              box-shadow: none;
            }

            .drui-input--readOnly:focus {
              color: ${darkTheme.input.textColor};
            }

            .drui-inputIconsContainer {
              .drui-input__icon {
                path {
                  fill: ${darkTheme.input.iconColor};
                }
              }

              .drui-input__errorIcon {
                path {
                  fill: ${defaultTheme.input.errorColor};
                }
              }
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
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  passwordVisibilityToggle: PropTypes.bool,
  passwordVisible: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: '',
  type: 'text',
  value: '',
  placeholder: '',
  label: '',
  sublabel: '',
  info: '',
  error: '',
  autoComplete: true,
  autoFocus: false,
  readOnly: false,
  disabled: false,
  passwordVisibilityToggle: false,
  passwordVisible: false,
  onBlur() {},
  onFocus() {},
  onKeyPress() {},
  onChange() {},
};

export default Input;
