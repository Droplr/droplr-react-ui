import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';
import { DownloadIcon } from '../src/components/icons';

storiesOf('Button Secondary', module)
  .addWithJSX('secondary', () => (
    <Button type="secondary">Secondary Button</Button>
  ))
  .addWithJSX('secondary max-width', () => (
    <Button type="secondary" maxWidth>Secondary Button</Button>
  ))
  .addWithJSX('secondary loading', () => (
    <Button type="secondary" loading>Secondary Button</Button>
  ))
  .addWithJSX('secondary disabled', () => (
    <Button type="secondary" disabled>Secondary Button</Button>
  ))
  .addWithJSX('secondary dropdown', () => (
    <Button type="secondary" dropdown>Secondary Dropdown Button</Button>
  ))
  .addWithJSX('secondary dropdown max-width', () => (
    <Button type="secondary" dropdown maxWidth>Secondary Dropdown Button</Button>
  ))
  .addWithJSX('secondary dropdown no-text', () => (
    <Button type="secondary" dropdown />
  ))
  .addWithJSX('secondary with icon', () => (
    <Button type="secondary" Icon={DownloadIcon}>Secondary Button with Icon</Button>
  ))
  .addWithJSX('secondary with icon max-width', () => (
    <Button type="secondary" Icon={DownloadIcon} maxWidth>Secondary Button with Icon</Button>
  ))
  .addWithJSX('secondary with icon max-width dropdown', () => (
    <Button type="secondary" Icon={DownloadIcon} dropdown maxWidth>Secondary Button with Icon</Button>
  ))
  .addWithJSX('secondary with icon no-text', () => (
    <Button type="secondary" Icon={DownloadIcon} />
  ))
