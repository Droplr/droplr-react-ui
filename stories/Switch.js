import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from '../src/components/Switch';

class SwitchWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <Switch
        checked={this.state.checked}
        onChange={this.onChange}
        {...this.props}
      />
    );
  };
}

storiesOf('Switch /', module)
  .addWithJSX('normal', () => (
    <SwitchWrapper />
  ))
  .addWithJSX('normal with label', () => (
    <SwitchWrapper labelContent="Label text..." />
  ))
  .addWithJSX('disabled', () => (
    <SwitchWrapper disabled />
  ))

storiesOf('Switch / Label positions', module)
  .addWithJSX('left (default)', () => (
    <SwitchWrapper labelContent="Label text..." />
  ))
  .addWithJSX('right', () => (
    <SwitchWrapper labelContent="Label text..." labelPosition="right" />
  ))
  .addWithJSX('top', () => (
    <SwitchWrapper labelContent="Label text..." labelPosition="top" />
  ))
  .addWithJSX('bottom', () => (
    <SwitchWrapper labelContent="Label text..." labelPosition="bottom" />
  ))
