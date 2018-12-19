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

storiesOf('Input', module)
  .addDecorator(InputDecorator)
  .addWithJSX('normal', () => (
    <Input name="Name" />
  ))
  .addWithJSX('disabled', () => (
    <Input name="Name" disabled />
  ))
  .addWithJSX('placeholder', () => (
    <Input name="Name" placeholder="Type something..." />
  ))
  .addWithJSX('password', () => (
    <Input name="Name" type="password" />
  ))
  .addWithJSX('password visible', () => (
    <Input name="Name" type="password" passwordVisible />
  ))
  .addWithJSX('password toggle', () => (
    <Input name="Name" type="password" passwordVisibilityToggle />
  ))
  .addWithJSX('password toggle visible', () => (
    <Input name="Name" type="password" passwordVisibilityToggle passwordVisible />
  ))
  .addWithJSX('password toggle error', () => (
    <Input name="Name" type="password" passwordVisibilityToggle error="Sample error text..." />
  ))
  .addWithJSX('auto focus', () => (
    <Input name="Name" autoFocus />
  ))
  .addWithJSX('read only', () => (
    <Input name="Name" readOnly value="Sample text..." />
  ))
  .addWithJSX('label', () => (
    <Input name="Name" label="Label" />
  ))
  .addWithJSX('sublabel', () => (
    <Input name="Name" sublabel="Sublabel" />
  ))
  .addWithJSX('info', () => (
    <Input name="Name" info="Sample info text..." />
  ))
  .addWithJSX('error', () => (
    <Input name="Name" error="Sample error text..." />
  ))
  .addWithJSX('label sublabel info error', () => (
    <Input name="Name" label="Label" sublabel="Sublabel" info="Sample info text..." error="Sample error text..." />
  ))
