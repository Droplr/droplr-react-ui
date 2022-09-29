import React from 'react';
import { storiesOf } from '@storybook/react';
import ThumbnailSwitch from '../src/components/ThumbnailSwitch';
import { CameraIcon } from '../src/components/icons';
import { PhotoCameraIcon } from '../src/components/icons';
import { VideoCamIcon } from '../src/components/icons';

const optionsWithIcons = [
  {
    label: 'Webcam + Screen',
    id: 0,
    icon: PhotoCameraIcon,
  },
  {
    label: 'Screen only',
    id: 1,
    icon: VideoCamIcon,
  },
  {
    label: 'Webcam only',
    id: 2,
    icon: CameraIcon,
  }
];

const onChange = (e) => {
  console.log('Object: ', e.id, e.label);
}

let x = {};

storiesOf('ThumbnailSwitch /', module)
.addWithJSX('normal', () => (
  <ThumbnailSwitch
    options={optionsWithIcons}
    defaultOption={optionsWithIcons[1]}
    onChange={onChange}
    selected={(e) => {x = e.label}}
  />
))
