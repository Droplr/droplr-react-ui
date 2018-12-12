import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import defaultTheme from '../src/themes/DefaultTheme';
import darkTheme from '../src/themes/DarkTheme';

setAddon(JSXAddon);

const ThemesDecorator = (storyFn) => (
  <>
    <div className="storyWrapperLight">
      {storyFn()}
      <style jsx>{`
        .storyWrapperLight {
          width: 400px;
          padding: 40px;
          background: #F8F9FC;
        }
      `}</style>
    </div>
    <div className="storyWrapperDark theme--dark">
      {storyFn()}
      <style jsx>{`
        .storyWrapperDark {
          width: 400px;
          padding: 40px;
          background: #2D2E33;
        }
      `}</style>
    </div>
  </>
);

addDecorator(ThemesDecorator);

function loadStories() {
  require('../stories/ButtonPrimary');
  require('../stories/ButtonSecondary');
  require('../stories/DualButton');
  require('../stories/Input');
  require('../stories/Icons');
}

configure(loadStories, module);
