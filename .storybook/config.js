import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

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
        @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700');

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
  require('../stories/Dropdown');
  require('../stories/DropdownItem');
  require('../stories/DropdownWithToggler');
  require('../stories/DualButton');
  require('../stories/Input');
  require('../stories/Switch');
  require('../stories/Icons');
}

configure(loadStories, module);
