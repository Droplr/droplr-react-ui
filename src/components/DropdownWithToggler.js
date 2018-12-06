import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';

class DropdownWithToggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: props.isActive || false,
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(e) {
    e.stopPropagation();

    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const { children, Toggler } = this.props;
    console.log(<Toggler />);

    return (
      <>
        <Toggler onClick={this.toggleDropdown} />
        <Dropdown isActive={this.state.isActive}>
          {children || null}
        </Dropdown>
      </>
    );
  }
}

DropdownWithToggler.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  Toggler: PropTypes.node.isRequired,
};

DropdownWithToggler.defaultProps = {
  isActive: false,
};

export default DropdownWithToggler;
