import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from '../themes/DefaultTheme';
import darkTheme from '../themes/DarkTheme';
import { DownIcon } from './icons';
import Loader from './Loader';

class Button extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      type,
      stage,
      Icon,
      onClick,
      className,
      disabled,
      loading,
      maxWidth,
      dropdown,
      buttonType,
    } = this.props;

    return (
      <button
        className={classnames('drui-button', {
          [`drui-button--${type}`]: type,
          [`drui-button--${stage}`]: stage,
          'drui-button--maxWidth': maxWidth,
          'drui-button--withText': children,
          'drui-button--withIcon': Icon,
          'drui-button--withTextAndIcon': children && Icon,
          'drui-button--disabled': disabled,
          'drui-button--loading': loading,
          'drui-button--dropdown': dropdown,
          [className]: className,
        })}
        onClick={onClick}
        type={buttonType}
        disabled={disabled || loading}
      >
        <>
          <div className="drui-button__content">
            {Icon && <Icon className="drui-button__icon" />}
            {children}
          </div>
          {dropdown &&
            <DownIcon className="drui-button__dropdownIcon" />
          }
          {loading && <Loader />}
        </>
        <style jsx global>{`
          .drui-button {
            position: relative;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            width: auto;
            height: 40px;
            padding: 0 12px;
            border-radius: 4px;
            background: ${defaultTheme.button.primary.backgroundColor};
            color: ${defaultTheme.button.primary.textColor};
            border: none;
            outline: none;
            font-size: ${defaultTheme.font.size.normal};
            font-weight: ${defaultTheme.font.weight.bold};
            font-family: ${defaultTheme.font.family.primary};
            cursor: pointer;

            *,
            *::before,
            *::after {
              box-sizing: inherit;
            }

            &:hover {
              background: ${defaultTheme.button.primary.backgroundColorHover};
            }

            &:active {
              background: ${defaultTheme.button.primary.backgroundColorActive};
            }

            .drui-loader {
              border-color: ${defaultTheme.button.primary.loaderColor};
            }
          }

          .drui-button__icon {
            width: 24px;
            height: 24px;

            path {
              fill: ${defaultTheme.button.primary.iconColor};
            }
          }

          .drui-button--withTextAndIcon {
            min-width: 124px;

            .drui-button__icon {
              margin-right: 12px;
            }
          }

          .drui-button__content {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            flex: 1;
          }

          .drui-button__dropdownIcon {
            width: 24px;
            height: 24px;

            path {
              fill: ${defaultTheme.button.primary.iconColor};
            }
          }

          .drui-button--withText {
            min-width: 124px;

            .drui-button__dropdownIcon {
              margin-left: 8px;
            }
          }

          .drui-button--withText, .drui-button--withIcon {
            padding: 0 16px;
          }

          .drui-button--maxWidth {
            width: 100%;
          }

          .drui-button--disabled,
          .drui-button--disabled:hover {
            background: ${defaultTheme.button.primary.backgroundColorDisabled};
            box-shadow: none;
            cursor: not-allowed;
            border: none;
          }

          .drui-button--loading,
          .drui-button--loading:hover {
            background: ${defaultTheme.button.primary.backgroundColor};

            .drui-button__content {
              z-index: -1;
            }
          }

          .drui-button--promo {
            background: ${defaultTheme.button.primary.promo.backgroundColor};

            &:hover {
              background: ${defaultTheme.button.primary.promo.backgroundColorHover};
            }

            &:active {
              background: ${defaultTheme.button.primary.promo.backgroundColorActive};
            }
          }

          .drui-button--promo.drui-button--disabled {
            background: ${defaultTheme.button.primary.promo.backgroundColorDisabled};
            color: ${defaultTheme.button.primary.promo.textColorDisabled};
          }

          .drui-button--promo.drui-button--loading {
            background: ${defaultTheme.button.primary.promo.backgroundColor};

            .drui-button__content {
              z-index: -1;
            }
          }

          .drui-button--danger {
            background: ${defaultTheme.button.primary.danger.backgroundColor};

            &:hover {
              background: ${defaultTheme.button.primary.danger.backgroundColorHover};
            }

            &:active {
              background: ${defaultTheme.button.primary.danger.backgroundColorActive};
            }
          }

          .drui-button--danger.drui-button--disabled {
            background: ${defaultTheme.button.primary.danger.backgroundColorDisabled};
            color: ${defaultTheme.button.primary.danger.textColorDisabled};
          }

          .drui-button--danger.drui-button--loading {
            background: ${defaultTheme.button.primary.danger.backgroundColor};

            .drui-button__content {
              z-index: -1;
            }
          }

          .drui-button--secondary {
            background: ${defaultTheme.button.secondary.backgroundColor};
            border: 1px solid ${defaultTheme.button.secondary.borderColor};
            font-weight: ${defaultTheme.font.weight.normal};
            color: ${defaultTheme.button.secondary.textColor};
            box-shadow: none;

            &:hover {
              background: ${defaultTheme.button.secondary.backgroundColorHover};
              border: 1px solid ${defaultTheme.button.secondary.borderColorHover};
            }

            &:active {
              background: ${defaultTheme.button.secondary.backgroundColorActive};
            }

            .drui-loader {
              border-color: ${defaultTheme.button.secondary.loaderColor};
            }

            .drui-button__icon {
              path {
                fill: ${defaultTheme.button.secondary.iconColor};
              }
            }

            .drui-button__dropdownIcon {
              path {
                fill: ${defaultTheme.button.secondary.iconColor};
              }
            }

            &.drui-button--disabled,
            &.drui-button--disabled:hover {
              background: ${defaultTheme.button.secondary.backgroundColorDisabled};
              border: 1px solid ${defaultTheme.button.secondary.borderColor};
              color: ${defaultTheme.button.secondary.textColorDisabled};
              box-shadow: none;
              cursor: not-allowed;
            }

            &.drui-button--loading,
            &.drui-button--loading:hover {
              background: ${defaultTheme.button.secondary.backgroundColor};
              border: 1px solid ${defaultTheme.button.secondary.borderColor};
            }

            &.drui-button--danger {
              background: none;
              border: 1px solid ${defaultTheme.button.secondary.danger.borderColor};
              color: ${defaultTheme.button.secondary.danger.textColor};

              .drui-button__icon {
                path {
                  fill: ${darkTheme.button.secondary.danger.borderColor};
                }
              }

              &:hover {
                border-color: ${defaultTheme.button.secondary.danger.borderColorHover};
                color: ${defaultTheme.button.secondary.danger.textColorHover};

                .drui-button__icon {
                  path {
                    fill: ${darkTheme.button.secondary.danger.borderColorHover};
                  }
                }
              }

              &:active {
                border-color: ${defaultTheme.button.secondary.danger.borderColorActive};
                color: ${defaultTheme.button.secondary.danger.textColorActive};

                .drui-button__icon {
                  path {
                    fill: ${darkTheme.button.secondary.danger.borderColorActive};
                  }
                }
              }
            }

            &.drui-button--danger.drui-button--disabled {
              color: ${defaultTheme.button.secondary.danger.textColor};
              border-color: ${defaultTheme.button.secondary.danger.borderColorDisabled};
              opacity: 0.3;
            }

            &.drui-button--danger.drui-button--loading {
              background: none;

              .drui-loader {
                border-color: ${defaultTheme.button.secondary.danger.borderColor};
              }

              .drui-button__content {
                z-index: -1;
              }
            }
          }

          .theme--dark {
            .drui-button {
              background: ${darkTheme.button.primary.backgroundColor};
              box-shadow: none;

              &:hover {
                background: ${darkTheme.button.primary.backgroundColorHover};
              }

              &:active {
                background: ${darkTheme.button.primary.backgroundColorActive};
              }

              .drui-loader {
                border-color: ${darkTheme.button.primary.loaderColor};
              }
            }

            .drui-button--disabled,
            .drui-button--disabled:hover {
              background: ${darkTheme.button.primary.backgroundColorDisabled};
              border: 1px solid ${darkTheme.button.primary.borderColor};
              box-shadow: none;
              cursor: not-allowed;
            }

            .drui-button--loading,
            .drui-button--loading:hover {
              background: ${darkTheme.button.primary.backgroundColor};
            }

            .drui-button--promo {
              background: ${darkTheme.button.primary.promo.backgroundColor};
  
              &:hover {
                background: ${darkTheme.button.primary.promo.backgroundColorHover};
              }
  
              &:active {
                background: ${darkTheme.button.primary.promo.backgroundColorActive};
              }
            }
  
            .drui-button--promo.drui-button--disabled {
              background: ${darkTheme.button.primary.promo.backgroundColorDisabled};
              color: ${darkTheme.button.primary.promo.textColorDisabled};
            }
  
            .drui-button--promo.drui-button--loading {
              background: ${darkTheme.button.primary.promo.backgroundColor};
  
              .drui-button__content {
                z-index: -1;
              }
            }

            .drui-button--danger {
              background: ${darkTheme.button.primary.danger.backgroundColor};
  
              &:hover {
                background: ${darkTheme.button.primary.danger.backgroundColorHover};
              }
  
              &:active {
                background: ${darkTheme.button.primary.danger.backgroundColorActive};
              }
            }
  
            .drui-button--danger.drui-button--disabled {
              background: ${darkTheme.button.primary.danger.backgroundColorDisabled};
              color: ${darkTheme.button.primary.danger.textColorDisabled};
            }
  
            .drui-button--danger.drui-button--loading {
              background: ${darkTheme.button.primary.danger.backgroundColor};
  
              .drui-button__content {
                z-index: -1;
              }
            }

            .drui-button--secondary {
              background: ${darkTheme.button.secondary.backgroundColor};
              border: 1px solid ${darkTheme.button.secondary.borderColor};
              color: ${darkTheme.button.secondary.textColor};

              &:hover {
                background: ${darkTheme.button.secondary.backgroundColorHover};
                border: 1px solid ${darkTheme.button.secondary.borderColor};
              }

              &:active {
                background: ${darkTheme.button.secondary.backgroundColorActive};
              }

              .drui-loader {
                border-color: ${darkTheme.button.secondary.loaderColor};
              }

              .drui-button__icon {
                path {
                  fill: ${darkTheme.button.secondary.iconColor};
                }
              }

              .drui-button__dropdownIcon {
                path {
                  fill: ${darkTheme.button.secondary.iconColor};
                }
              }

              &.drui-button--disabled,
              &.drui-button--disabled:hover {
                background: ${darkTheme.button.secondary.backgroundColorDisabled};
                color: ${darkTheme.button.secondary.textColorDisabled};
                box-shadow: none;
                border-color: ${darkTheme.button.secondary.borderColorDisabled};
                cursor: not-allowed;

                .drui-button__dropdownIcon {
                  path {
                    fill: ${darkTheme.button.secondary.iconColorDisabled};
                  }
                }
              }

              &.drui-button--loading,
              &.drui-button--loading:hover {
                background: ${darkTheme.button.secondary.backgroundColor};
                border: 1px solid ${darkTheme.button.secondary.borderColor};
              }

              &.drui-button--danger {
                background: none;
                border: 1px solid ${darkTheme.button.secondary.danger.borderColor};
                color: ${darkTheme.button.secondary.danger.textColor};

                .drui-button__icon {
                  path {
                    fill: ${darkTheme.button.secondary.danger.borderColor};
                  }
                }
    
                &:hover {
                  border-color: ${darkTheme.button.secondary.danger.borderColorHover};
                  color: ${darkTheme.button.secondary.danger.textColorHover};

                  .drui-button__icon {
                    path {
                      fill: ${darkTheme.button.secondary.danger.borderColorHover};
                    }
                  }
                }
    
                &:active {
                  border-color: ${darkTheme.button.secondary.danger.borderColorActive};
                  color: ${darkTheme.button.secondary.danger.textColorActive};

                  .drui-button__icon {
                    path {
                      fill: ${darkTheme.button.secondary.danger.borderColorActive};
                    }
                  }
                }
              }
    
              &.drui-button--danger.drui-button--disabled {
                background: none;
                color: ${darkTheme.button.secondary.danger.textColor};
                border-color: ${darkTheme.button.secondary.danger.borderColorDisabled};
                opacity: 0.3;
              }
    
              &.drui-button--danger.drui-button--loading {
                background: none;
  
                .drui-loader {
                  border-color: ${darkTheme.button.secondary.danger.borderColor};
                }
    
                .drui-button__content {
                  z-index: -1;
                }
              }
            }
          }
        `}</style>
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  Icon: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  maxWidth: PropTypes.bool,
  dropdown: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  buttonType: 'button',
  Icon: null,
  onClick() {},
  className: '',
  disabled: false,
  loading: false,
  maxWidth: false,
  dropdown: false,
};

export default Button;
