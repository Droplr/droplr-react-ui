import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';
import { DownloadIcon } from '../src/components/icons';

storiesOf('Button Primary', module)
  .addWithJSX('primary', () => (
    <Button type="primary">Primary Button</Button>
  ))
  .addWithJSX('primary max-width', () => (
    <Button type="primary" maxWidth>Primary Button</Button>
  ))
  .addWithJSX('primary loading', () => (
    <Button type="primary" loading>Primary Button</Button>
  ))
  .addWithJSX('primary disabled', () => (
    <Button type="primary" disabled>Primary Button</Button>
  ))
  .addWithJSX('primary dropdown', () => (
    <Button type="primary" dropdown>Primary Dropdown Button</Button>
  ))
  .addWithJSX('primary dropdown max-width', () => (
    <Button type="primary" dropdown maxWidth>Primary Dropdown Button</Button>
  ))
  .addWithJSX('primary dropdown no-text', () => (
    <Button type="primary" dropdown />
  ))
  .addWithJSX('primary with icon', () => (
    <Button type="primary" Icon={DownloadIcon}>Primary Button with Icon</Button>
  ))
  .addWithJSX('primary with icon max-width', () => (
    <Button type="primary" Icon={DownloadIcon} maxWidth>Primary Button with Icon</Button>
  ))
  .addWithJSX('primary with icon max-width dropdown', () => (
    <Button type="primary" Icon={DownloadIcon} dropdown maxWidth>Primary Button with Icon</Button>
  ))
  .addWithJSX('primary with icon no-text', () => (
    <Button type="primary" Icon={DownloadIcon} />
  ))
