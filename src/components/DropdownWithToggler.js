import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';

import Dropdown from './Dropdown';

class DropdownWithToggler extends React.PureComponent {
  constructor(props) {
    super(props);

    this.dropdownInitialState = {
      positionY: 'center',
      positionX: 'bottom',
      arrowStyles: {},
    }
    this.togglerElemRef = React.createRef();
    this.dropdownElemRef = undefined;

    this.state = {
      isActive: props.isActive,
      wrapperStyles: {
        width: 0,
        height: 0,
      },
      ...this.dropdownInitialState,
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.setDropdownElemRef = this.setDropdownElemRef.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.setToggler();
  }

  componentDidMount() {
    this.togglerElemRef.current = this.togglerElemRef.current.firstElementChild;

    const { current } = this.togglerElemRef;
    this.setState({
      wrapperStyles: {
        width: current.offsetWidth || current.clientWidth,
        height: current.offsetHeight || current.clientHeight,
      }
    });
  }

  getCurrentDropdownPosition() {
    const containerHeight = window.innerHeight || document.documentElement.offsetHeight;
    const containerWidth = window.innerWidth || document.documentElement.offsetWidth;
    const { top, right, bottom, left, height } = this.dropdownElemRef.getBoundingClientRect();
    const togglerHeight = this.togglerElemRef.current.offsetHeight || this.togglerElemRef.current.clientHeight;

    const positionY = (
      bottom > containerHeight && containerHeight + togglerHeight > top && height < containerHeight
    ) ? 'top' : 'bottom';
    let positionX = 'center';

    if (right > containerWidth && containerWidth) {
      positionX = 'right';
    } else if (left < 0 && containerWidth > right) {
      positionX = 'left';
    }

    return {
      positionY,
      positionX,
    };
  }

  getArrowStyles(dropdownPosition) {
    if (!dropdownPosition) return;

    const togglerWidth = this.togglerElemRef.current.offsetWidth || this.togglerElemRef.current.clientWidth;
    const arrowPosition = togglerWidth / 2;
    const arrowPositionStyles = {
      left: {
        left: `${arrowPosition}px`,
        right: 'auto',
      },
      right: {
        right: `${arrowPosition}px`,
        left: 'auto',
      }
    }

    return arrowPositionStyles[dropdownPosition];
  }

  setToggler() {
    const { Toggler } = this.props;
    let localTogglerElem = Toggler;

    if (typeof localTogglerElem === 'function') {
      localTogglerElem = localTogglerElem();
    }

    this.TogglerElem = React.cloneElement(
      localTogglerElem,
      { ...Toggler.props }
    );
  }

  setDropdownPosition() {
    const dropdownPosition = this.getCurrentDropdownPosition();

    this.setState({
      arrowStyles: this.getArrowStyles(dropdownPosition.positionX),
      ...dropdownPosition,
    });
  }

  setDropdownElemRef(node) {
    this.dropdownElemRef = node;
  }

  toggleDropdown() {
    this.props.onClick();

    let state = { isActive: !this.state.isActive };
    if (this.state.isActive) state = { ...state, ...this.dropdownInitialState };

    this.setState(
      { ...state },
      this.setDropdownPosition
    );
  }

  // Method is needed for react-click-outside. Naming must stay the same.
  handleClickOutside() {
    this.setState({ isActive: false, ...this.dropdownInitialState });
  }

  onMouseLeave(e) {
    e.stopPropagation();

    if (this.props.closeOnMouseLeave) {
      this.toggleDropdown();
    }

    this.props.onMouseLeave();
  }

  render() {
    const {
      className,
      children,
      closeOnItemClick,
      showItemStatus,
      header,
    } = this.props;
    const { positionX, positionY, wrapperStyles, arrowStyles, isActive } = this.state;

    return (
      <div
        className={classnames(
          'drui-dropdown__wrapper',
          { [className]: className }
        )}
        style={wrapperStyles}
      >
        <div
          className="drui-dropdown__togglerWrapper"
          ref={this.togglerElemRef}
          onClick={this.toggleDropdown}
          style={wrapperStyles}
          role="button"
          aria-haspopup="true"
          aria-labelledby={header || null}
          aria-expanded={isActive}
        >
          {this.TogglerElem}
        </div>

        <Dropdown
          isActive={isActive}
          close={this.toggleDropdown}
          onRef={this.setDropdownElemRef}
          arrowStyles={arrowStyles}
          positionX={positionX}
          positionY={positionY}
          header={header}
          closeOnItemClick={closeOnItemClick}
          showItemStatus={showItemStatus}
          onMouseLeave={this.onMouseLeave}
        >
          {children || null}
        </Dropdown>

        <style jsx global>{`
          .drui-dropdown__wrapper {
            position: relative; // Dropdown is positioned relatively to this wrapper
            display: inline-block;
            width: auto;

            .drui-dropdown {
              position: absolute;
            }
          }

          .drui-dropdown__togglerWrapper {
            cursor: pointer;
            &:hover,
            > * {
              cursor: pointer;
            }
          }
        `}</style>
      </div>
    );
  }
}

DropdownWithToggler.propTypes = {
  Toggler: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  closeOnItemClick: PropTypes.bool,
  showItemStatus: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ])),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  header: PropTypes.string,
  closeOnMouseLeave: PropTypes.bool,
  onMouseLeave: PropTypes.func,
};

DropdownWithToggler.defaultProps = {
  className: '',
  isActive: false,
  closeOnItemClick: false,
  showItemStatus: false,
  closeOnMouseLeave: false,
  header: '',
  onClick() {},
  onMouseLeave() {},
};

export default enhanceWithClickOutside(DropdownWithToggler);
