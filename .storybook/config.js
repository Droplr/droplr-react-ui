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
          background: ${defaultTheme.window.backgroundColor};
        }
      `}</style>
    </div>
    <div className="storyWrapperDark theme--dark">
      {storyFn()}
      <style jsx>{`
        .storyWrapperDark {
          width: 400px;
          padding: 40px;
          background: ${darkTheme.window.backgroundColor};
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
  require('../stories/Icons');
}

configure(loadStories, module);
