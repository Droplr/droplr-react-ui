import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../src/components/Input';

const InputDecorator = (storyFn) => (
  <>
    {storyFn()}
    <style jsx global>{`
      .storyWrapperDark {
        background: #3A3A43 !important;
      }
    `}</style>
  </>
);

class InputWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Input
        value={this.state.value}
        onChange={this.onChange}
        {...this.props}
      />
    );
  };
}

storiesOf('Input', module)
  .addDecorator(InputDecorator)
  .addWithJSX('normal', () => (
    <InputWrapper name="Name" />
  ))
  .addWithJSX('disabled', () => (
    <InputWrapper name="Name" disabled />
  ))
  .addWithJSX('placeholder', () => (
    <InputWrapper name="Name" placeholder="Type something..." />
  ))
  .addWithJSX('password', () => (
    <InputWrapper name="Name" type="password" />
  ))
  .addWithJSX('password visible', () => (
    <InputWrapper name="Name" type="password" passwordVisible />
  ))
  .addWithJSX('password toggle', () => (
    <InputWrapper name="Name" type="password" passwordVisibilityToggle />
  ))
  .addWithJSX('password toggle visible', () => (
    <InputWrapper name="Name" type="password" passwordVisibilityToggle passwordVisible />
  ))
  .addWithJSX('password toggle error', () => (
    <InputWrapper name="Name" type="password" passwordVisibilityToggle error="Sample error text..." />
  ))
  .addWithJSX('auto focus', () => (
    <InputWrapper name="Name" autoFocus />
  ))
  .addWithJSX('read only', () => (
    <InputWrapper name="Name" readOnly value="Sample text..." />
  ))
  .addWithJSX('label', () => (
    <InputWrapper name="Name" label="Label" />
  ))
  .addWithJSX('sublabel', () => (
    <InputWrapper name="Name" sublabel="Sublabel" />
  ))
  .addWithJSX('info', () => (
    <InputWrapper name="Name" info="Sample info text..." />
  ))
  .addWithJSX('error', () => (
    <InputWrapper name="Name" error="Sample error text..." />
  ))
  .addWithJSX('label sublabel info error', () => (
    <InputWrapper name="Name" label="Label" sublabel="Sublabel" info="Sample info text..." error="Sample error text..." />
  ))
