import React from 'react';
import { storiesOf } from '@storybook/react';
import TextSwitch from '../src/components/TextSwitch';

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

const onChange = (e) => {
  console.log('Object: ', e.id, e.label);
}

let x = {};

storiesOf('TextSwitch /', module)
  .addWithJSX('text-switch-normal', () => (
    <TextSwitch
      options={options}
      defaultOption={options[1]}
      onChange={onChange}
      selected={(e) => {x = e.label}}
    />
  ))
