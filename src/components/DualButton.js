import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from '../themes/DefaultTheme';
import darkTheme from '../themes/DarkTheme';
import Button from './Button';

class DualButton extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, className, maxWidth, left, right } = this.props;

    return (
      <div
        className={classnames('drui-dualButton', {
          [`drui-dualButton--${type}`]: type,
          'drui-button--maxWidth': maxWidth,
          [className]: className,
        })}
      >
        <Button
          type={type}
          Icon={left.Icon}
          onClick={left.onClick}
          className={left.className}
          disabled={left.disabled}
          loading={left.loading}
          maxWidth={left.maxWidth || maxWidth}
          dropdown={left.dropdown}
        >{left.text}</Button>
        <div className="drui-dualButton__separator" />
        <Button
          type={type}
          Icon={right.Icon}
          onClick={right.onClick}
          className={right.className}
          disabled={right.disabled}
          loading={right.loading}
          maxWidth={right.maxWidth || maxWidth}
          dropdown={right.dropdown}
        >{right.text}</Button>
        <style jsx global>{`
          .drui-dualButton {
            display: flex;
            flex-flow: row nowrap;

            .drui-button:first-child {
              margin: 0;
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
            }

            .drui-button:last-child {
              margin: 0;
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            }
          }

          .drui-dualButton__separator {
            height: 40px;
            width: 1px;
            background: ${defaultTheme.dualButton.primary.separatorColor};
            box-shadow: 0 1px 0 0 ${defaultTheme.dualButton.primary.shadowColor};
            border-left: 1px solid ${defaultTheme.dualButton.primary.borderColor};
          }

          .drui-button--maxWidth {
            width: 100%;
          }

          .drui-dualButton--secondary {
            .drui-button:first-child {
              border-right: none;
            }

            .drui-button:last-child {
              border-left: none;
            }

            .drui-dualButton__separator {
              height: 38px;
              background: ${defaultTheme.dualButton.secondary.separatorColor};
              box-shadow: none;
              border: 1px solid ${defaultTheme.dualButton.secondary.borderColor};
              border-right: none;
            }
          }

          .theme--dark {
            .drui-dualButton__separator {
              background: ${darkTheme.dualButton.primary.separatorColor};
              box-shadow: none;
              border-left: 1px solid ${darkTheme.dualButton.primary.borderColor};
            }

            .drui-dualButton--secondary {
              .drui-dualButton__separator {
                background: ${darkTheme.dualButton.secondary.separatorColor};
                border: 1px solid ${darkTheme.dualButton.secondary.borderColor};
                border-right: none;
              }
            }
          }
        `}</style>
      </div>
    );
  }
}

DualButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  maxWidth: PropTypes.bool,
  left: PropTypes.shape().isRequired,
  right: PropTypes.shape().isRequired,
};

DualButton.defaultProps = {
  type: 'primary',
  className: '',
  maxWidth: false,
};

export default DualButton;
