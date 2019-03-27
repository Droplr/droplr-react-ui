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
    <SwitchWrapper label="Label text..." />
  ))
  .addWithJSX('disabled', () => (
    <SwitchWrapper disabled />
  ))

storiesOf('Switch / Label positions', module)
  .addWithJSX('left (default)', () => (
    <SwitchWrapper label="Label text..." />
  ))
  .addWithJSX('right', () => (
    <SwitchWrapper label="Label text..." position="right" />
  ))
  .addWithJSX('top', () => (
    <SwitchWrapper label="Label text..." position="top" />
  ))
  .addWithJSX('bottom', () => (
    <SwitchWrapper label="Label text..." position="bottom" />
  ))