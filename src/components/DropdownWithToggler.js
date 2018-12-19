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
      dropdownPosition: ['center', 'bottom'],
      arrowStyles: {},
    }
    this.togglerElemRef = undefined;
    this.dropdownElemRef = undefined;

    this.state = {
      isActive: props.isActive || false,
      wrapperStyles: {
        width: 0,
        height: 0,
      },
      ...this.dropdownInitialState,
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);

    this.TogglerElem = React.cloneElement(
      props.Toggler,
      {
        ...props.Toggler.props,
        onClick: this.toggleDropdown,
        ref: node => this.togglerElemRef = ReactDOM.findDOMNode(node),
      }
    );
  }

  componentDidMount() {
    this.setState({
      wrapperStyles: {
        width: this.togglerElemRef.offsetWidth,
        height: this.togglerElemRef.offsetHeight,
      }
    });
  }

  getCurrentDropdownPosition() {
    const containerHeight = typeof window !== 'undefined' ? window.innerHeight : document.documentElement.offsetHeight;
    const containerWidth = typeof window !== 'undefined' ? window.innerWidth : document.documentElement.offsetWidth;
    const { top, right, bottom, left, height } = this.dropdownElemRef.getBoundingClientRect();

    const verticalPosition = {
      top: bottom > containerHeight && containerHeight + this.togglerElemRef.offsetHeight > top && height < containerHeight,
      bottom: top > containerHeight && containerHeight > bottom && containerHeight < containerHeight,
    };
    const horizontalPosition = {
      right: right > containerWidth && containerWidth > left,
      left: left < 0 && containerWidth > right,
    };

    console.log(verticalPosition)

    return [
      Object.keys(verticalPosition).find((key) => verticalPosition[key]) || 'bottom',
      Object.keys(horizontalPosition).find((key) => horizontalPosition[key]) || 'center',
    ];
  }

  getArrowStyles(positionsArray) {
    if (!positionsArray.includes('right') && !positionsArray.includes('left')) return null;

    const dropdownPosition = positionsArray.includes('right') ? 'right' : 'left';
    const arrowPosition = this.togglerElemRef.offsetWidth / 2;
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

  setDropdownPosition() {
    const dropdownPosition = this.getCurrentDropdownPosition();

    this.setState({
      arrowStyles: this.getArrowStyles(dropdownPosition),
      dropdownPosition,
    });
  }

  toggleDropdown() {
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

  render() {
    const { className, children } = this.props;

    return (
      <div
        className={classnames(
          'drui-dropdown__wrapper',
          { [className]: className }
        )}
        style={this.state.wrapperStyles}
      >
        {this.TogglerElem}

        <Dropdown
          isActive={this.state.isActive}
          close={this.toggleDropdown}
          onRef={(node) => { this.dropdownElemRef = node; }}
          arrowStyles={this.state.arrowStyles}
          position={this.state.dropdownPosition}
          closeOnItemClick
        >
          {children || null}
        </Dropdown>

        <style jsx global>{`
          .drui-dropdown__wrapper {
            position: relative; // Dropdown is positioned relatively to this wrapper
            display: inline-block;
            width: auto;
            font-size: 0; // Needed to remove 4px paddings added by browsers

            .drui-dropdown {
              position: absolute;
            }
          }
        `}</style>
      </div>
    );
  }
}

DropdownWithToggler.propTypes = {
  Toggler: PropTypes.node.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  closeOnItemClick: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

DropdownWithToggler.defaultProps = {
  className: '',
  isActive: false,
  closeOnItemClick: true,
};

export default enhanceWithClickOutside(DropdownWithToggler);
