import React from 'react';
import { storiesOf } from '@storybook/react';
import DualButton from '../src/components/DualButton';
import { DownloadIcon } from '../src/components/icons';

storiesOf('Dual Button', module)
  .addWithJSX('primary', () => (
    <DualButton
      type="primary"
      left={{
        text: 'Left Button',
      }}
      right={{
        text: 'Right Button',
      }}
    />
  ))
  .addWithJSX('primary maxWidth dropdown', () => (
    <DualButton
      type="primary"
      maxWidth
      left={{
        text: 'Left Button',
      }}
      right={{
        text: 'Right Button',
        dropdown: true,
      }}
    />
  ))
  .addWithJSX('primary left maxWidth dropdown', () => (
    <DualButton
      type="primary"
      left={{
        text: 'Left Button',
        maxWidth: true,
      }}
      right={{
        dropdown: true,
      }}
    />
  ))
  .addWithJSX('primary dropdown', () => (
    <DualButton
      type="primary"
      left={{
        text: 'Left Button',
      }}
      right={{
        dropdown: true,
      }}
    />
  ))
  .addWithJSX('primary with icon dropdown', () => (
    <DualButton
      type="primary"
      left={{
        Icon: DownloadIcon,
        text: 'Left Button',
      }}
      right={{
        text: 'Right Button',
        dropdown: true,
      }}
    />
  ))
  .addWithJSX('secondary', () => (
    <DualButton
      type="secondary"
      left={{
        text: 'Left Button',
      }}
      right={{
        text: 'Right Button',
      }}
    />
  ))
  .addWithJSX('secondary maxWidth dropdown', () => (
    <DualButton
      type="secondary"
      maxWidth
      left={{
        text: 'Left Button',
      }}
      right={{
        text: 'Right Button',
        dropdown: true,
      }}
    />
  ))
  .addWithJSX('secondary left maxWidth dropdown', () => (
    <DualButton
      type="secondary"
      left={{
        text: 'Left Button',
        maxWidth: true,
      }}
      right={{
        dropdown: true,
      }}
    />
  ))
  .addWithJSX('secondary dropdown', () => (
    <DualButton
      type="secondary"
      left={{
        text: 'Left Button',
      }}
      right={{
        dropdown: true,
      }}
    />
  ))
  .addWithJSX('secondary with icon dropdown', () => (
    <DualButton
      type="secondary"
      left={{
        Icon: DownloadIcon,
        text: 'Left Button',
      }}
      right={{
        text: 'Right Button',
        dropdown: true,
      }}
    />
  ))
