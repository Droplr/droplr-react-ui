import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';
import { DownloadIcon } from '../src/components/icons';

storiesOf('Button Primary /', module)
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

storiesOf('Button Primary / Promo', module)
  .addWithJSX('primary promo', () => (
    <Button type="primary" stage="promo">Primary Promo Button</Button>
  ))
  .addWithJSX('primary promo loading', () => (
    <Button type="primary" stage="promo" loading>Primary Promo Button</Button>
  ))
  .addWithJSX('primary promo disabled', () => (
    <Button type="primary" stage="promo" disabled>Primary Promo Button</Button>
  ))
  .addWithJSX('primary promo with icon', () => (
    <Button type="primary" stage="promo" Icon={DownloadIcon}>Primary Promo Button with Icon</Button>
  ))

storiesOf('Button Primary / Danger', module)
  .addWithJSX('primary danger', () => (
    <Button type="primary" stage="danger">Primary Danger Button</Button>
  ))
  .addWithJSX('primary danger loading', () => (
    <Button type="primary" stage="danger" loading>Primary Danger Button</Button>
  ))
  .addWithJSX('primary danger disabled', () => (
    <Button type="primary" stage="danger" disabled>Primary Danger Button</Button>
  ))
  .addWithJSX('primary danger with icon', () => (
    <Button type="primary" stage="danger" Icon={DownloadIcon}>Primary Danger Button with Icon</Button>
  ))

storiesOf('Button Primary / Info', module)
  .addWithJSX('primary info', () => (
    <Button type="primary" stage="info">Primary Info Button</Button>
  ))
  .addWithJSX('primary info loading', () => (
    <Button type="primary" stage="info" loading>Primary Info Button</Button>
  ))
  .addWithJSX('primary info disabled', () => (
    <Button type="primary" stage="info" disabled>Primary Info Button</Button>
  ))
  .addWithJSX('primary info with icon', () => (
    <Button type="primary" stage="info" Icon={DownloadIcon}>Primary Info Button with Icon</Button>
  ))

storiesOf('Button Primary / Warning', module)
  .addWithJSX('primary warning', () => (
    <Button type="primary" stage="warning">Primary Warning Button</Button>
  ))
  .addWithJSX('primary warning loading', () => (
    <Button type="primary" stage="warning" loading>Primary Warning Button</Button>
  ))
  .addWithJSX('primary warning disabled', () => (
    <Button type="primary" stage="warning" disabled>Primary Warning Button</Button>
  ))
  .addWithJSX('primary warning with icon', () => (
    <Button type="primary" stage="warning" Icon={DownloadIcon}>Primary Warning Button with Icon</Button>
  ))
