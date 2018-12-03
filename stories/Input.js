import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../src/components/Input';

storiesOf('Input', module)
  .addWithJSX('normal', () => (
    <Input />
  ))
  .addWithJSX('disabled', () => (
    <Input disabled />
  ))
  .addWithJSX('placeholder', () => (
    <Input placeholder="Type something..." />
  ))
  .addWithJSX('password', () => (
    <Input type="password" />
  ))
  .addWithJSX('auto focus', () => (
    <Input autoFocus />
  ))
  .addWithJSX('read only', () => (
    <Input readOnly value="Sample text..." />
  ))
  .addWithJSX('label', () => (
    <Input label="Label" />
  ))
  .addWithJSX('sublabel', () => (
    <Input sublabel="Sublabel" />
  ))
  .addWithJSX('label + sublabel', () => (
    <Input label="Label" sublabel="Sublabel" />
  ))
  .addWithJSX('info', () => (
    <Input info="Sample info text..." />
  ))
  .addWithJSX('error', () => (
    <Input error="Sample error text..." />
  ))
  .addWithJSX('label + error', () => (
    <Input label="Label" value="example@mail.com" error="Sample error text..." />
  ))
  .addWithJSX('label + sublabel + error', () => (
    <Input label="Label" sublabel="Sublabel" value="example@mail.com" error="Sample error text..." />
  ))