import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';

import Dropdown from './Dropdown';

class DropdownWithToggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: props.isActive || false,
      toggler: {
        width: 0,
        height: 0,
      },
      dropdownPosition: ['center', 'bottom'],
      dropdownArrowStyles: {},
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);

    this.togglerElemRef = undefined;
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
      toggler: {
        width: this.togglerElemRef.offsetWidth,
        height: this.togglerElemRef.offsetHeight,
      }
    });
  }

  getDropdownPosition(rectBounds, container) {
    const containerHeight = container ? container.innerHeight : window.innerHeight;
    const containerWidth = container ? container.innerWidth : window.innerWidth;

    const { top, right, bottom, left } = rectBounds;
    const horizontalPosition = {
      top: bottom > containerHeight && containerHeight > top,
      bottom: top > containerHeight && containerHeight > bottom,
    };
    const verticalPosition = {
      right: right > containerWidth && containerWidth > left,
      left: left > containerWidth && containerWidth > right,
    };

    return [
      Object.keys(horizontalPosition).find((key) => horizontalPosition[key]) || 'bottom',
      Object.keys(verticalPosition).find((key) => verticalPosition[key]) || 'center'
    ];
  }

  handleDropdownPosition() {
    const dropdownRectBounds = this.dropdownElemRef.getBoundingClientRect();
    const dropdownPosition = this.getDropdownPosition(dropdownRectBounds);

    this.setState({
      dropdownArrowStyles: {
        right: 0,
        left: 'auto',
      },
      dropdownPosition,
    });
  }

  toggleDropdown() {
    this.setState({ isActive: !this.state.isActive }, this.handleDropdownPosition);
  }

  // Method is needed for react-click-outside. Naming must stay the same.
  handleClickOutside() {
    this.setState({ isActive: false });
  }

  isElementInViewport(rect) {
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
  }

  render() {
    const { className, children } = this.props;

    return (
      <div
        className={classnames(
          'drui-dropdown__wrapper',
          { [className]: className }
        )}
        style={this.state.style}
      >
        {this.TogglerElem}

        <Dropdown
          isActive={this.state.isActive}
          close={this.toggleDropdown}
          dropdownStyles={this.state.dropdownStyles}
          onRef={(node) => { this.dropdownElemRef = node; }}
          dropdownArrowStyles={this.state.dropdownArrowStyles}
          dropdownPosition={this.state.dropdownPosition}
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
