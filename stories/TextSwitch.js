import React from 'react';
import { storiesOf } from '@storybook/react';
import TextSwitch from '../src/components/TextSwitch';
import { DownloadIcon } from '../src/components/icons';
import { UrlIcon } from '../src/components/icons';
import { ZipIcon } from '../src/components/icons';

const options = [
  {
    label: 'Option One',
    id: 0,
  },
  {
    label: 'Option Two',
    id: 1,
  },
  {
    label: 'Option Three',
    id: 2,
  }
];

const optionsWithIcons = [
  {
    label: 'Option One',
    id: 0,
    icon: DownloadIcon,
  },
  {
    label: 'Option Two',
    id: 1,
    icon: ZipIcon,
  },
  {
    label: 'Option Three',
    id: 2,
    icon: UrlIcon,
  }
];

const onChange = (e) => {
  console.log('Object: ', e.id, e.label);
}

let x = {};

storiesOf('TextSwitch /', module)
.addWithJSX('normal', () => (
  <TextSwitch
    options={options}
    defaultOption={options[1]}
    onChange={onChange}
    selected={(e) => {x = e.label}}
  />
))
.addWithJSX('with icon', () => (
  <TextSwitch
    options={optionsWithIcons}
    defaultOption={optionsWithIcons[1]}
    onChange={onChange}
    selected={(e) => {x = e.label}}
  />
))
