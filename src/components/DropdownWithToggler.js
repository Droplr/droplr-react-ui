import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';

import Dropdown from './Dropdown';

class DropdownWithToggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: props.isActive || false,
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);

    this.TogglerElem = React.cloneElement(
      props.Toggler,
      {
        ...props.Toggler.props,
        onClick: this.toggleDropdown
      }
    );
  }

  toggleDropdown() {
    this.setState({ isActive: !this.state.isActive });
  }

  // Method is needed for react-click-outside. Naming must stay the same.
  handleClickOutside() {
    this.setState({ isActive: false });
  }

  render() {
    const { className, children } = this.props
    return (
      <div className={classnames('drui-dropdown__wrapper', {
        [className]: className })}>
        {this.TogglerElem}

        <Dropdown
          isActive={this.state.isActive}
          close={this.toggleDropdown}
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
